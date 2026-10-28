# EGO Otobüs Takip

Ankara Büyükşehir Belediyesi EGO (Elektrik Gaz Otobüs) Genel Müdürlüğü için otobüs takip web uygulaması.

## Özellikler

- 🚌 **Hat Listesi**: Tüm EGO otobüs hatlarını görüntüleme
- 🛑 **Durak Arama**: Durak kodu veya adıyla arama
- 🚌 **Duraktan Geçen Hatlar**: Belirli bir duraktan geçen hatları görüntüleme
- 🕒 **Geçiş Saatleri**: Duraktan geçen hatların geçiş saatleri
- 📢 **Duyurular**: EGO duyurularını görüntüleme
- 📍 **Yakın Duraklar**: Konuma göre yakın durakları bulma

## Kurulum

### Gereksinimler

- Python 3.13+

### Başlatma

```bash
python3 server.py
```

Sunucu `http://localhost:5000` adresinde başlar.

## API Proxy

Uygulama, EGO API'sine proxy olarak çalışır:

- **EGO API Host**: `https://egocptsrvand.ego.gov.tr`
- **Proxy Endpoint**: `/proxy?path=API_PATH`

### Örnek API Çağrıları

#### Tüm Hatları Getirme
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Fact.asp&FNC=Hatlar&LAN=tr"
```

#### Durak Arama
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Faction.asp&FNC=Duraklar&QUERY=10560&LAN=tr"
```

#### Duraktan Geçen Hatlar
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Faction.asp&FNC=DuraktanGecenHatlar&KOD=10560&LAN=tr"
```

#### Duraktan Geçiş Saatleri
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Faction.asp&FNC=DuraktanGecisSaatleri&HAT=174&TUR=HAFTA%20İÇİ&DURAK=10560&LAN=tr"
```

#### Duyurular
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Faction.asp&FNC=Duyurular&LAN=tr"
```

#### Yakın Duraklar (Konum Bazlı)
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Faction.asp&FNC=YakinDuraklar&LAT=39.9334&LNG=32.8597&MSF=500&LAN=tr"
```

#### Hat Bilgileri (Durak Listesiyle)
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Fact.asp&FNC=HatBilgileri&KOD=174&YOL=TRUE&LAN=tr"
```

#### Canlı Takip
```bash
curl "http://localhost:5000/proxy?path=%2Fhibrit%2Fsrv.asp&FNC=Otobusler&LAN=tr"
```

## API Parametreleri

### Ortak Parametreler

| Parametre | Açıklama | Varsayılan |
|-----------|----------|------------|
| `UID` | Cihaz/oturum kimliği | Gerekli |
| `LAN` | Dil (tr/en) | `tr` |
| `ACSMode` | Mod | `0` |

### Hat Bilgileri Parametreleri

| Parametre | Açıklama | Varsayılan |
|-----------|----------|------------|
| `FNC` | İşlem tipi: `Hatlar` veya `HatBilgileri` | - |
| `KOD` | Hat kodu (HatBilgileri için) | - |
| `YOL` | Durak listesini dahil et | `TRUE` |

### Durak İşlemleri Parametreleri

| Parametre | Açıklama |
|-----------|----------|
| `FNC` | İşlem tipi: `Duraklar`, `DuraktanGecenHatlar`, `DuraktanGecisSaatleri`, `Duyurular`, `YakinDuraklar` |
| `QUERY` | Durak kodu veya adı (Duraklar için) |
| `KOD` | Durak kodu (DuraktanGecenHatlar için) |
| `HAT` | Hat kodu (DuraktanGecisSaatleri için) |
| `TUR` | Gün türü: `HAFTA İÇİ`, `CUMARTESİ`, `PAZAR` (DuraktanGecisSaatleri için) |
| `DURAK` | Durak kodu (DuraktanGecisSaatleri için) |
| `LAT` | Enlem (YakinDuraklar için) |
| `LNG` | Boylam (YakinDuraklar için) |
| `MSF` | Yarıçap metre cinsinden (YakinDuraklar için) |

## Kullanım

1. Sunucuyu başlatın: `python3 server.py`
2. Tarayıcıda `http://localhost:5000` adresini açın
3. Farklı özellikleri kullanarak EGO otobüslerini takip edin

## Çalışan Özellikler

✅ **Hat Listesi**: Tüm EGO otobüs hatlarını listeler (667 hat)
✅ **Hat Arama**: Hat adı veya koduyla arama
✅ **Durak Arama**: Durak kodu veya adıyla arama
✅ **Duraktan Geçen Hatlar**: Bir duraktan geçen tüm hatları gösterir (durağa gelme süresine göre gruplandırılmış)
✅ **Canlı Takip**: Durak için canlı otobüs hareketlerini gösterir (yaklaşma süresine göre gruplandırılmış)

## Teknolojiler

- **Backend**: Python 3 (http.server)
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **API**: EGO OpenAPI (ASP-based hibrit servisler)
