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
    liveInterval: null
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

// Load Lines
async function loadLines(query = '') {
    try {
        showLoading(elements.linesLoading);
        elements.linesResults.innerHTML = '';

        const params = {};
        const data = await apiRequest(API_ENDPOINTS.hatlar, { FNC: 'Hatlar', ...params, LAN: 'tr' });

        let lines = data.table || [];
        
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
        <div class="result-card" onclick="showStopModal('${line.kod}')">
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
        <div class="result-card" onclick="showStopModal('${stop.kod}')">
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
    const stopCode = elements.stopCode.value.trim();
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
            elements.liveList.innerHTML = '<p style="text-align:center; padding:40px;">Canlı veri yok</p>';
        }
    } catch (error) {
        alert(`Hata: ${error.message}`);
    } finally {
        hideLoading(null);
    }
}

async function refreshLive() {
    const stopCode = elements.stopCode.value.trim();
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
            elements.liveList.innerHTML = '<p style="text-align:center; padding:40px;">Canlı veri yok</p>';
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
    elements.liveResults.classList.add('hidden');
    elements.liveList.innerHTML = '';
}

// Render Live List
function renderLiveList(items) {
    if (!items || items.length === 0) {
        elements.liveList.innerHTML = '<p style="text-align:center; padding:40px;">Canlı veri yok</p>';
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

    let html = '<h3 style="margin-bottom:15px;">🚌 Yaklaşan Otobüsler</h3>';

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

    sortedTimes.forEach(time => {
        const vehiclesAtTime = byTime[time];
        html += `
            <div class="live-item group">
                <h4 style="margin-bottom:10px; color:var(--primary);">⏱️ ${time} dakika içinde</h4>
                ${vehiclesAtTime.map(vehicle => {
                    // Get bus number from multiple possible field names
                    const busNo = vehicle.arac_no || vehicle.arac || '-';
                    const plakaNo = vehicle.plaka_no || vehicle.plaka || '';
                    const busCode = vehicle.hat_kod || vehicle.kod || vehicle.line || '-';
                    
                    let badges = '';
                    if (busNo !== '-') badges += `<span class="vehicle-badge">🚌 ${busNo}</span>`;
                    if (plakaNo) badges += `<span class="plaka-badge">🚗 ${plakaNo}</span>`;
                    if (vehicle.trafik?.trafficLevel) {
                        const trafficColor = vehicle.trafik.trafficLevel === 'yogun' ? 'var(--danger)' : 'var(--text-light)';
                        badges += `<span class="traffic-badge" style="background:${trafficColor}">🚦 ${vehicle.trafik.label}</span>`;
                    }

                    return `
                        <div class="live-item vehicle">
                            <div class="vehicle-info">
                                ${badges || '<span>🚌 Otobüs</span>'}
                                ${busCode !== '-' ? `<span style="margin-left:10px; font-weight:bold; color:var(--text-light);">🛤️ ${busCode}</span>` : ''}
                                ${vehicle.hiz ? `<span style="margin-left:10px;">⚡ ${vehicle.hiz}</span>` : ''}
                            </div>
                            ${vehicle.detay ? `<div class="meta">${vehicle.detay}</div>` : ''}
                            ${vehicle.trafik ? `
                                <div class="status" style="margin-top:8px;">
                                    ${vehicle.trafik.reason ? `<small>${vehicle.trafik.reason}</small>` : ''}
                                    ${vehicle.trafik.avgDelayText ? `<span style="color:var(--danger)">🕐 ${vehicle.trafik.avgDelayText} dk gecikme</span>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
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

// Open Live Tab
function openLiveTab(stopCode) {
    elements.stopCode.value = stopCode;
    elements.lineCode.value = '';
    
    // Switch to live tab
    document.querySelector('[data-tab="live"]').click();
}
