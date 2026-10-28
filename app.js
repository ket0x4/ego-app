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
    elements.refreshLive.addEventListener('click', refreshLive); // DÜZELTME: stopLiveTracking yerine refreshLive tetikleniyor

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
    
    // URLSearchParams parametreleri otomatik encode eder.
    const queryParams = new URLSearchParams(params).toString();
    
    try {
        // DÜZELTME: Çift encode hatası düzeltildi, path doğrudan parametre olarak gönderiliyor
        const response = await fetch(`${API_BASE}/proxy?path=${endpoint}&${queryParams}`, {
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
    hatlar: '/hibrit/action.asp',
    hatBilgileri: '/hibrit/action.asp',
    duraklar: '/hibrit/action.asp',
    duraktanGecenHatlar: '/hibrit/action.asp',
    duraktanGecisSaatleri: '/hibrit/action.asp',
    duyurular: '/hibrit/action.asp',
    yakinDuraklar: '/hibrit/action.asp',
    canlıTakip: '/hibrit/srv.asp'
};

// Global lines cache for local filtering
let allLines = [];

// Load Lines
async function loadLines(query = '') {
    try {
        showLoading(elements.linesLoading);
        elements.linesResults.innerHTML = '';

        const data = await apiRequest(API_ENDPOINTS.hatlar, { FNC: 'Hatlar', LAN: 'tr' });

        allLines = data.table || [];
        let lines = [...allLines];
        
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
            elements.linesResults.innerHTML = '<p class="empty-message">Hatlar yüklenemedi</p>';
        }
    } catch (error) {
        elements.linesResults.innerHTML = `<p class="error-message">Hata: ${error.message}</p>`;
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
        elements.linesResults.innerHTML = '<p class="empty-message">Sonuç bulunamadı</p>';
        return;
    }

    elements.linesResults.innerHTML = lines.map(line => `
        <div class="result-card" onclick="showLineDetails('${line.kod}'); switchToStopsTab();">
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
            elements.stopsResults.innerHTML = '<p class="empty-message">Duraklar yüklenemedi</p>';
        }
    } catch (error) {
        elements.stopsResults.innerHTML = `<p class="error-message">Hata: ${error.message}</p>`;
    } finally {
        hideLoading(elements.stopsLoading);
    }
}

async function searchStops(query) {
    if (!query.trim()) {
        // DÜZELTME: Durak araması boşken hatları yükleme hatası giderildi
        await loadStops();
        return;
    }
    await loadStops(query);
}

// Render Stops
function renderStops(stops) {
    if (stops.length === 0) {
        elements.stopsResults.innerHTML = '<p class="empty-message">Sonuç bulunamadı</p>';
        return;
    }

    elements.stopsResults.innerHTML = stops.map(stop => `
        <div class="result-card" onclick="openLiveTracking('${stop.kod}'); switchToLiveTab('${stop.kod}');">
            <h4>${stop.ad}</h4>
            <p><strong>Kod:</strong> ${stop.kod}</p>
            <p><strong>Konum:</strong> ${stop.konum}</p>
            <div class="meta">Lat: ${stop.lat}, Lng: ${stop.lng}</div>
        </div>
    `).join('');
}

// Show Stop Modal
function showStopModal(stopCode) {
    loadStopDetails(stopCode);
}

// Show Line Details Modal
async function showLineDetails(lineCode) {
    try {
        const data = await apiRequest(API_ENDPOINTS.hatBilgileri, {
            FNC: 'HatBilgileri',
            KOD: lineCode,
            YOL: 'TRUE',
            LAN: 'tr'
        });

        if (data.table && data.table.length > 0) {
            const stops = data.table;
            const lineName = allLines.find(l => l.kod === lineCode)?.ad || lineCode;
            
            // DÜZELTME: İngilizce ifadeler Türkçe'ye çevrildi
            elements.modalTitle.textContent = `Hat: ${lineCode} - ${lineName}`;
            elements.modalBody.innerHTML = `
                <div class="modal-header">
                    <h3>🛤️ Hat Bilgileri</h3>
                    <p>Toplam ${stops.length} durak</p>
                </div>
                
                <h3 class="modal-section-title">📍 Bu Hattın Durakları:</h3>
                <div class="modal-scroll">
                    ${stops.map((stop, index) => `
                        <div class="stop-card">
                            <div class="stop-info">
                                <div class="stop-name">${stop.ad}</div>
                                <div class="stop-code">Durak Kodu: ${stop.kod}</div>
                                ${stop.konum ? `<div class="stop-location">${stop.konum}</div>` : ''}
                            </div>
                            <div class="stop-number">${index + 1}</div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="modal-actions">
                    <button class="btn-primary" onclick="openLiveTracking('${lineCode}'); switchToLiveTab('${lineCode}'); closeModal();">
                        Bus Canlı Takip
                    </button>
                </div>
            `;
            
            elements.modal.classList.remove('hidden');
        } else {
            elements.modalTitle.textContent = 'Hat Bulunamadı';
            elements.modalBody.innerHTML = '<p class="empty-message">Bu koda ait hat bulunamadı.</p>';
            elements.modal.classList.remove('hidden');
        }
    } catch (error) {
        elements.modalTitle.textContent = 'Hata';
        elements.modalBody.innerHTML = `<p class="error-message">Hata: ${error.message}</p>`;
        elements.modal.classList.remove('hidden');
    }
}

function switchToStopsTab() {
    const stopTab = document.querySelector('[data-tab="stops"]');
    if (stopTab) {
        stopTab.click();
    }
}

function switchToLiveTab(stopCode) {
    const liveTab = document.querySelector('[data-tab="live"]');
    if (liveTab) {
        liveTab.click();
    }
}

function openLiveTracking(stopCode) {
    elements.stopCode.value = stopCode;
    state.stopCode = stopCode; // DÜZELTME: Canlı takip durum bilgisi senkronize tutuluyor
    elements.lineCode.value = '';
    startLiveTracking();
}

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
                    <h3 class="section-title">🚦 Bu duraktan geçen hatlar:</h3>
                    ${sortedDurations.map(duration => `
                        <div class="stop-duration-group">
                            <h4 class="duration-heading">⏱️ ${duration} dakikada</h4>
                            ${byDuration[duration].map(line => `
                                <div class="stop-detail-row">
                                    <strong>${line.ad}</strong>
                                    <span class="detail-code">${line.kod}</span>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                    
                    <h3 class="section-title">🚌 Canlı Takip</h3>
                    <div class="action-container">
                        <button class="btn-primary" onclick="openLiveTab('${stopCode}'); closeModal();">
                            Yaklaşan Otobüsleri Görüntüle
                        </button>
                    </div>
                </div>
            `;
            
            elements.modal.classList.remove('hidden');
        } else {
            elements.modalTitle.textContent = 'Durak Bulunamadı';
            elements.modalBody.innerHTML = '<p class="empty-message">Bu kodlu bir durak bulunamadı.</p>';
            elements.modal.classList.remove('hidden');
        }
    } catch (error) {
        elements.modalTitle.textContent = 'Hata';
        elements.modalBody.innerHTML = `<p class="error-message">Hata: ${error.message}</p>`;
        elements.modal.classList.remove('hidden');
    }
}

function closeModal() {
    elements.modal.classList.add('hidden');
}

// Live Tracking
async function startLiveTracking() {
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
            
            if (state.liveInterval) clearInterval(state.liveInterval);
            state.liveInterval = setInterval(refreshLive, 30000);
        } else {
            elements.liveResults.classList.remove('hidden');
            elements.liveList.innerHTML = `
                <div class="no-data-card">
                    <div class="icon">🚌</div>
                    <h3>Aktif Otobüs Yok</h3>
                    <p>Bu durakta şu anda aktif otobüs bulunmuyor.</p>
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
                <div class="no-data-card">
                    <div class="icon">🚌</div>
                    <h3>Canlı Veri Yok</h3>
                    <p>Bu durakta şu anda otobüs yok veya canlı takip verisi alınamıyor.</p>
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
            <div class="no-data-card">
                <div class="icon">🚌</div>
                <h3>Canlı Veri Yok</h3>
                <p>Bu durakta şu anda otobüs yok veya canlı takip verisi alınamıyor.</p>
            </div>
        `;
        return;
    }

    const vehicles = items.filter(item => {
        if (!item.arac_no || item.arac_no === '-') return false;
        if (item.availabilite === 0 || item.availabilite === '0' || item.availabilite === false || item.availabilite === 'false') return false;
        if (item.status === 'durduruldu' || item.status === 'duraklatildi') return false;
        return true;
    });

    if (vehicles.length === 0) {
        elements.liveList.innerHTML = `
            <div class="no-data-card">
                <div class="icon">🚌</div>
                <h3>Aktif Otobüs Yok</h3>
                <p>Bu durakta şu anda aktif otobüs bulunmuyor.</p>
            </div>
        `;
        return;
    }

    const byTime = {};
    vehicles.forEach(vehicle => {
        const time = vehicle.sure || vehicle.san || 'Bilinmiyor';
        if (!byTime[time]) byTime[time] = [];
        byTime[time].push(vehicle);
    });

    const sortedTimes = Object.keys(byTime).sort((a, b) => {
        const numA = parseInt(a.replace(/[^0-9]/g, '')) || 999;
        const numB = parseInt(b.replace(/[^0-9]/g, '')) || 999;
        return numA - numB;
    });

    // DÜZELTME: Tüm inline CSS'ler kaldırıldı, sınıflar üzerinden atama yapıldı ve kırık div yapısı düzeltildi.
    let html = `
        <div class="live-summary-card">
            <div class="summary-wrapper">
                <div>
                    <h3>🚌 Yaklaşan Otobüsler</h3>
                    <p>Toplam ${vehicles.length} otobüs yaklaşıyor</p>
                </div>
                <div class="refresh-badge">
                    🔄 Otomatik yenileme: 30s
                </div>
            </div>
        </div>
    `;

    sortedTimes.forEach(time => {
        const vehiclesAtTime = byTime[time];
        const isUrgent = parseInt(time) <= 5;
        const groupClass = isUrgent ? 'time-group urgent' : 'time-group';
        const urgencyText = isUrgent ? '🔥 EN YAKIN' : '⏱️ Yaklaşan';

        html += `
            <div class="${groupClass}">
                <div class="time-header">
                    <div class="icon">⏱️</div>
                    <div class="time-info">
                        <div class="time-text">${time} dakika içinde</div>
                        <div class="urgency-text">${urgencyText} • ${vehiclesAtTime.length} otobüs</div>
                    </div>
                    <div class="count-badge">${vehiclesAtTime.length}</div>
                </div>
                <div class="vehicles-list">
                    ${vehiclesAtTime.map(vehicle => {
                        const busNo = vehicle.arac_no || vehicle.arac || '-';
                        const plakaNo = vehicle.plaka_no || vehicle.plaka || '';
                        const busCode = vehicle.hat_kod || vehicle.hat || vehicle.kod || vehicle.line || '-';
                        
                        let badges = '';
                        if (busNo !== '-') {
                            badges += `<span class="badge badge-bus">🚌 ${busCode}</span>`;
                        }
                        if (plakaNo) {
                            badges += `<span class="badge badge-plate">🚗 ${plakaNo}</span>`;
                        }
                        if (vehicle.trafik?.trafficLevel) {
                            const trafficClass = vehicle.trafik.trafficLevel === 'yogun' ? 'traffic-heavy' : 'traffic-normal';
                            badges += `<span class="badge ${trafficClass}">🚦 ${vehicle.trafik.label}</span>`;
                        }

                        return `
                            <div class="vehicle-item">
                                <div class="vehicle-main">
                                    <div class="badges-row">${badges || '<span class="text-muted">🚌 Otobüs</span>'}</div>
                                    ${busCode !== '-' ? `<div class="info-line">🛤️ Otobüs: ${busNo}</div>` : ''}
                                    ${vehicle.hiz ? `<div class="info-line text-success">⚡ Hız: ${vehicle.hiz} km/s</div>` : ''}
                                </div>
                                <div class="vehicle-meta">
                                    ${vehicle.detay ? `<div class="detail-text">${vehicle.detay}</div>` : ''}
                                    ${vehicle.trafik?.avgDelayText ? `<div class="delay-text">🕐 ${vehicle.trafik.avgDelayText} dk gecikme</div>` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
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
            elements.geoResults.innerHTML = '<p class="empty-message">Sonuç bulunamadı</p>';
        }
    } catch (error) {
        elements.geoResults.innerHTML = `<p class="error-message">Hata: ${error.message}</p>`;
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
            elements.announcementsList.innerHTML = '<p class="empty-message">Duyuru bulunamadı</p>';
        }
    } catch (error) {
        elements.announcementsList.innerHTML = `<p class="error-message">Hata: ${error.message}</p>`;
    }
}

function renderAnnouncements(announcements) {
    if (announcements.length === 0) {
        elements.announcementsList.innerHTML = '<p class="empty-message">Duyuru bulunamadı</p>';
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
