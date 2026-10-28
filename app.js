/**
 * EGO Bus Tracker Application
 * Main JavaScript file for the EGO public transport tracking app
 */

// API Configuration
const API_BASE = window.location.origin;

// State Management
const state = {
    lines: [],
    stops: [],
    announcements: [],
    currentStop: null,
    liveData: null,
    liveInterval: null,
    stopCode: ''
};

// DOM Elements
const elements = {
    tabs: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    lineSearch: document.getElementById('lineSearch'),
    searchLinesBtn: document.getElementById('searchLinesBtn'),
    linesResults: document.getElementById('linesResults'),
    linesLoading: document.getElementById('linesLoading'),
    stopSearch: document.getElementById('stopSearch'),
    searchStopsBtn: document.getElementById('searchStopsBtn'),
    stopsResults: document.getElementById('stopsResults'),
    stopsLoading: document.getElementById('stopsLoading'),
    stopCode: document.getElementById('stopCode'),
    lineCode: document.getElementById('lineCode'),
    trackBtn: document.getElementById('trackBtn'),
    liveResults: document.getElementById('liveResults'),
    liveList: document.getElementById('liveList'),
    refreshLive: document.getElementById('refreshLive'),
    geoSearch: document.getElementById('geoSearch'),
    geoSearchBtn: document.getElementById('geoSearchBtn'),
    geoResults: document.getElementById('geoResults'),
    geoLoading: document.getElementById('geoLoading'),
    announcementsList: document.getElementById('announcementsList'),
    modal: document.getElementById('stopModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    closeModal: document.querySelector('.close-modal')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initEventListeners();
    loadLines();
    loadAnnouncements();
});

// Tab Navigation
function initTabs() {
    elements.tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            
            // Update active tab
            elements.tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update active content
            elements.tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === target) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Event Listeners
function initEventListeners() {
    // Lines search
    elements.lineSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchLines(elements.lineSearch.value);
    });
    elements.searchLinesBtn.addEventListener('click', () => searchLines(elements.lineSearch.value));

    // Stops search
    elements.stopSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchStops(elements.stopSearch.value);
    });
    elements.searchStopsBtn.addEventListener('click', () => searchStops(elements.stopSearch.value));

    // Live tracking
    elements.trackBtn.addEventListener('click', startLiveTracking);
    elements.refreshLive.addEventListener('click', stopLiveTracking);

    // Geo search
    elements.geoSearchBtn.addEventListener('click', () => searchGeo(elements.geoSearch.value));

    // Modal
    elements.closeModal.addEventListener('click', closeModal);
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) closeModal();
    });
}

// API Helper
async function apiRequest(endpoint, params = {}) {
    console.log('API Request:', { endpoint, params });
    
    // Build query string from params
    const queryParams = new URLSearchParams(params).toString();
    // URL encode the endpoint to handle special characters
    const encodedEndpoint = encodeURIComponent(endpoint);
    
    try {
        const response = await fetch(`${API_BASE}/proxy?path=${encodedEndpoint}&${queryParams}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        const text = await response.text();
        return JSON.parse(text);
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// API Endpoints
const API_ENDPOINTS = {
    // Hat listesi (action.asp with FNC=Hatlar)
    hatlar: '/hibrit/action.asp',
    // Hat detayları (act.asp with FNC=HatBilgileri)
    hatBilgileri: '/hibrit/action.asp',
    // Duraklar (action.asp with FNC=Duraklar)
    duraklar: '/hibrit/action.asp',
    // Duraktan geçen hatlar (action.asp with FNC=DuraktanGecenHatlar)
    duraktanGecenHatlar: '/hibrit/action.asp',
    // Duraktan geçiş saatleri (action.asp with FNC=DuraktanGecisSaatleri)
    duraktanGecisSaatleri: '/hibrit/action.asp',
    // Duyurular (action.asp with FNC=Duyurular)
    duyurular: '/hibrit/action.asp',
    // Yakın duraklar (action.asp with FNC=YakinDuraklar)
    yakinDuraklar: '/hibrit/action.asp',
    // Canlı takip (srv.asp with FNC=Otobusler)
    canlıTakip: '/hibrit/srv.asp'
};

// Global lines cache for local filtering
let allLines = [];

// Load Lines
async function loadLines(query = '') {
    try {
        showLoading(elements.linesLoading);
        elements.linesResults.innerHTML = '';

        const params = {};
        const data = await apiRequest(API_ENDPOINTS.hatlar, { FNC: 'Hatlar', ...params, LAN: 'tr' });

        // Cache all lines globally for local filtering
        allLines = data.table || [];
        
        let lines = [...allLines];
        
        // Filter results if query provided (client-side filtering)
        if (query && query.trim()) {
            const q = query.toLowerCase().trim();
            lines = lines.filter(line => {
                const ad = (line.ad || '').toLowerCase();
                const kod = (line.kod || '').toLowerCase();
                return ad.includes(q) || kod.includes(q);
            });
        }

        if (lines.length > 0) {
            state.lines = lines;
            renderLines(lines);
        } else {
            elements.linesResults.innerHTML = '<p style="text-align:center; color:var(--danger);">Hatlar yüklenemedi</p>';
        }
    } catch (error) {
        elements.linesResults.innerHTML = `<p style="text-align:center; color:var(--danger);">Hata: ${error.message}</p>`;
    } finally {
        hideLoading(elements.linesLoading);
    }
}

async function searchLines(query) {
    if (!query.trim()) {
        loadLines();
        return;
    }
    await loadLines(query);
}

// Render Lines
function renderLines(lines) {
    if (lines.length === 0) {
        elements.linesResults.innerHTML = '<p style="text-align:center; padding:40px;">Sonuç bulunamadı</p>';
        return;
    }

    elements.linesResults.innerHTML = lines.map(line => `
        <div class="result-card" onclick="showStopModal('${line.kod}'); switchToStopsTab();">
            <h4>${line.ad}</h4>
            <p><strong>Kod:</strong> ${line.kod}</p>
            <p><strong>Süre:</strong> ${line.sure} dk</p>
            <p><strong>Mesafe:</strong> ${line.mesafe} km</p>
            <div class="meta">${line.detay || ''}</div>
        </div>
    `).join('');
}

// Load Stops
async function loadStops(query = '') {
    try {
        showLoading(elements.stopsLoading);
        elements.stopsResults.innerHTML = '';

        const data = await apiRequest(API_ENDPOINTS.duraklar, {
            FNC: 'Duraklar',
            QUERY: query,
            LAN: 'tr'
        });

        if (data.table && data.table.length > 0) {
            state.stops = data.table;
            renderStops(state.stops);
        } else {
            elements.stopsResults.innerHTML = '<p style="text-align:center; color:var(--danger);">Duraklar yüklenemedi</p>';
        }
    } catch (error) {
        elements.stopsResults.innerHTML = `<p style="text-align:center; color:var(--danger);">Hata: ${error.message}</p>`;
    } finally {
        hideLoading(elements.stopsLoading);
    }
}

async function searchStops(query) {
    if (!query.trim()) {
        await loadLines();
        return;
    }
    await loadStops(query);
}

// Render Stops
function renderStops(stops) {
    if (stops.length === 0) {
        elements.stopsResults.innerHTML = '<p style="text-align:center; padding:40px;">Sonuç bulunamadı</p>';
        return;
    }

    elements.stopsResults.innerHTML = stops.map(stop => `
        <div class="result-card" onclick="openLiveTracking('${stop.kod}'); switchToLiveTab('${stop.kod}');">
            <h4>${stop.ad}</h4>
            <p><strong>Kod:</strong> ${stop.kod}</p>
            <p><strong>Konum:</strong> ${stop.konum}</p>
            <div class="meta">Enlem: ${stop.lat}, Boylam: ${stop.lng}</div>
        </div>
    `).join('');
}

// Show Stop Modal
function showStopModal(stopCode) {
    loadStopDetails(stopCode);
}

// New function to switch to stops tab and load stop details
function switchToStopsTab() {
    const stopTab = document.querySelector('[data-tab="stops"]');
    if (stopTab) {
        stopTab.click();
    }
}

// New function to switch to live tab
function switchToLiveTab(stopCode) {
    const liveTab = document.querySelector('[data-tab="live"]');
    if (liveTab) {
        liveTab.click();
    }
}

// New function to open live tracking directly
function openLiveTracking(stopCode) {
    elements.stopCode.value = stopCode;
    state.stopCode = stopCode;
    elements.lineCode.value = '';
    startLiveTracking();
}

// Open Live Tab (for modal button)
function openLiveTab(stopCode) {
    openLiveTracking(stopCode);
}

async function loadStopDetails(stopCode) {
    try {
        const data = await apiRequest(API_ENDPOINTS.duraktanGecenHatlar, {
            FNC: 'DuraktanGecenHatlar',
            KOD: stopCode,
            LAN: 'tr'
        });

        if (data.table && data.table.length > 0) {
            const lines = data.table;
            
            // Group lines by duration
            const byDuration = {};
            lines.forEach(line => {
                const duration = line.sure || 'Bilinmiyor';
                if (!byDuration[duration]) byDuration[duration] = [];
                byDuration[duration].push(line);
            });
            
            const sortedDurations = Object.keys(byDuration).sort((a, b) => {
                const numA = parseInt(a.replace(/[^0-9]/g, '')) || 999;
                const numB = parseInt(b.replace(/[^0-9]/g, '')) || 999;
                return numA - numB;
            });
            
            elements.modalTitle.textContent = `Durak: ${stopCode}`;
            elements.modalBody.innerHTML = `
                <div class="stop-details">
                    <h3 style="margin-bottom:15px;">🚦 Bu duraktan geçen hatlar:</h3>
                    ${sortedDurations.map(duration => `
                        <div class="stop-duration-group">
                            <h4 style="margin:15px 0 10px; color:var(--primary);">⏱️ ${duration} dakikada</h4>
                            ${byDuration[duration].map(line => `
                                <div class="stop-detail-row">
                                    <strong>${line.ad}</strong>
                                    <span style="margin-left:10px; font-weight:400; color:var(--text-light);">${line.kod}</span>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                    
                    <h3 style="margin:20px 0 15px;">🚌 Canlı Takip</h3>
                    <div style="text-align:center;">
                        <button class="btn-primary" onclick="openLiveTab('${stopCode}')">
                            Yaklaşan Otobüsleri Görüntüle
                        </button>
                    </div>
                </div>
            `;
            
            elements.modal.classList.remove('hidden');
        } else {
            elements.modalTitle.textContent = 'Durak Bulunamadı';
            elements.modalBody.innerHTML = '<p>Bu kodlu bir durak bulunamadı.</p>';
            elements.modal.classList.remove('hidden');
        }
    } catch (error) {
        elements.modalTitle.textContent = 'Hata';
        elements.modalBody.innerHTML = `<p>Hata: ${error.message}</p>`;
        elements.modal.classList.remove('hidden');
    }
}

function closeModal() {
    elements.modal.classList.add('hidden');
}

// Live Tracking
async function startLiveTracking() {
    // Get stop code from state or input element
    const stopCode = state.stopCode || elements.stopCode.value.trim();
    const lineCode = elements.lineCode.value.trim();

    if (!stopCode) {
        alert('Lütfen bir durak kodu girin');
        return;
    }

    try {
        showLoading(null);
        
        const params = {
            FNC: lineCode ? 'Otobus' : 'Otobusler',
            DURAK: stopCode,
            LAN: 'tr'
        };
        if (lineCode) params.HAT = lineCode;

        const data = await apiRequest(API_ENDPOINTS.canlıTakip, params);

        if (data.table && data.table.length > 0) {
            state.liveData = data;
            renderLiveList(data.table);
            elements.liveResults.classList.remove('hidden');
            
            // Auto refresh every 30 seconds
            if (state.liveInterval) clearInterval(state.liveInterval);
            state.liveInterval = setInterval(refreshLive, 30000);
        } else {
            elements.liveResults.classList.remove('hidden');
            elements.liveList.innerHTML = `
                <div style="text-align:center; padding:60px 20px;">
                    <div style="font-size:48px; margin-bottom:15px;">🚌</div>
                    <h3 style="color:var(--text); margin-bottom:10px;">Aktif Otobüs Yok</h3>
                    <p style="color:var(--text-light);">Bu durakta şu anda aktif otobüs bulunmuyor.</p>
                </div>
            `;
        }
    } catch (error) {
        alert(`Hata: ${error.message}`);
    } finally {
        hideLoading(null);
    }
}

async function refreshLive() {
    // Get stop code from state or input element
    const stopCode = state.stopCode || elements.stopCode.value.trim();
    const lineCode = elements.lineCode.value.trim();

    try {
        const params = {
            FNC: lineCode ? 'Otobus' : 'Otobusler',
            DURAK: stopCode,
            LAN: 'tr'
        };
        if (lineCode) params.HAT = lineCode;

        const data = await apiRequest(API_ENDPOINTS.canlıTakip, params);

        if (data.table && data.table.length > 0) {
            state.liveData = data;
            renderLiveList(data.table);
        } else {
            elements.liveList.innerHTML = `
                <div style="text-align:center; padding:60px 20px;">
                    <div style="font-size:48px; margin-bottom:15px;">🚌</div>
                    <h3 style="color:var(--text); margin-bottom:10px;">Canlı Veri Yok</h3>
                    <p style="color:var(--text-light);">Bu durakta şu anda otobüs yok veya canlı takip verisi alınamıyor.</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Refresh error:', error);
    }
}

function stopLiveTracking() {
    if (state.liveInterval) {
        clearInterval(state.liveInterval);
        state.liveInterval = null;
    }
    state.stopCode = '';
    elements.liveResults.classList.add('hidden');
    elements.liveList.innerHTML = '';
}

// Render Live List
function renderLiveList(items) {
    if (!items || items.length === 0) {
        elements.liveList.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <div style="font-size:48px; margin-bottom:15px;">🚌</div>
                <h3 style="color:var(--text); margin-bottom:10px;">Canlı Veri Yok</h3>
                <p style="color:var(--text-light);">Bu durakta şu anda otobüs yok veya canlı takip verisi alınamıyor.</p>
            </div>
        `;
        return;
    }

    // Filter out placeholder items and unavailable buses
    const vehicles = items.filter(item => {
        // Filter out placeholders
        if (!item.arac_no || item.arac_no === '-') return false;
        // Filter out unavailable buses (check for status indicators)
        if (item.availabilite === 0 || item.availabilite === '0' || item.availabilite === false || item.availabilite === 'false') return false;
        if (item.status === 'durduruldu' || item.status === 'durduruldu' || item.status === 'duraklatildi') return false;
        return true;
    });

    if (vehicles.length === 0) {
        elements.liveList.innerHTML = `
            <div style="text-align:center; padding:60px 20px;">
                <div style="font-size:48px; margin-bottom:15px;">🚌</div>
                <h3 style="color:var(--text); margin-bottom:10px;">Aktif Otobüs Yok</h3>
                <p style="color:var(--text-light);">Bu durakta şu anda aktif otobüs bulunmuyor.</p>
            </div>
        `;
        return;
    }

    // Group by arrival time
    const byTime = {};
    vehicles.forEach(vehicle => {
        const time = vehicle.sure || vehicle.san || 'Bilinmiyor';
        if (!byTime[time]) byTime[time] = [];
        byTime[time].push(vehicle);
    });

    // Sort by time (simple sort)
    const sortedTimes = Object.keys(byTime).sort((a, b) => {
        const numA = parseInt(a.replace(/[^0-9]/g, '')) || 999;
        const numB = parseInt(b.replace(/[^0-9]/g, '')) || 999;
        return numA - numB;
    });

    let html = `
        <div style="background:linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius:16px; padding:24px; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 style="color:white; margin:0 0 5px 0; font-size:20px;">🚌 Yaklaşan Otobüsler</h3>
                    <p style="color:rgba(255,255,255,0.8); margin:0; font-size:14px;">Toplam ${vehicles.length} otobüs yaklaşıyor</p>
                </div>
                <div style="background:rgba(255,255,255,0.2); padding:8px 16px; border-radius:20px; font-size:13px; color:white;">
                    🔄 Otomatik yenileme: 30s
                </div>
            </div>
        </div>
    `;

    sortedTimes.forEach(time => {
        const vehiclesAtTime = byTime[time];
        const isUrgent = parseInt(time) <= 5;
        const groupStyle = isUrgent 
            ? 'background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);'
            : 'background:linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);';
        
        const urgencyText = isUrgent ? '🔥 EN YAKIN' : '⏱️ Yaklaşan';
        const urgencyColor = isUrgent ? '#ff6b6b' : '#4facfe';

        html += `
            <div style="
                margin-bottom:16px;
                border-radius:12px;
                overflow:hidden;
                box-shadow:0 4px 12px rgba(0,0,0,0.1);
                transition:transform 0.2s, box-shadow 0.2s;
            " onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 6px 20px rgba(0,0,0,0.15)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.1)'">
                <div style="${groupStyle} padding:16px;">
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                        <div style="font-size:24px;">⏱️</div>
                        <div style="flex:1;">
                            <div style="color:white; font-weight:700; font-size:18px; margin:0;">${time} dakika içinde</div>
                            <div style="color:rgba(255,255,255,0.9); font-size:12px; margin:3px 0 0 0;">${urgencyText} • ${vehiclesAtTime.length} otobüs</div>
                        </div>
                        <div style="background:rgba(255,255,255,0.2); padding:6px 12px; border-radius:16px; font-size:13px; color:white;">
                            ${vehiclesAtTime.length}
                        </div>
                    </div>
                    <div style="background:rgba(255,255,255,0.1); border-radius:8px; padding:12px;">
                        ${vehiclesAtTime.map(vehicle => {
                            // Get bus number from multiple possible field names
                            const busNo = vehicle.arac_no || vehicle.arac || '-';
                            const plakaNo = vehicle.plaka_no || vehicle.plaka || '';
                            const busCode = vehicle.hat_kod || vehicle.hat || vehicle.kod || vehicle.line || '-';
                            
                            let badges = '';
                            if (busNo !== '-') {
                                badges += `<span style="background:var(--green); color:white; padding:4px 10px; border-radius:12px; font-size:13px; font-weight:600; margin-right:6px;">🚌 ${busNo}</span>`;
                            }
                            if (plakaNo) {
                                badges += `<span style="background:var(--primary); color:white; padding:4px 10px; border-radius:12px; font-size:13px; font-weight:600; margin-right:6px;">🚗 ${plakaNo}</span>`;
                            }
                            if (vehicle.trafik?.trafficLevel) {
                                const trafficClass = vehicle.trafik.trafficLevel === 'yogun' ? 'yogun' : 'normal';
                                const trafficColor = vehicle.trafik.trafficLevel === 'yogun' ? '#e74c3c' : '#3498db';
                                badges += `<span style="background:${trafficColor}; color:white; padding:4px 10px; border-radius:12px; font-size:13px; font-weight:600; margin-right:6px;">🚦 ${vehicle.trafik.label}</span>`;
                            }

                            return `
                                <div style="
                                    display:flex; 
                                    align-items:center; 
                                    gap:10px; 
                                    padding:8px;
                                    background:rgba(255,255,255,0.95);
                                    border-radius:8px;
                                    margin-bottom:6px;
                                    transition:background 0.2s;
                                " onmouseover="this.style.background='#f8f9fa'" onmouseout="this.style.background='white'">
                                    <div style="flex:1;">
                                        <div style="font-weight:600; color:var(--text); margin-bottom:2px;">${badges || '<span style="color:var(--text-light)">🚌 Otobüs</span>'}</div>
                                        ${busCode !== '-' ? `<div style="font-size:12px; color:var(--text-light); margin:2px 0;">🛤️ Hat: ${busCode}</div>` : ''}
                                        ${vehicle.hiz ? `<div style="font-size:12px; color:var(--success); margin:2px 0;">⚡ Hız: ${vehicle.hiz} km/s</div>` : ''}
                                    </div>
                                    ${vehicle.detay ? `<div style="font-size:12px; color:var(--text-light); flex-shrink:0; text-align:right;">${vehicle.detay}</div>` : ''}
                                    ${vehicle.trafik ? `
                                        <div style="font-size:11px; color:var(--danger); margin-left:auto; flex-shrink:0;">
                                            ${vehicle.trafik.avgDelayText ? `🕐 ${vehicle.trafik.avgDelayText} dk gecikme` : ''}
                                        </div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    elements.liveList.innerHTML = html;
}

// Geo Search
async function searchGeo(query) {
    if (!query.trim()) {
        elements.geoResults.innerHTML = '';
        return;
    }

    try {
        showLoading(elements.geoLoading);
        elements.geoResults.innerHTML = '';

        const params = { q: query, limit: 10 };
        const data = await apiRequest('/api/geocode', params);

        if (data.type === 'FeatureCollection' && data.features && data.features.length > 0) {
            renderGeoResults(data.features);
        } else {
            elements.geoResults.innerHTML = '<p style="text-align:center; padding:40px;">Sonuç bulunamadı</p>';
        }
    } catch (error) {
        elements.geoResults.innerHTML = `<p style="text-align:center; color:var(--danger);">Hata: ${error.message}</p>`;
    } finally {
        hideLoading(elements.geoLoading);
    }
}

function renderGeoResults(features) {
    elements.geoResults.innerHTML = features.map(feature => {
        const props = feature.properties;
        const coords = feature.geometry.coordinates;
        
        return `
            <div class="result-card" onclick="alert('Koordinatlar: ${coords[0]}, ${coords[1]}')">
                <h4>${props.name || 'Bilinmeyen Yer'}</h4>
                <p><strong>Tür:</strong> ${props.osm_value || 'Diğer'}</p>
                ${props.city ? `<p><strong>Şehir:</strong> ${props.city}</p>` : ''}
                ${props.state ? `<p><strong>İl:</strong> ${props.state}</p>` : ''}
                <div class="meta">
                    📍 ${coords[0]}, ${coords[1]}
                </div>
            </div>
        `;
    }).join('');
}

// Load Announcements
async function loadAnnouncements() {
    try {
        showLoading(elements.announcementsList);

        const data = await apiRequest('/hibrit/action.asp', { FNC: 'Duyurular', LAN: 'tr' });

        if (data.table && data.table.length > 0) {
            state.announcements = data.table;
            renderAnnouncements(state.announcements);
        } else {
            elements.announcementsList.innerHTML = '<p style="text-align:center; padding:40px;">Duyuru bulunamadı</p>';
        }
    } catch (error) {
        elements.announcementsList.innerHTML = `<p style="text-align:center; color:var(--danger);">Hata: ${error.message}</p>`;
    }
}

function renderAnnouncements(announcements) {
    if (announcements.length === 0) {
        elements.announcementsList.innerHTML = '<p style="text-align:center; padding:40px;">Duyuru bulunamadı</p>';
        return;
    }

    elements.announcementsList.innerHTML = announcements.map(ann => `
        <div class="announcement-item">
            <h4>${ann.baslik || 'Duyuru'}</h4>
            <div class="date">${ann.tarih || ''}</div>
            <p>${ann.baslik}</p>
        </div>
    `).join('');
}

// Utility Functions
function showLoading(element) {
    if (element) {
        element.classList.remove('hidden');
    }
}

function hideLoading(element) {
    if (element) {
        element.classList.add('hidden');
    }
}
