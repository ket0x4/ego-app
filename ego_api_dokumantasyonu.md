# EGO CEP'TE API Dokümantasyonu

> **Kaynak:** `flows_ego_bypass.mitm` — mitmproxy WireGuard modu + Frida string bozma bypass
> **Oluşturulma:** 09.08.2026 17:26:21
> **Toplam HTTP flow:** 90

---

## Özet

### Host bazlı

| Host | İstek Sayısı |
|---|---|
| `egocptsrvand.ego.gov.tr` | 65 |
| `egocptngapi.ego.gov.tr` | 16 |
| `egocptsrvios.ego.gov.tr` | 8 |
| `clientservices.googleapis.com` | 1 |

### Endpoint bazlı

| Host | FNC / Path | İstek Sayısı |
|---|---|---|
| `clientservices.googleapis.com` | `(path)` | 1 |
| `egocptngapi.ego.gov.tr` | `(path)` | 16 |
| `egocptsrvand.ego.gov.tr` | `Connect` | 8 |
| `egocptsrvand.ego.gov.tr` | `Duraklar` | 2 |
| `egocptsrvand.ego.gov.tr` | `DuraktanGecenHatlar` | 4 |
| `egocptsrvand.ego.gov.tr` | `DuraktanGecisSaatleri` | 3 |
| `egocptsrvand.ego.gov.tr` | `Duyurular` | 1 |
| `egocptsrvand.ego.gov.tr` | `HatBilgileri` | 4 |
| `egocptsrvand.ego.gov.tr` | `Hatlar` | 4 |
| `egocptsrvand.ego.gov.tr` | `Otobus` | 10 |
| `egocptsrvand.ego.gov.tr` | `Otobusler` | 28 |
| `egocptsrvand.ego.gov.tr` | `YakinDuraklar` | 1 |
| `egocptsrvios.ego.gov.tr` | `Connect` | 8 |

---

## 📡 Detaylı Akışlar

### 1. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 2. GET `egocptngapi.ego.gov.tr/api/config/ssl-pins`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 13:16:31 GMT
Set-Cookie: TS01174836=01390052543b288c90419763380461ff3067f1ebd08216c11a725460efe241227b6cf6c608e88dc916df40f6040721e10888caa147; Path=/; Domain=.egocptngapi.ego.gov.tr
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (208 byte):

```json
{"current":{"spki_hash":"f7XZum0nsAcNgBBi265+dnUx9iw51q/8/d7jdvOcJS0=","valid_from":"2026-01-01T00:00:00Z","valid_until":"2027-01-01T00:00:00Z"},"future":null,"change_to_new":false,"rotation_started_at":null}
```

---

### 3. GET `egocptngapi.ego.gov.tr/v1/route/compute`

- **Durum Kodu:** 204
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: no-store
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-Route-Compute-Prewarm: true
Date: Sun, 09 Aug 2026 13:16:31 GMT
Set-Cookie: TS01174836=01390052547811091ba5777fbc76cae94557859bc662885fccad1538d2d9f70e8ea05c2cfb3ddfcdfc43fdb67704b686929cc4032c; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi:** *(boş)*

---

### 4. GET `egocptngapi.ego.gov.tr/api/geocode?q=ankara&limit=1&lang=default`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EgoCepte/1.0
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Length: 336
Content-Type: application/json
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 13:16:31 GMT
Set-Cookie: TS01174836=013900525444b39a3e759641b0ffcd1f7597e0be7a5cffdb08de43444053ec1fb5b207bfe5e4ede2eb4d56929ea3636f1694da8e7b; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi** (336 byte):

```json
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"osm_type":"N","osm_id":25869410,"osm_key":"place","osm_value":"city","type":"other","postcode":"06420","countrycode":"TR","name":"Ankara","city":"Çankaya","state":"Ankara","country":"Türkiye"},"geometry":{"type":"Point","coordinates":[32.8540497,39.9207759]}}]}
```

---

### 5. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 6. GET `egocptngapi.ego.gov.tr/api/config`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 173
```

**Yanıt Gövdesi** (173 byte):

```json
{"minBuildNumber": 5122, "minAppVersion": "5.1.2", "isLoginEnabled": false, "isCertificatePinningEnabled": false, "isForceUpdateEnabled": false, "isSanalKartEnabled": false}
```

---

### 7. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=Hatlar&QUERY=&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:16:34 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDAWQAQDAB=AMLOCHDADPBOKBBNFKCBDKAE; secure; path=/, TS010fd228=01390052542ddbcad88cb723630c165a2e7acf70873b28289cac2b8813b7f01356801cf69ad1749d18b120c3384b564aee47bedcfa894cc9fbbb06d385d0b70d651d2c1dd5; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:16:33 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (86891 byte):

```json
{"table":[{"id":"1","tur":"EGO, OTOBÜS","kod":"101","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER","sure":"73","mesafe":"43","detay":""},{"id":"2","tur":"EGO, OTOBÜS","kod":"101-1","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER-KARAOĞLAN MAHALLESİ","sure":"83","mesafe":"49","detay":""},{"id":"3","tur":"EGO, OTOBÜS","kod":"103-2","ad":"ATILIM ÜNİVERSİTESİ-OPERA","sure":"50","mesafe":"23","detay":""},{"id":"4","tur":"EGO, OTOBÜS","kod":"104-1","ad":"GÖLBAŞI-AKKÖPRÜ","sure":"45","mesafe":"28","detay":""},{"id":"5","tur":"EGO, OTOBÜS","kod":"104-2","ad":"AKKÖPRÜ-GÖLBAŞI","sure":"60","mesafe":"30","detay":""},{"id":"6","tur":"EGO, OTOBÜS","kod":"105-1","ad":"GÖLBAŞI-KIZILAY-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"7","tur":"EGO, OTOBÜS","kod":"105-2","ad":"ULUS-KIZILAY-GÖLBAŞI","sure":"70","mesafe":"33","detay":""},{"id":"8","tur":"EGO, OTOBÜS","kod":"105-3","ad":"GÖLBAŞI-MİLLİ KÜTÜPHANE","sure":"60","mesafe":"24","detay":""},{"id":"9","tur":"EGO, OTOBÜS","kod":"105-4","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI","sure":"60","mesafe":"27","detay":""},{"id":"10","tur":"EGO, OTOBÜS","kod":"106-3","ad":"GÖLBAŞI-YURTLAR-AŞTİ-AKKÖPRÜ-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"11","tur":"EGO, OTOBÜS","kod":"106-4","ad":"ULUS-KIZILAY-GÖLBAŞI-YURTLAR","sure":"53","mesafe":"33","detay":""},{"id":"12","tur":"EGO, OTOBÜS","kod":"107-6","ad":"GÖLBAŞI-TOKİ-AŞTİ-AKKÖPRÜ-ULUS","sure":"105","mesafe":"66","detay":""},{"id":"13","tur":"EGO, OTOBÜS","kod":"108","ad":"GÖLBAŞI-HAYMANA YOLU-HACILAR MH.","sure":"80","mesafe":"44","detay":""},{"id":"14","tur":"EGO, OTOBÜS","kod":"109-1","ad":"GÖLBAŞI-ÇANKAYA","sure":"60","mesafe":"27","detay":""},{"id":"15","tur":"EGO, OTOBÜS","kod":"109-2","ad":"ÇANKAYA-GÖLBAŞI","sure":"60","mesafe":"29","detay":""},{"id":"16","tur":"EGO, OTOBÜS","kod":"110","ad":"BİLKENT METRO İSTASYONU-BİLKENT-BEYTEPE MAHALLESİ","sure":"48","mesafe":"33","detay":""},{"id":"17","tur":"EGO, OTOBÜS","kod":"111","ad":"BİLKENT-BİLKENT METRO İSTASYONU","sure":"45","mesafe":"29","detay":""},{"id":"18","tur":"EGO, OTOBÜS","kod":"112-1","ad":"ANKARA ŞEHİR HASTANESİ-KIZILAY-ULUS","sure":"30","mesafe":"16","detay":""},{"id":"19","tur":"EGO, OTOBÜS","kod":"112-2","ad":"ULUS-KIZILAY-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"30","mesafe":"16","detay":""},{"id":"20","tur":"EGO, OTOBÜS","kod":"113","ad":"TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"21","tur":"ÖTA, OTOBÜS","kod":"113-5","ad":"(ÖTA) TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"22","tur":"EGO, OTOBÜS","kod":"114","ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ","sure":"40","mesafe":"23","detay":""},{"id":"23","tur":"EGO, OTOBÜS","kod":"114-2","ad":"AKKÖPRÜ-AŞTİ-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"45","mesafe":"25","detay":""},{"id":"24","tur":"ÖHO, OTOBÜS","kod":"114-7","ad":"(ÖHO) KIRKKONAKLAR-ŞENYURT","sure":"110","mesafe":"37","detay":""},{"id":"25","tur":"EGO, OTOBÜS","kod":"115","ad":"GÖLBAŞI-YURTLAR-KIZILAY-ULUS","sure":"50","mesafe":"25","detay":""},{"id":"26","tur":"EGO, OTOBÜS","kod":"115-2","ad":"ULUS-KIZILAY GÖLBAŞI-KAMPÜS-YURTLAR","sure":"55","mesafe":"27","detay":""},{"id":"27","tur":"EGO, OTOBÜS","kod":"115-3","ad":"GÖLBAŞI-YURTLAR-MİLLİ KÜTÜPHANE","sure":"55","mesafe":"20","detay":""},{"id":"28","tur":"EGO, OTOBÜS","kod":"115-8","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"60","mesafe":"22","detay":""},{"id":"29","tur":"EGO, OTOBÜS","kod":"117-1","ad":"OPERA-YARGITAY","sure":"60","mesafe":"16","detay":""},{"id":"30","tur":"EGO, OTOBÜS","kod":"117-2","ad":"YARGITAY-OPERA","sure":"60","mesafe":"17","detay":""},{"id":"31","tur":"EGO, OTOBÜS","kod":"118-1","ad":"GÖLBAŞI TOKİ-ÇUKURAMBAR-100.YIL","sure":"60","mesafe":"33","detay":""},{"id":"32","tur":"EGO, OTOBÜS","kod":"118-2","ad":"100.YIL-ÇUKURAMBAR-GÖLBAŞI TOKİ","sure":"60","mesafe":"32","detay":""},{"id":"33","tur":"EGO, OTOBÜS","kod":"130","ad":"BEYTEPE METRO İSTASYONU-HACETTEPE KAMPÜSÜ","sure":"20","mesafe":"11","detay":""},{"id":"34","tur":"EGO, OTOBÜS","kod":"131-1","ad":"MALAZGİRT MH.-TURTAŞ SİT.-KIZILAY-ULUS","sure":"35","mesafe":"13","detay":""},{"id":"35","tur":"EGO, OTOBÜS","kod":"131-2","ad":"ULUS-KIZILAY-MALAZGİRT MH.-TURTAŞ SİTESİ","sure":"45","mesafe":"13","detay":""},{"id":"36","tur":"EGO, OTOBÜS","kod":"132","ad":"SÖĞÜTÖZÜ METRO-ÇUKURAMBAR YÜZÜNCÜ YIL","sure":"35","mesafe":"12","detay":""},{"id":"37","tur":"EGO, OTOBÜS","kod":"133","ad":"ÇİĞDEM MAHALLESİ-OPERA","sure":"60","mesafe":"22","detay":""},{"id":"38","tur":"EGO, OTOBÜS","kod":"134","ad":"SÖĞÜTÖZÜ METRO İST.-Ç.AMBAR-ÇİĞDEM MH.","sure":"40","mesafe":"13","detay":""},{"id":"39","tur":"EGO, OTOBÜS","kod":"135-1","ad":"ORAN SİTESİ-ULUS","sure":"35","mesafe":"15","detay":""},{"id":"40","tur":"EGO, OTOBÜS","kod":"135-2","ad":"ULUS-ORAN SİTESİ","sure":"35","mesafe":"15","detay":""},{"id":"41","tur":"EGO, OTOBÜS","kod":"136","ad":"SÖĞÜTÖZÜ METRO-100.YIL-ÇİĞDEM MH.","sure":"40","mesafe":"16","detay":""},{"id":"42","tur":"EGO, OTOBÜS","kod":"137","ad":"GÖLBAŞI KRIMİNAL MERK.-YAYLABAĞ MH.","sure":"40","mesafe":"27","detay":""},{"id":"43","tur":"EGO, OTOBÜS","kod":"140","ad":"GÖLBAŞI-KARACAÖREN-GÖLBEK-ÇELTEK","sure":"170","mesafe":"151","detay":""},{"id":"44","tur":"EGO, OTOBÜS","kod":"141","ad":"ÜÇEM-KÜÇÜKBOYALIK-ŞEHRİBAN-ÇATALÇEŞME-KÜÇÜKBAYAT-KEKLİCE","sure":"105","mesafe":"165","detay":""},{"id":"45","tur":"EGO, OTOBÜS","kod":"142","ad":"TOHUMLAR-ÇAVUŞLU-YAYLA-KARAHASANLI-EVCİLER","sure":"150","mesafe":"119","detay":""},{"id":"46","tur":"EGO, OTOBÜS","kod":"143","ad":"SIHHİYE-SÖĞÜTÖZÜ-BALGAT ADLİYE","sure":"75","mesafe":"20","detay":""},{"id":"47","tur":"EGO, OTOBÜS","kod":"144","ad":"SIHHİYE ADLİYE-BALGAT ADLİYE","sure":"15","mesafe":"16","detay":""},{"id":"48","tur":"EGO, OTOBÜS","kod":"145-1","ad":"ATATÜRK SİTESİ-ULUS","sure":"35","mesafe":"14","detay":""},{"id":"49","tur":"EGO, OTOBÜS","kod":"145-2","ad":"ULUS-ATATÜRK SİTESİ","sure":"35","mesafe":"14","detay":""},{"id":"50","tur":"ÖHO, OTOBÜS","kod":"145-7","ad":"(ÖHO) ATATÜRK SİTE
... [TRUNCATED, toplam 83707 karakter]
```

---

### 8. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 9. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 10. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 11. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 12. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 13. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 14. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 15. GET `egocptngapi.ego.gov.tr/api/config/ssl-pins`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 13:37:56 GMT
Set-Cookie: TS01174836=0139005254a92ddd29c0a79928099ef84eeae9012b3cc40c7924b0f2499d641555fcec35f468cd020eadef00ebe9001739d6924620; Path=/; Domain=.egocptngapi.ego.gov.tr
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (208 byte):

```json
{"current":{"spki_hash":"f7XZum0nsAcNgBBi265+dnUx9iw51q/8/d7jdvOcJS0=","valid_from":"2026-01-01T00:00:00Z","valid_until":"2027-01-01T00:00:00Z"},"future":null,"change_to_new":false,"rotation_started_at":null}
```

---

### 16. GET `egocptngapi.ego.gov.tr/api/geocode?q=ankara&limit=1&lang=default`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EgoCepte/1.0
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Length: 336
Content-Type: application/json
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 13:37:56 GMT
Set-Cookie: TS01174836=0139005254eb125e7c4785b3f289b4d7a0e326667e8de1a8d38935f9896579b7c52fa23c7049c0da69e03e69b8735ab34e4b182c3d; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi** (336 byte):

```json
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"osm_type":"N","osm_id":25869410,"osm_key":"place","osm_value":"city","type":"other","postcode":"06420","countrycode":"TR","name":"Ankara","city":"Çankaya","state":"Ankara","country":"Türkiye"},"geometry":{"type":"Point","coordinates":[32.8540497,39.9207759]}}]}
```

---

### 17. GET `egocptngapi.ego.gov.tr/v1/route/compute`

- **Durum Kodu:** 204
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: no-store
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-Route-Compute-Prewarm: true
Date: Sun, 09 Aug 2026 13:37:56 GMT
Set-Cookie: TS01174836=013900525473b8e6ff4da4dd2bfea8556d4d5b86aee82d6812e3aca9547baaa39c42453b7924d40502912df3ee8facf3b7530bdae7; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi:** *(boş)*

---

### 18. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 19. GET `egocptngapi.ego.gov.tr/api/config`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 173
```

**Yanıt Gövdesi** (173 byte):

```json
{"minBuildNumber": 5122, "minAppVersion": "5.1.2", "isLoginEnabled": false, "isCertificatePinningEnabled": false, "isForceUpdateEnabled": false, "isSanalKartEnabled": false}
```

---

### 20. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=Hatlar&QUERY=&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:37:58 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWQBQBBA=ONMPCHDAJLHKJGBOFLKHMPEM; secure; path=/, TS010fd228=0139005254d3ad557a1de61b5f49aeb559337d89198469522d752c7983e3d3d2e4e6f1bb391e365995f046643d1998b04769d88d1d48fbcacdc674c984b5f993f047b5902f; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:37:59 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (86891 byte):

```json
{"table":[{"id":"1","tur":"EGO, OTOBÜS","kod":"101","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER","sure":"73","mesafe":"43","detay":""},{"id":"2","tur":"EGO, OTOBÜS","kod":"101-1","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER-KARAOĞLAN MAHALLESİ","sure":"83","mesafe":"49","detay":""},{"id":"3","tur":"EGO, OTOBÜS","kod":"103-2","ad":"ATILIM ÜNİVERSİTESİ-OPERA","sure":"50","mesafe":"23","detay":""},{"id":"4","tur":"EGO, OTOBÜS","kod":"104-1","ad":"GÖLBAŞI-AKKÖPRÜ","sure":"45","mesafe":"28","detay":""},{"id":"5","tur":"EGO, OTOBÜS","kod":"104-2","ad":"AKKÖPRÜ-GÖLBAŞI","sure":"60","mesafe":"30","detay":""},{"id":"6","tur":"EGO, OTOBÜS","kod":"105-1","ad":"GÖLBAŞI-KIZILAY-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"7","tur":"EGO, OTOBÜS","kod":"105-2","ad":"ULUS-KIZILAY-GÖLBAŞI","sure":"70","mesafe":"33","detay":""},{"id":"8","tur":"EGO, OTOBÜS","kod":"105-3","ad":"GÖLBAŞI-MİLLİ KÜTÜPHANE","sure":"60","mesafe":"24","detay":""},{"id":"9","tur":"EGO, OTOBÜS","kod":"105-4","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI","sure":"60","mesafe":"27","detay":""},{"id":"10","tur":"EGO, OTOBÜS","kod":"106-3","ad":"GÖLBAŞI-YURTLAR-AŞTİ-AKKÖPRÜ-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"11","tur":"EGO, OTOBÜS","kod":"106-4","ad":"ULUS-KIZILAY-GÖLBAŞI-YURTLAR","sure":"53","mesafe":"33","detay":""},{"id":"12","tur":"EGO, OTOBÜS","kod":"107-6","ad":"GÖLBAŞI-TOKİ-AŞTİ-AKKÖPRÜ-ULUS","sure":"105","mesafe":"66","detay":""},{"id":"13","tur":"EGO, OTOBÜS","kod":"108","ad":"GÖLBAŞI-HAYMANA YOLU-HACILAR MH.","sure":"80","mesafe":"44","detay":""},{"id":"14","tur":"EGO, OTOBÜS","kod":"109-1","ad":"GÖLBAŞI-ÇANKAYA","sure":"60","mesafe":"27","detay":""},{"id":"15","tur":"EGO, OTOBÜS","kod":"109-2","ad":"ÇANKAYA-GÖLBAŞI","sure":"60","mesafe":"29","detay":""},{"id":"16","tur":"EGO, OTOBÜS","kod":"110","ad":"BİLKENT METRO İSTASYONU-BİLKENT-BEYTEPE MAHALLESİ","sure":"48","mesafe":"33","detay":""},{"id":"17","tur":"EGO, OTOBÜS","kod":"111","ad":"BİLKENT-BİLKENT METRO İSTASYONU","sure":"45","mesafe":"29","detay":""},{"id":"18","tur":"EGO, OTOBÜS","kod":"112-1","ad":"ANKARA ŞEHİR HASTANESİ-KIZILAY-ULUS","sure":"30","mesafe":"16","detay":""},{"id":"19","tur":"EGO, OTOBÜS","kod":"112-2","ad":"ULUS-KIZILAY-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"30","mesafe":"16","detay":""},{"id":"20","tur":"EGO, OTOBÜS","kod":"113","ad":"TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"21","tur":"ÖTA, OTOBÜS","kod":"113-5","ad":"(ÖTA) TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"22","tur":"EGO, OTOBÜS","kod":"114","ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ","sure":"40","mesafe":"23","detay":""},{"id":"23","tur":"EGO, OTOBÜS","kod":"114-2","ad":"AKKÖPRÜ-AŞTİ-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"45","mesafe":"25","detay":""},{"id":"24","tur":"ÖHO, OTOBÜS","kod":"114-7","ad":"(ÖHO) KIRKKONAKLAR-ŞENYURT","sure":"110","mesafe":"37","detay":""},{"id":"25","tur":"EGO, OTOBÜS","kod":"115","ad":"GÖLBAŞI-YURTLAR-KIZILAY-ULUS","sure":"50","mesafe":"25","detay":""},{"id":"26","tur":"EGO, OTOBÜS","kod":"115-2","ad":"ULUS-KIZILAY GÖLBAŞI-KAMPÜS-YURTLAR","sure":"55","mesafe":"27","detay":""},{"id":"27","tur":"EGO, OTOBÜS","kod":"115-3","ad":"GÖLBAŞI-YURTLAR-MİLLİ KÜTÜPHANE","sure":"55","mesafe":"20","detay":""},{"id":"28","tur":"EGO, OTOBÜS","kod":"115-8","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"60","mesafe":"22","detay":""},{"id":"29","tur":"EGO, OTOBÜS","kod":"117-1","ad":"OPERA-YARGITAY","sure":"60","mesafe":"16","detay":""},{"id":"30","tur":"EGO, OTOBÜS","kod":"117-2","ad":"YARGITAY-OPERA","sure":"60","mesafe":"17","detay":""},{"id":"31","tur":"EGO, OTOBÜS","kod":"118-1","ad":"GÖLBAŞI TOKİ-ÇUKURAMBAR-100.YIL","sure":"60","mesafe":"33","detay":""},{"id":"32","tur":"EGO, OTOBÜS","kod":"118-2","ad":"100.YIL-ÇUKURAMBAR-GÖLBAŞI TOKİ","sure":"60","mesafe":"32","detay":""},{"id":"33","tur":"EGO, OTOBÜS","kod":"130","ad":"BEYTEPE METRO İSTASYONU-HACETTEPE KAMPÜSÜ","sure":"20","mesafe":"11","detay":""},{"id":"34","tur":"EGO, OTOBÜS","kod":"131-1","ad":"MALAZGİRT MH.-TURTAŞ SİT.-KIZILAY-ULUS","sure":"35","mesafe":"13","detay":""},{"id":"35","tur":"EGO, OTOBÜS","kod":"131-2","ad":"ULUS-KIZILAY-MALAZGİRT MH.-TURTAŞ SİTESİ","sure":"45","mesafe":"13","detay":""},{"id":"36","tur":"EGO, OTOBÜS","kod":"132","ad":"SÖĞÜTÖZÜ METRO-ÇUKURAMBAR YÜZÜNCÜ YIL","sure":"35","mesafe":"12","detay":""},{"id":"37","tur":"EGO, OTOBÜS","kod":"133","ad":"ÇİĞDEM MAHALLESİ-OPERA","sure":"60","mesafe":"22","detay":""},{"id":"38","tur":"EGO, OTOBÜS","kod":"134","ad":"SÖĞÜTÖZÜ METRO İST.-Ç.AMBAR-ÇİĞDEM MH.","sure":"40","mesafe":"13","detay":""},{"id":"39","tur":"EGO, OTOBÜS","kod":"135-1","ad":"ORAN SİTESİ-ULUS","sure":"35","mesafe":"15","detay":""},{"id":"40","tur":"EGO, OTOBÜS","kod":"135-2","ad":"ULUS-ORAN SİTESİ","sure":"35","mesafe":"15","detay":""},{"id":"41","tur":"EGO, OTOBÜS","kod":"136","ad":"SÖĞÜTÖZÜ METRO-100.YIL-ÇİĞDEM MH.","sure":"40","mesafe":"16","detay":""},{"id":"42","tur":"EGO, OTOBÜS","kod":"137","ad":"GÖLBAŞI KRIMİNAL MERK.-YAYLABAĞ MH.","sure":"40","mesafe":"27","detay":""},{"id":"43","tur":"EGO, OTOBÜS","kod":"140","ad":"GÖLBAŞI-KARACAÖREN-GÖLBEK-ÇELTEK","sure":"170","mesafe":"151","detay":""},{"id":"44","tur":"EGO, OTOBÜS","kod":"141","ad":"ÜÇEM-KÜÇÜKBOYALIK-ŞEHRİBAN-ÇATALÇEŞME-KÜÇÜKBAYAT-KEKLİCE","sure":"105","mesafe":"165","detay":""},{"id":"45","tur":"EGO, OTOBÜS","kod":"142","ad":"TOHUMLAR-ÇAVUŞLU-YAYLA-KARAHASANLI-EVCİLER","sure":"150","mesafe":"119","detay":""},{"id":"46","tur":"EGO, OTOBÜS","kod":"143","ad":"SIHHİYE-SÖĞÜTÖZÜ-BALGAT ADLİYE","sure":"75","mesafe":"20","detay":""},{"id":"47","tur":"EGO, OTOBÜS","kod":"144","ad":"SIHHİYE ADLİYE-BALGAT ADLİYE","sure":"15","mesafe":"16","detay":""},{"id":"48","tur":"EGO, OTOBÜS","kod":"145-1","ad":"ATATÜRK SİTESİ-ULUS","sure":"35","mesafe":"14","detay":""},{"id":"49","tur":"EGO, OTOBÜS","kod":"145-2","ad":"ULUS-ATATÜRK SİTESİ","sure":"35","mesafe":"14","detay":""},{"id":"50","tur":"ÖHO, OTOBÜS","kod":"145-7","ad":"(ÖHO) ATATÜRK SİTE
... [TRUNCATED, toplam 83707 karakter]
```

---

### 21. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=Duraklar&QUERY=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:38:20 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWQBQBBA=FBPPCHDAGAJMNNINLDDDIJAJ; secure; path=/, TS010fd228=0139005254b382631dd6479e23b7e3f340b049368aff2c810e73c08b449f280924d46a89487ee08e944dfeb4c436495f5c19e864b9e9fed3bb2436344de67c0436aac9005d; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:38:21 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (227 byte):

```json
{"table":[{"id":"472","kod":"10560","ad":"PERİKIZ SK.","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.878134","lng":"32.714641","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"}],"message":"","status":"TRUE"}
```

---

### 22. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecenHatlar&KOD=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:38:24 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDAWQAQDAB=DJDJDHDACCMCADAENAJJEAIG; secure; path=/, TS010fd228=013900525426db7de07307ebfcf4a08eb95a2a4218272d85bd8e403fef1c229c2ccab7d673dcc55b8c27079013c358cd6aec1558aa3d83b3d3446bed51b8873662bdb43ba6; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:38:23 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (206 byte):

```json
{"table":[{"id":"87","tur":"EGO, OTOBÜS","kod":"174","ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ","sure":"60","mesafe":"17","detay":"SÃ¼resi 60 dk, Hat UzunluÄŸu 17 km"}],"message":"","status":"TRUE"}
```

---

### 23. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 13:38:24 GMT
Location: /mblSrv11/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDAWQAQDAB=DKDJDHDAEEKLMPPHIEJINEKM; secure; path=/, TS010fd228=013900525412dc934784a7a6b289c8547c0c7c42a71537ec2bdf559bb477fabfdfc5456d5a280af52c5697773fc27860216f7802dd65f6b7716413383c722eaef76c64d143; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:38:23 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv11/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 24. GET `egocptsrvand.ego.gov.tr/mblSrv11/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:38:24 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWRCSBCA=IGMKJFCAHJOJMPJLFEDDHBKC; secure; path=/, TS010fd228=013900525484549de6cc9a023cbad38efb4c996ea08bc5d6529673d940f72cc053f5b08dd1181a6077671a404b0e46bb0b97836abf50a27954cc7c7ec89945dc7ac85f2f3c; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:38:24 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (858 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:00 / 22 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"},{"arac_no":"11-102","plaka_no":"06 DD 9507","lat":"39.88089","lng":"32.71118833","hiz":"0 km","durak_no":"10433","onceki_durak_no":"10574","hat_no":"174","konum_tarihi":"09.08.2026 16:38:05","durak_sira_no":"14","aci":"123","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Yoğun","trafficLevel":"yogun","avgDelayMinutes":5.0,"avgDelayText":"5","reason":"Trafik: Yoğun","lastSeenUtc":"2026-08-09T13:37:50.74Z"},"saniye":"123","sure":"2 dk","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"3","durum":"","konum":"-","hat_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 25. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 13:38:54 GMT
Location: /mblSrv6/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDAWQAQDAB=AIHJDHDAADGAFDEHBMICIPLB; secure; path=/, TS010fd228=01390052549e360a378f448f89ba9434a04805b79e46eb4c9b48ea232498f80854d80b2ae582a21b8e2468583dcfd53a7b9d0b3523f0b82dcd35259323aea462e48e8cc672; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:38:53 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv6/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 26. GET `egocptsrvand.ego.gov.tr/mblSrv6/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:38:54 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCGQSSCCC=EBNIIICADIDGGMOOLAJLKPPL; secure; path=/, TS010fd228=0139005254f1356d4079feb3b1775b0216d8f621b969e87833ea91cf6da082e0e59af6aec9c759b734f313985e5c749b087fd2557a572ac133bf36635361d1074bdd361150; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:38:54 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (858 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:00 / 22 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"},{"arac_no":"11-102","plaka_no":"06 DD 9507","lat":"39.88089","lng":"32.71118833","hiz":"0 km","durak_no":"10433","onceki_durak_no":"10574","hat_no":"174","konum_tarihi":"09.08.2026 16:38:35","durak_sira_no":"14","aci":"123","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Yoğun","trafficLevel":"yogun","avgDelayMinutes":5.0,"avgDelayText":"5","reason":"Trafik: Yoğun","lastSeenUtc":"2026-08-09T13:37:50.74Z"},"saniye":"123","sure":"2 dk","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"3","durum":"","konum":"-","hat_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 27. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 13:39:24 GMT
Location: /mblSrv19/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDAWQAQDAB=AJLJDHDAHMFAKGJLJPJKGGGO; secure; path=/, TS010fd228=0139005254b5f758f9d44eadd4eadc4cd62ed8b3d677d10045708c0cdf3eef69944797e515868ec4de4890b1d3d4eb0fb04ef74ffab2a3a0448f38490e34bff5c78bb4130d; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:39:24 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv19/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 28. GET `egocptsrvand.ego.gov.tr/mblSrv19/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:39:24 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSESRTBCA=GEKNADCAANHGGFMCHENLNIOP; secure; path=/, TS010fd228=0139005254b772a532552fa23e20807fb0de6f1c3b4ab30b22caef6d78205bf34836077bc651495ac3eb2d7136f3acab82ba4d6d5bb7b8328d2b3763351c70067844ef3ad4; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:39:24 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (868 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:00 / 21 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"},{"arac_no":"11-102","plaka_no":"06 DD 9507","lat":"39.880344","lng":"32.711781","hiz":"16 km","durak_no":"10443","onceki_durak_no":"10433","hat_no":"174","konum_tarihi":"09.08.2026 16:39:09","durak_sira_no":"15","aci":"153","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Yoğun","trafficLevel":"cok_yogun","avgDelayMinutes":5.0,"avgDelayText":"5","reason":"Trafik: Çok yoğun","lastSeenUtc":"2026-08-09T13:38:11.547Z"},"saniye":"110","sure":"2 dk","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"3","durum":"","konum":"-","hat_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 29. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 13:39:54 GMT
Location: /mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDAWQAQDAB=IGPJDHDACKEBKEFGAFODJCNJ; secure; path=/, TS010fd228=01390052546e455563be0dc56daa6194ef6fec423cdf78aedc1e987c33b6fd2523c575aab60b48f135c676d7a59d3e68c7623cfa6afffd3cf37fc64058e07dedbe3ce136c3; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:39:54 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv5/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 30. GET `egocptsrvand.ego.gov.tr/mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:39:54 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGTRSABD=IBEAHICADHGMNFDCMJLKGCFF; secure; path=/, TS010fd228=0139005254c8f9c703ad0c714bfcd7e81f7bb85ee904545e217a20664b1f2efa7ede502aa25aad69446c950b213608e32f568552697554632ce3609a1e88e2e6f01bea38d0; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:39:55 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (867 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:00 / 21 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"},{"arac_no":"11-102","plaka_no":"06 DD 9507","lat":"39.879215","lng":"32.712994","hiz":"30 km","durak_no":"10443","onceki_durak_no":"10433","hat_no":"174","konum_tarihi":"09.08.2026 16:39:48","durak_sira_no":"15","aci":"135","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Yoğun","trafficLevel":"cok_yogun","avgDelayMinutes":5.0,"avgDelayText":"5","reason":"Trafik: Çok yoğun","lastSeenUtc":"2026-08-09T13:38:11.547Z"},"saniye":"66","sure":"1 dk","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"3","durum":"","konum":"-","hat_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 31. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 13:40:24 GMT
Location: /mblSrv11/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDAWQAQDAB=OGDKDHDAPGDDGGLGIKHHAHPM; secure; path=/, TS010fd228=01390052546a6f24c2d47b9fd0e5c6807754d757960befaeb453301b57c924df8b5d44403c2316a1103ed8dbd36ab479246fb79e308a9970f84a3f916f34b3e8b69f6f0301; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:40:24 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv11/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 32. GET `egocptsrvand.ego.gov.tr/mblSrv11/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:40:24 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWRDQBAB=ALFPJFCAGMKEPKPKBPGCOJCF; secure; path=/, TS010fd228=0139005254fc479d71ea5625a4626a19f3aee83b1b7443f8b6e413ec1236c2f5abd5b09fd490b0c4f5d8cd35c8a3c243709e8ecddc98bb8febce211ef2ebe9ad41ded40f90; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:40:25 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (855 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:00 / 20 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"},{"arac_no":"11-102","plaka_no":"06 DD 9507","lat":"39.877064","lng":"32.716587","hiz":"49 km","durak_no":"10560","onceki_durak_no":"10443","hat_no":"174","konum_tarihi":"09.08.2026 16:40:17","durak_sira_no":"16","aci":"126","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Normal","trafficLevel":"normal","avgDelayMinutes":-0.2,"avgDelayText":"-0.2","reason":null,"lastSeenUtc":"2026-08-09T13:39:55.23Z"},"saniye":"0","sure":"Geldi","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"3","durum":"geldi","konum":"-","hat_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 33. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 13:40:56 GMT
Location: /mblSrv11/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDAWQAQDAB=NHHKDHDAHMBFMNHCHCNGNCEK; secure; path=/, TS010fd228=0139005254e347793b24f3c6e682771025039873b8ba3189ca722658db0892ff6eebb9df71a108d5cf35e367d20dcd84588803011800f56feb7a1e487cdc38936f874b5c3e; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:40:55 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv11/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 34. GET `egocptsrvand.ego.gov.tr/mblSrv11/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 13:40:56 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSETRQDAA=AFFOBJCALPINKINALDPCKICF; secure; path=/, TS010fd228=0139005254bda449e96050d5f56d101cc62a286e88f2d00ccb4db2f78d40c279dc6483a7e0156a95acdfea666fa49be18861e1e45ebe3e70bf355c2b663ec8b63e94b4fcf7; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 13:40:55 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (859 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:00 / 20 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"},{"arac_no":"11-102","plaka_no":"06 DD 9507","lat":"39.876022","lng":"32.718258","hiz":"19 km","durak_no":"10560","onceki_durak_no":"10443","hat_no":"174","konum_tarihi":"09.08.2026 16:40:42","durak_sira_no":"16","aci":"126","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Normal","trafficLevel":"normal","avgDelayMinutes":-0.2,"avgDelayText":"-0.2","reason":null,"lastSeenUtc":"2026-08-09T13:39:55.23Z"},"saniye":"0","sure":"Gidiyor","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"3","durum":"gidiyor","konum":"-","hat_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 35. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 36. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 37. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 38. GET `egocptngapi.ego.gov.tr/api/config/ssl-pins`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 14:06:58 GMT
Set-Cookie: TS01174836=0139005254cba3916236c59b2e0458991cbd4460e9e683cfdb4b2dcf9a031a1b9c0a54c44fd8542c026ba9e3b5f9acc3eba35d00b7; Path=/; Domain=.egocptngapi.ego.gov.tr
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (208 byte):

```json
{"current":{"spki_hash":"f7XZum0nsAcNgBBi265+dnUx9iw51q/8/d7jdvOcJS0=","valid_from":"2026-01-01T00:00:00Z","valid_until":"2027-01-01T00:00:00Z"},"future":null,"change_to_new":false,"rotation_started_at":null}
```

---

### 39. GET `egocptngapi.ego.gov.tr/v1/route/compute`

- **Durum Kodu:** 204
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: no-store
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-Route-Compute-Prewarm: true
Date: Sun, 09 Aug 2026 14:06:58 GMT
Set-Cookie: TS01174836=013900525495c4a3f21ed3998906ef4a7f862cfeadc797cef6dd92c09c41a8b0dd1730e440cc8c09f2e26b172fddc58f772f9d0093; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi:** *(boş)*

---

### 40. GET `egocptngapi.ego.gov.tr/api/geocode?q=ankara&limit=1&lang=default`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EgoCepte/1.0
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Length: 336
Content-Type: application/json
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 14:06:58 GMT
Set-Cookie: TS01174836=0139005254df3546b26815c11e1bedc55c53a5bccc3d5cd4094d5d8c9a734bb64c97e9509eb249f8b2723ac59fd8cc164856d3f7d1; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi** (336 byte):

```json
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"osm_type":"N","osm_id":25869410,"osm_key":"place","osm_value":"city","type":"other","postcode":"06420","countrycode":"TR","name":"Ankara","city":"Çankaya","state":"Ankara","country":"Türkiye"},"geometry":{"type":"Point","coordinates":[32.8540497,39.9207759]}}]}
```

---

### 41. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 42. GET `egocptngapi.ego.gov.tr/api/config`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 173
```

**Yanıt Gövdesi** (173 byte):

```json
{"minBuildNumber": 5122, "minAppVersion": "5.1.2", "isLoginEnabled": false, "isCertificatePinningEnabled": false, "isForceUpdateEnabled": false, "isSanalKartEnabled": false}
```

---

### 43. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=Hatlar&QUERY=&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:07:00 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWQBQBBA=CIALDHDAFGPAODIBLMGCLKEM; secure; path=/, TS010fd228=01390052547f914ab6fe7b6eeb9d018211da8c32b5605a97177e9764a0d3bda918476d318bbd193c63f41607d9c123b910ad3605f83411bdde810967e651922dc71f909704; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:07:01 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (86891 byte):

```json
{"table":[{"id":"1","tur":"EGO, OTOBÜS","kod":"101","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER","sure":"73","mesafe":"43","detay":""},{"id":"2","tur":"EGO, OTOBÜS","kod":"101-1","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER-KARAOĞLAN MAHALLESİ","sure":"83","mesafe":"49","detay":""},{"id":"3","tur":"EGO, OTOBÜS","kod":"103-2","ad":"ATILIM ÜNİVERSİTESİ-OPERA","sure":"50","mesafe":"23","detay":""},{"id":"4","tur":"EGO, OTOBÜS","kod":"104-1","ad":"GÖLBAŞI-AKKÖPRÜ","sure":"45","mesafe":"28","detay":""},{"id":"5","tur":"EGO, OTOBÜS","kod":"104-2","ad":"AKKÖPRÜ-GÖLBAŞI","sure":"60","mesafe":"30","detay":""},{"id":"6","tur":"EGO, OTOBÜS","kod":"105-1","ad":"GÖLBAŞI-KIZILAY-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"7","tur":"EGO, OTOBÜS","kod":"105-2","ad":"ULUS-KIZILAY-GÖLBAŞI","sure":"70","mesafe":"33","detay":""},{"id":"8","tur":"EGO, OTOBÜS","kod":"105-3","ad":"GÖLBAŞI-MİLLİ KÜTÜPHANE","sure":"60","mesafe":"24","detay":""},{"id":"9","tur":"EGO, OTOBÜS","kod":"105-4","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI","sure":"60","mesafe":"27","detay":""},{"id":"10","tur":"EGO, OTOBÜS","kod":"106-3","ad":"GÖLBAŞI-YURTLAR-AŞTİ-AKKÖPRÜ-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"11","tur":"EGO, OTOBÜS","kod":"106-4","ad":"ULUS-KIZILAY-GÖLBAŞI-YURTLAR","sure":"53","mesafe":"33","detay":""},{"id":"12","tur":"EGO, OTOBÜS","kod":"107-6","ad":"GÖLBAŞI-TOKİ-AŞTİ-AKKÖPRÜ-ULUS","sure":"105","mesafe":"66","detay":""},{"id":"13","tur":"EGO, OTOBÜS","kod":"108","ad":"GÖLBAŞI-HAYMANA YOLU-HACILAR MH.","sure":"80","mesafe":"44","detay":""},{"id":"14","tur":"EGO, OTOBÜS","kod":"109-1","ad":"GÖLBAŞI-ÇANKAYA","sure":"60","mesafe":"27","detay":""},{"id":"15","tur":"EGO, OTOBÜS","kod":"109-2","ad":"ÇANKAYA-GÖLBAŞI","sure":"60","mesafe":"29","detay":""},{"id":"16","tur":"EGO, OTOBÜS","kod":"110","ad":"BİLKENT METRO İSTASYONU-BİLKENT-BEYTEPE MAHALLESİ","sure":"48","mesafe":"33","detay":""},{"id":"17","tur":"EGO, OTOBÜS","kod":"111","ad":"BİLKENT-BİLKENT METRO İSTASYONU","sure":"45","mesafe":"29","detay":""},{"id":"18","tur":"EGO, OTOBÜS","kod":"112-1","ad":"ANKARA ŞEHİR HASTANESİ-KIZILAY-ULUS","sure":"30","mesafe":"16","detay":""},{"id":"19","tur":"EGO, OTOBÜS","kod":"112-2","ad":"ULUS-KIZILAY-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"30","mesafe":"16","detay":""},{"id":"20","tur":"EGO, OTOBÜS","kod":"113","ad":"TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"21","tur":"ÖTA, OTOBÜS","kod":"113-5","ad":"(ÖTA) TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"22","tur":"EGO, OTOBÜS","kod":"114","ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ","sure":"40","mesafe":"23","detay":""},{"id":"23","tur":"EGO, OTOBÜS","kod":"114-2","ad":"AKKÖPRÜ-AŞTİ-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"45","mesafe":"25","detay":""},{"id":"24","tur":"ÖHO, OTOBÜS","kod":"114-7","ad":"(ÖHO) KIRKKONAKLAR-ŞENYURT","sure":"110","mesafe":"37","detay":""},{"id":"25","tur":"EGO, OTOBÜS","kod":"115","ad":"GÖLBAŞI-YURTLAR-KIZILAY-ULUS","sure":"50","mesafe":"25","detay":""},{"id":"26","tur":"EGO, OTOBÜS","kod":"115-2","ad":"ULUS-KIZILAY GÖLBAŞI-KAMPÜS-YURTLAR","sure":"55","mesafe":"27","detay":""},{"id":"27","tur":"EGO, OTOBÜS","kod":"115-3","ad":"GÖLBAŞI-YURTLAR-MİLLİ KÜTÜPHANE","sure":"55","mesafe":"20","detay":""},{"id":"28","tur":"EGO, OTOBÜS","kod":"115-8","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"60","mesafe":"22","detay":""},{"id":"29","tur":"EGO, OTOBÜS","kod":"117-1","ad":"OPERA-YARGITAY","sure":"60","mesafe":"16","detay":""},{"id":"30","tur":"EGO, OTOBÜS","kod":"117-2","ad":"YARGITAY-OPERA","sure":"60","mesafe":"17","detay":""},{"id":"31","tur":"EGO, OTOBÜS","kod":"118-1","ad":"GÖLBAŞI TOKİ-ÇUKURAMBAR-100.YIL","sure":"60","mesafe":"33","detay":""},{"id":"32","tur":"EGO, OTOBÜS","kod":"118-2","ad":"100.YIL-ÇUKURAMBAR-GÖLBAŞI TOKİ","sure":"60","mesafe":"32","detay":""},{"id":"33","tur":"EGO, OTOBÜS","kod":"130","ad":"BEYTEPE METRO İSTASYONU-HACETTEPE KAMPÜSÜ","sure":"20","mesafe":"11","detay":""},{"id":"34","tur":"EGO, OTOBÜS","kod":"131-1","ad":"MALAZGİRT MH.-TURTAŞ SİT.-KIZILAY-ULUS","sure":"35","mesafe":"13","detay":""},{"id":"35","tur":"EGO, OTOBÜS","kod":"131-2","ad":"ULUS-KIZILAY-MALAZGİRT MH.-TURTAŞ SİTESİ","sure":"45","mesafe":"13","detay":""},{"id":"36","tur":"EGO, OTOBÜS","kod":"132","ad":"SÖĞÜTÖZÜ METRO-ÇUKURAMBAR YÜZÜNCÜ YIL","sure":"35","mesafe":"12","detay":""},{"id":"37","tur":"EGO, OTOBÜS","kod":"133","ad":"ÇİĞDEM MAHALLESİ-OPERA","sure":"60","mesafe":"22","detay":""},{"id":"38","tur":"EGO, OTOBÜS","kod":"134","ad":"SÖĞÜTÖZÜ METRO İST.-Ç.AMBAR-ÇİĞDEM MH.","sure":"40","mesafe":"13","detay":""},{"id":"39","tur":"EGO, OTOBÜS","kod":"135-1","ad":"ORAN SİTESİ-ULUS","sure":"35","mesafe":"15","detay":""},{"id":"40","tur":"EGO, OTOBÜS","kod":"135-2","ad":"ULUS-ORAN SİTESİ","sure":"35","mesafe":"15","detay":""},{"id":"41","tur":"EGO, OTOBÜS","kod":"136","ad":"SÖĞÜTÖZÜ METRO-100.YIL-ÇİĞDEM MH.","sure":"40","mesafe":"16","detay":""},{"id":"42","tur":"EGO, OTOBÜS","kod":"137","ad":"GÖLBAŞI KRIMİNAL MERK.-YAYLABAĞ MH.","sure":"40","mesafe":"27","detay":""},{"id":"43","tur":"EGO, OTOBÜS","kod":"140","ad":"GÖLBAŞI-KARACAÖREN-GÖLBEK-ÇELTEK","sure":"170","mesafe":"151","detay":""},{"id":"44","tur":"EGO, OTOBÜS","kod":"141","ad":"ÜÇEM-KÜÇÜKBOYALIK-ŞEHRİBAN-ÇATALÇEŞME-KÜÇÜKBAYAT-KEKLİCE","sure":"105","mesafe":"165","detay":""},{"id":"45","tur":"EGO, OTOBÜS","kod":"142","ad":"TOHUMLAR-ÇAVUŞLU-YAYLA-KARAHASANLI-EVCİLER","sure":"150","mesafe":"119","detay":""},{"id":"46","tur":"EGO, OTOBÜS","kod":"143","ad":"SIHHİYE-SÖĞÜTÖZÜ-BALGAT ADLİYE","sure":"75","mesafe":"20","detay":""},{"id":"47","tur":"EGO, OTOBÜS","kod":"144","ad":"SIHHİYE ADLİYE-BALGAT ADLİYE","sure":"15","mesafe":"16","detay":""},{"id":"48","tur":"EGO, OTOBÜS","kod":"145-1","ad":"ATATÜRK SİTESİ-ULUS","sure":"35","mesafe":"14","detay":""},{"id":"49","tur":"EGO, OTOBÜS","kod":"145-2","ad":"ULUS-ATATÜRK SİTESİ","sure":"35","mesafe":"14","detay":""},{"id":"50","tur":"ÖHO, OTOBÜS","kod":"145-7","ad":"(ÖHO) ATATÜRK SİTE
... [TRUNCATED, toplam 83707 karakter]
```

---

### 44. GET `egocptngapi.ego.gov.tr/api/config/ssl-pins`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 14:15:36 GMT
Set-Cookie: TS01174836=013900525435afffca37fa8c45a04685d145dc1b35813eed662bedc1dcfd2104955799907a6c41d22f3ebf30f60219f0102fab564e; Path=/; Domain=.egocptngapi.ego.gov.tr
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (208 byte):

```json
{"current":{"spki_hash":"f7XZum0nsAcNgBBi265+dnUx9iw51q/8/d7jdvOcJS0=","valid_from":"2026-01-01T00:00:00Z","valid_until":"2027-01-01T00:00:00Z"},"future":null,"change_to_new":false,"rotation_started_at":null}
```

---

### 45. GET `egocptsrvand.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 46. GET `egocptngapi.ego.gov.tr/api/geocode?q=ankara&limit=1&lang=default`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EgoCepte/1.0
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Length: 336
Content-Type: application/json
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
Date: Sun, 09 Aug 2026 14:15:36 GMT
Set-Cookie: TS01174836=013900525445f7b248aee7d8d8a10c36b33289480fd8ee26eda23284fd389cd890cf46f217a9467d30c39381b13713f80fb347558b; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi** (336 byte):

```json
{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"osm_type":"N","osm_id":25869410,"osm_key":"place","osm_value":"city","type":"other","postcode":"06420","countrycode":"TR","name":"Ankara","city":"Çankaya","state":"Ankara","country":"Türkiye"},"geometry":{"type":"Point","coordinates":[32.8540497,39.9207759]}}]}
```

---

### 47. GET `egocptngapi.ego.gov.tr/v1/route/compute`

- **Durum Kodu:** 204
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: no-store
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'none'; frame-ancestors 'none'
Permissions-Policy: camera=(), microphone=(), geolocation=()
X-Route-Compute-Prewarm: true
Date: Sun, 09 Aug 2026 14:15:36 GMT
Set-Cookie: TS01174836=013900525423e0654ad81dd97cc483e19c41a3738a24f01be026f9860bb09bb53b6fa46d10d45a9c631d2d6b4198cee9be603d5cde; Path=/; Domain=.egocptngapi.ego.gov.tr
```

**Yanıt Gövdesi:** *(boş)*

---

### 48. GET `egocptsrvios.ego.gov.tr/hibrit/connect/androidConn.asp?FNC=Connect&D=ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2&VER=5.1.2&LAN=tr&T=default&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvios.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 280
```

**Yanıt Gövdesi** (280 byte):

```json
{"_id": "ssl_pins", "IsPinningEnabled": "true", "Current": {"SpkiHash": "I11jXOiyn2pSsQgdCzWdUrOPTg9b3SOjgyHA7q0Nlas=", "ValidFrom": "2026-01-01T00:00:00.000+00:00", "ValidUntil": "2027-01-01T00:00:00.000+00:00"}, "Future": null, "ChangeToNew": "false", "RotationStartedAt": null}
```

---

### 49. GET `egocptngapi.ego.gov.tr/api/config`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
accept: application/json
accept-encoding: gzip
host: egocptngapi.ego.gov.tr
```

**Yanıt Header'ları:**

```
Content-Type: application/json; charset=utf-8
content-length: 173
```

**Yanıt Gövdesi** (173 byte):

```json
{"minBuildNumber": 5122, "minAppVersion": "5.1.2", "isLoginEnabled": false, "isCertificatePinningEnabled": false, "isForceUpdateEnabled": false, "isSanalKartEnabled": false}
```

---

### 50. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=Hatlar&QUERY=&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:15:40 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGRTRDBC=EKLOBGDAMJJDNBLADHEEGPMN; secure; path=/, TS010fd228=0139005254860248fec7aedb9940ba0251cbbc9a9d3e24ab1a9c235b475277e89170126979695c2dacd3f2057e1f0c2dccf3da54695a0eb7b177cf35badb4196463bbbfce5; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:40 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (86891 byte):

```json
{"table":[{"id":"1","tur":"EGO, OTOBÜS","kod":"101","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER","sure":"73","mesafe":"43","detay":""},{"id":"2","tur":"EGO, OTOBÜS","kod":"101-1","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER-KARAOĞLAN MAHALLESİ","sure":"83","mesafe":"49","detay":""},{"id":"3","tur":"EGO, OTOBÜS","kod":"103-2","ad":"ATILIM ÜNİVERSİTESİ-OPERA","sure":"50","mesafe":"23","detay":""},{"id":"4","tur":"EGO, OTOBÜS","kod":"104-1","ad":"GÖLBAŞI-AKKÖPRÜ","sure":"45","mesafe":"28","detay":""},{"id":"5","tur":"EGO, OTOBÜS","kod":"104-2","ad":"AKKÖPRÜ-GÖLBAŞI","sure":"60","mesafe":"30","detay":""},{"id":"6","tur":"EGO, OTOBÜS","kod":"105-1","ad":"GÖLBAŞI-KIZILAY-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"7","tur":"EGO, OTOBÜS","kod":"105-2","ad":"ULUS-KIZILAY-GÖLBAŞI","sure":"70","mesafe":"33","detay":""},{"id":"8","tur":"EGO, OTOBÜS","kod":"105-3","ad":"GÖLBAŞI-MİLLİ KÜTÜPHANE","sure":"60","mesafe":"24","detay":""},{"id":"9","tur":"EGO, OTOBÜS","kod":"105-4","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI","sure":"60","mesafe":"27","detay":""},{"id":"10","tur":"EGO, OTOBÜS","kod":"106-3","ad":"GÖLBAŞI-YURTLAR-AŞTİ-AKKÖPRÜ-ULUS","sure":"55","mesafe":"29","detay":""},{"id":"11","tur":"EGO, OTOBÜS","kod":"106-4","ad":"ULUS-KIZILAY-GÖLBAŞI-YURTLAR","sure":"53","mesafe":"33","detay":""},{"id":"12","tur":"EGO, OTOBÜS","kod":"107-6","ad":"GÖLBAŞI-TOKİ-AŞTİ-AKKÖPRÜ-ULUS","sure":"105","mesafe":"66","detay":""},{"id":"13","tur":"EGO, OTOBÜS","kod":"108","ad":"GÖLBAŞI-HAYMANA YOLU-HACILAR MH.","sure":"80","mesafe":"44","detay":""},{"id":"14","tur":"EGO, OTOBÜS","kod":"109-1","ad":"GÖLBAŞI-ÇANKAYA","sure":"60","mesafe":"27","detay":""},{"id":"15","tur":"EGO, OTOBÜS","kod":"109-2","ad":"ÇANKAYA-GÖLBAŞI","sure":"60","mesafe":"29","detay":""},{"id":"16","tur":"EGO, OTOBÜS","kod":"110","ad":"BİLKENT METRO İSTASYONU-BİLKENT-BEYTEPE MAHALLESİ","sure":"48","mesafe":"33","detay":""},{"id":"17","tur":"EGO, OTOBÜS","kod":"111","ad":"BİLKENT-BİLKENT METRO İSTASYONU","sure":"45","mesafe":"29","detay":""},{"id":"18","tur":"EGO, OTOBÜS","kod":"112-1","ad":"ANKARA ŞEHİR HASTANESİ-KIZILAY-ULUS","sure":"30","mesafe":"16","detay":""},{"id":"19","tur":"EGO, OTOBÜS","kod":"112-2","ad":"ULUS-KIZILAY-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"30","mesafe":"16","detay":""},{"id":"20","tur":"EGO, OTOBÜS","kod":"113","ad":"TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"21","tur":"ÖTA, OTOBÜS","kod":"113-5","ad":"(ÖTA) TARIM BAKANLIĞI METRO-ANKARA BİLKENT ŞEHİR HASTANESİ","sure":"15","mesafe":"4","detay":""},{"id":"22","tur":"EGO, OTOBÜS","kod":"114","ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ","sure":"40","mesafe":"23","detay":""},{"id":"23","tur":"EGO, OTOBÜS","kod":"114-2","ad":"AKKÖPRÜ-AŞTİ-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"45","mesafe":"25","detay":""},{"id":"24","tur":"ÖHO, OTOBÜS","kod":"114-7","ad":"(ÖHO) KIRKKONAKLAR-ŞENYURT","sure":"110","mesafe":"37","detay":""},{"id":"25","tur":"EGO, OTOBÜS","kod":"115","ad":"GÖLBAŞI-YURTLAR-KIZILAY-ULUS","sure":"50","mesafe":"25","detay":""},{"id":"26","tur":"EGO, OTOBÜS","kod":"115-2","ad":"ULUS-KIZILAY GÖLBAŞI-KAMPÜS-YURTLAR","sure":"55","mesafe":"27","detay":""},{"id":"27","tur":"EGO, OTOBÜS","kod":"115-3","ad":"GÖLBAŞI-YURTLAR-MİLLİ KÜTÜPHANE","sure":"55","mesafe":"20","detay":""},{"id":"28","tur":"EGO, OTOBÜS","kod":"115-8","ad":"MİLLİ KÜTÜPHANE-GÖLBAŞI-KAMPÜS-YURTLAR","sure":"60","mesafe":"22","detay":""},{"id":"29","tur":"EGO, OTOBÜS","kod":"117-1","ad":"OPERA-YARGITAY","sure":"60","mesafe":"16","detay":""},{"id":"30","tur":"EGO, OTOBÜS","kod":"117-2","ad":"YARGITAY-OPERA","sure":"60","mesafe":"17","detay":""},{"id":"31","tur":"EGO, OTOBÜS","kod":"118-1","ad":"GÖLBAŞI TOKİ-ÇUKURAMBAR-100.YIL","sure":"60","mesafe":"33","detay":""},{"id":"32","tur":"EGO, OTOBÜS","kod":"118-2","ad":"100.YIL-ÇUKURAMBAR-GÖLBAŞI TOKİ","sure":"60","mesafe":"32","detay":""},{"id":"33","tur":"EGO, OTOBÜS","kod":"130","ad":"BEYTEPE METRO İSTASYONU-HACETTEPE KAMPÜSÜ","sure":"20","mesafe":"11","detay":""},{"id":"34","tur":"EGO, OTOBÜS","kod":"131-1","ad":"MALAZGİRT MH.-TURTAŞ SİT.-KIZILAY-ULUS","sure":"35","mesafe":"13","detay":""},{"id":"35","tur":"EGO, OTOBÜS","kod":"131-2","ad":"ULUS-KIZILAY-MALAZGİRT MH.-TURTAŞ SİTESİ","sure":"45","mesafe":"13","detay":""},{"id":"36","tur":"EGO, OTOBÜS","kod":"132","ad":"SÖĞÜTÖZÜ METRO-ÇUKURAMBAR YÜZÜNCÜ YIL","sure":"35","mesafe":"12","detay":""},{"id":"37","tur":"EGO, OTOBÜS","kod":"133","ad":"ÇİĞDEM MAHALLESİ-OPERA","sure":"60","mesafe":"22","detay":""},{"id":"38","tur":"EGO, OTOBÜS","kod":"134","ad":"SÖĞÜTÖZÜ METRO İST.-Ç.AMBAR-ÇİĞDEM MH.","sure":"40","mesafe":"13","detay":""},{"id":"39","tur":"EGO, OTOBÜS","kod":"135-1","ad":"ORAN SİTESİ-ULUS","sure":"35","mesafe":"15","detay":""},{"id":"40","tur":"EGO, OTOBÜS","kod":"135-2","ad":"ULUS-ORAN SİTESİ","sure":"35","mesafe":"15","detay":""},{"id":"41","tur":"EGO, OTOBÜS","kod":"136","ad":"SÖĞÜTÖZÜ METRO-100.YIL-ÇİĞDEM MH.","sure":"40","mesafe":"16","detay":""},{"id":"42","tur":"EGO, OTOBÜS","kod":"137","ad":"GÖLBAŞI KRIMİNAL MERK.-YAYLABAĞ MH.","sure":"40","mesafe":"27","detay":""},{"id":"43","tur":"EGO, OTOBÜS","kod":"140","ad":"GÖLBAŞI-KARACAÖREN-GÖLBEK-ÇELTEK","sure":"170","mesafe":"151","detay":""},{"id":"44","tur":"EGO, OTOBÜS","kod":"141","ad":"ÜÇEM-KÜÇÜKBOYALIK-ŞEHRİBAN-ÇATALÇEŞME-KÜÇÜKBAYAT-KEKLİCE","sure":"105","mesafe":"165","detay":""},{"id":"45","tur":"EGO, OTOBÜS","kod":"142","ad":"TOHUMLAR-ÇAVUŞLU-YAYLA-KARAHASANLI-EVCİLER","sure":"150","mesafe":"119","detay":""},{"id":"46","tur":"EGO, OTOBÜS","kod":"143","ad":"SIHHİYE-SÖĞÜTÖZÜ-BALGAT ADLİYE","sure":"75","mesafe":"20","detay":""},{"id":"47","tur":"EGO, OTOBÜS","kod":"144","ad":"SIHHİYE ADLİYE-BALGAT ADLİYE","sure":"15","mesafe":"16","detay":""},{"id":"48","tur":"EGO, OTOBÜS","kod":"145-1","ad":"ATATÜRK SİTESİ-ULUS","sure":"35","mesafe":"14","detay":""},{"id":"49","tur":"EGO, OTOBÜS","kod":"145-2","ad":"ULUS-ATATÜRK SİTESİ","sure":"35","mesafe":"14","detay":""},{"id":"50","tur":"ÖHO, OTOBÜS","kod":"145-7","ad":"(ÖHO) ATATÜRK SİTE
... [TRUNCATED, toplam 83707 karakter]
```

---

### 51. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=Duraklar&QUERY=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:15:50 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSESSRDBB=ACEBBGDAFNECBCKBIHOPAHOF; secure; path=/, TS010fd228=0139005254f88c73caf75105be36a9c9e73d94fa27243926fffc84364882b180d599d97a362f96677dccc888e46a4adc2225b2b9bcc06abf54d51a45722c8ea553a8628c60; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:51 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (227 byte):

```json
{"table":[{"id":"472","kod":"10560","ad":"PERİKIZ SK.","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.878134","lng":"32.714641","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"}],"message":"","status":"TRUE"}
```

---

### 52. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecenHatlar&KOD=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:15:54 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDQEQTTCDB=JEJOBGDAKGKOEMCBFKAKEMIO; secure; path=/, TS010fd228=0139005254cac6de3f2e94efc192996dde0c8c9203ffa093d9cb563bf4225c07970ac81544d0b96f0c8fc049e45192b811df90dda4b159a7516f4f970c4455005d8ef5f516; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:55 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (206 byte):

```json
{"table":[{"id":"87","tur":"EGO, OTOBÜS","kod":"174","ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ","sure":"60","mesafe":"17","detay":"SÃ¼resi 60 dk, Hat UzunluÄŸu 17 km"}],"message":"","status":"TRUE"}
```

---

### 53. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:15:54 GMT
Location: /mblSrv1/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDSGRTRDBC=GINOBGDANAKJHEKDPFFKEOJO; secure; path=/, TS010fd228=01390052545f4386e7c3d2425321d1ae4c71c23fd370ebedcdcf69dd1855a994581521accc17a49e9203331e7274c60a466a6404c0788a038418f59bc34c4df2e6650a6cdb; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:55 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv1/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 54. GET `egocptsrvand.ego.gov.tr/mblSrv1/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:15:54 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSETRQDAD=EPHDPHCAFBMHKNPADPODFMMN; secure; path=/, TS010fd228=0139005254084eb4fb1fcf98e61d4cfe3a179085815190a3ff25947ca1faf55eb274e157de2a978ba7e2e042547fd86f3c4644a0b0dbecdc14b1c876996b484358504a3169; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:55 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (235 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 15 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 55. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=HatBilgileri&YOL=TRUE&KOD=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:15:56 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGRTRDBC=GLNOBGDAMBPNDKBEPIBAGDBL; secure; path=/, TS010fd228=0139005254cad8c96925968fa3796755919cb77d75db11e04e95e6a86857db7bc970745c0d152aed8ad62a9d473cfbcef3b720eff4be9ec34e70897379edd93a083018a4f1; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:56 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (23811 byte):

```json
{"table":[{"id":"87","tur":"EGO, OTOBÜS","kod":"174","ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ","sure":"60","mesafe":"17","detay":""}],"table_durak":[{"id":"5788","sira":"1","kod":"10486","ad":"BEYTEPE METRO İSTASYONU","konum":"Mutlukent Mh.1596.Cd.Çankaya","lat":"39.904152","lng":"32.732622","detay":"Mutlukent Mh.1596.Cd.Çankaya"},{"id":"5789","sira":"2","kod":"10487","ad":"1596 CD.","konum":"Mutlukent Mh.1596.Cd.Çankaya","lat":"39.897261","lng":"32.733469","detay":"Mutlukent Mh.1596.Cd.Çankaya"},{"id":"5790","sira":"3","kod":"10496","ad":"ANGORA BLV.","konum":"Mutlukent Mh.Angora Blv.Çankaya","lat":"39.894482","lng":"32.729109","detay":"Mutlukent Mh.Angora Blv.Çankaya"},{"id":"5791","sira":"4","kod":"10483","ad":"DİCLE CD.","konum":"Mutlukent Mh.Dicle Cd.Çankaya","lat":"39.894659","lng":"32.727218","detay":"Mutlukent Mh.Dicle Cd.Çankaya"},{"id":"5792","sira":"5","kod":"10482","ad":"İNCEDERE SK.","konum":"Mutlukent Mh.Dicle Cd.Çankaya","lat":"39.896357","lng":"32.723586","detay":"Mutlukent Mh.Dicle Cd.Çankaya"},{"id":"5793","sira":"6","kod":"10463","ad":"GÖKIRMAK SK.","konum":"Mutlukent Mh.Dicle Cd.Çankaya","lat":"39.895042","lng":"32.721402","detay":"Mutlukent Mh.Dicle Cd.Çankaya"},{"id":"5794","sira":"7","kod":"10508","ad":"BEYSUKENT POLİS MERKEZİ","konum":"Mutlukent Mh.2024.Cd.Çankaya","lat":"39.893467","lng":"32.718515","detay":"Mutlukent Mh.2024.Cd.Çankaya"},{"id":"5795","sira":"8","kod":"10474","ad":"ANKARA 85 SİTESİ","konum":"Mutlukent Mh.2024.Cd.Çankaya","lat":"39.890777","lng":"32.717636","detay":"Mutlukent Mh.2024.Cd.Çankaya"},{"id":"5796","sira":"9","kod":"10464","ad":"AYTEN ŞABAN DİRİ ORTAOKULU","konum":"Mutlukent Mh.Mh.1920.Cd.Çankaya","lat":"39.890326","lng":"32.719674","detay":"Mutlukent Mh.Mh.1920.Cd.Çankaya"},{"id":"5797","sira":"10","kod":"10495","ad":"BEYKÖY SİTESİ","konum":"Mutlukent Mh.Angora Blv.Çankaya","lat":"39.889427","lng":"32.720413","detay":"Mutlukent Mh.Angora Blv.Çankaya"},{"id":"5798","sira":"11","kod":"10494","ad":"BEYSU GREN PARK","konum":"Mutlukent Mh.Angora Blv.Çankaya","lat":"39.887398","lng":"32.718248","detay":"Mutlukent Mh.Angora Blv.Çankaya"},{"id":"5799","sira":"12","kod":"10572","ad":"2015.SK.","konum":"Mutlukent Mh.Angora Blv.Çankaya","lat":"39.885764","lng":"32.715917","detay":"Mutlukent Mh.Angora Blv.Çankaya"},{"id":"5800","sira":"13","kod":"10574","ad":"YENİ LADİN SİTESİ","konum":"Mutlukent Mh.Angora Blv.Çankaya","lat":"39.883374","lng":"32.713292","detay":"Mutlukent Mh.Angora Blv.Çankaya"},{"id":"5801","sira":"14","kod":"10433","ad":"ÖZBEYKENT KONUTLARI","konum":"Mutlukent Mh.Angora Blv.Çankaya","lat":"39.882268","lng":"32.712125","detay":"Mutlukent Mh.Angora Blv.Çankaya"},{"id":"5802","sira":"15","kod":"10443","ad":"ANGORA EVLERİ","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.880014","lng":"32.711963","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"},{"id":"5803","sira":"16","kod":"10560","ad":"PERİKIZ SK.","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.878134","lng":"32.714641","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"},{"id":"5804","sira":"17","kod":"10563","ad":"RESSAMLAR SK.","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.87559","lng":"32.718703","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"},{"id":"5805","sira":"18","kod":"10564","ad":"GÜZEL SANATLAR LİSESİ","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.873099","lng":"32.719205","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"},{"id":"5806","sira":"19","kod":"10582","ad":"BESTECİ CD.","konum":"Mutlukent Mh.Mh.Besteci Cd.Çankaya","lat":"39.869217","lng":"32.717029","detay":"Mutlukent Mh.Mh.Besteci Cd.Çankaya"},{"id":"5807","sira":"20","kod":"13543","ad":"ALTINBEL VİLLALARI","konum":"Mutlukent Mh.Hitit Blv.Çankaya","lat":"39.867152","lng":"32.717024","detay":"Mutlukent Mh.Hitit Blv.Çankaya"},{"id":"5808","sira":"21","kod":"13544","ad":"ANKA NATURA","konum":"Beytepe Mh.Piri Reis Cd.Çankaya","lat":"39.863862","lng":"32.71831","detay":"Beytepe Mh.Piri Reis Cd.Çankaya"},{"id":"5809","sira":"22","kod":"14011","ad":"PARK ALİZE KONUTLARI","konum":"Beytepe Mh.Piri Reis Cd.Çankaya","lat":"39.861575","lng":"32.720918","detay":"Beytepe Mh.Piri Reis Cd.Çankaya"},{"id":"5810","sira":"23","kod":"14054","ad":"GÜNDÖNÜMÜ CD.","konum":"Beytepe Mh.Gündönümü Cd.Çankaya","lat":"39.86053","lng":"32.724872","detay":"Beytepe Mh.Gündönümü Cd.Çankaya"},{"id":"5811","sira":"24","kod":"13545","ad":"GÜNDÖNÜMÜ CD.","konum":"Beytepe Mh.Bulutsu Sk.Çankaya","lat":"39.859552","lng":"32.727616","detay":"Beytepe Mh.Bulutsu Sk.Çankaya"},{"id":"5812","sira":"25","kod":"12144","ad":"IŞIK YILI CD.","konum":"-","lat":"39.857679","lng":"32.729175","detay":"-"},{"id":"5813","sira":"26","kod":"13546","ad":"GÜNDÖNÜMÜ CD.","konum":"Beytepe Mh.Gündönümü Cd.Çankaya","lat":"39.859628","lng":"32.727711","detay":"Beytepe Mh.Gündönümü Cd.Çankaya"},{"id":"5814","sira":"27","kod":"14053","ad":"GÜNDÖNÜMÜ CD.","konum":"Beytepe Mh.5382.Sk.Çankaya","lat":"39.86067","lng":"32.724889","detay":"Beytepe Mh.5382.Sk.Çankaya"},{"id":"5815","sira":"28","kod":"14010","ad":"PARK ALİZE KONUTLARI","konum":"Beytepe Mh.Piri Reis Cd.Çankaya","lat":"39.861727","lng":"32.720971","detay":"Beytepe Mh.Piri Reis Cd.Çankaya"},{"id":"5816","sira":"29","kod":"13789","ad":"ANKA NATURA","konum":"-","lat":"39.863985","lng":"32.718535","detay":"-"},{"id":"5817","sira":"30","kod":"10575","ad":"ALTINBEL VİLLALARI","konum":"Mutlukent Mh.Mh.Hitit Blv.Çankaya","lat":"39.86732","lng":"32.717226","detay":"Mutlukent Mh.Mh.Hitit Blv.Çankaya"},{"id":"5818","sira":"31","kod":"10576","ad":"HİTİT BLV.","konum":"Mutlukent Mh.Mh.Besteci Cd.Çankaya","lat":"39.869197","lng":"32.717294","detay":"Mutlukent Mh.Mh.Besteci Cd.Çankaya"},{"id":"5819","sira":"32","kod":"10562","ad":"GEZGİNLER CD.","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya","lat":"39.872125","lng":"32.716724","detay":"Mutlukent Mh.Saltoğlu Angora Cd.Çankaya"},{"id":"5820","sira":"33","kod":"10559","ad":"TRAFO","konum":"Mutlukent Mh.Saltoğlu Angora Cd.Ça
... [TRUNCATED, toplam 23337 karakter]
```

---

### 56. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:15:56 GMT
Location: /mblSrv20/service.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWQBQBBA=LIJODHDAHCLGEOJEKLOJABAJ; secure; path=/, TS010fd228=0139005254b2aa976ff1d99a2b928b166e005a4cc15e2457c6ae3d775bc07a61d3d743e16322a7a266cd0e03c94ce74e48020245ff0245de8772aa4f8bc1026da2d917e19e; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:57 GMT
Content-Length: 292
```

**Yanıt Gövdesi** (292 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv20/service.asp?&amp;LAN=tr&amp;FNC=Otobus&amp;DURAK=10560&amp;HAT=174&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 57. GET `egocptsrvand.ego.gov.tr/mblSrv20/service.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:15:56 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDAUTDRADA=HOCNHFCAAIJBACHCLLENIGMH; secure; path=/, TS010fd228=0139005254f0a7752bac7e11c38a90cad1e6fe998f863ad270a684da737c3bf3ea69fb3f194657f9849d531b3cca56d35189e0b1beb0da6e6bae4bf842abf2dc1a19690010; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:15:57 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (813 byte):

```json
{"table":[{"arac_no":"-","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ","hat_no":"174","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 15 dk Sonra","detay":""},{"arac_no":"12-153","plaka_no":"06 DT 9908","lat":"39.871891","lng":"32.717834","hiz":"18 km","durak_no":"10564","onceki_durak_no":"10563","hat_no":"174","konum_tarihi":"09.08.2026 17:15:44","durak_sira_no":"18","aci":"239","doluluk":{"message":"no data"},"detay":"Körüklü‚ Engelli","trafik":{"label":"Normal","trafficLevel":"normal","avgDelayMinutes":0.7,"avgDelayText":"0.7","reason":null,"lastSeenUtc":"2026-08-09T14:14:59.827Z"},"saniye":"999999","sure":"Geçti","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"5","durum":"gecti","konum":"-","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 58. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:16:02 GMT
Location: /mblSrv17/service.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWQBQBBA=FDKODHDANJKMGHJAFBIDNGJJ; secure; path=/, TS010fd228=013900525429fb6c4d52304797f491d3c6881c57b5c36f2ac36e063ba5ea73e41367c675611cd186e7784ade9b46c1741d33257bc3b62ee63480cf120bee44333f0d6d0652; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:16:03 GMT
Content-Length: 292
```

**Yanıt Gövdesi** (292 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv17/service.asp?&amp;LAN=tr&amp;FNC=Otobus&amp;DURAK=10560&amp;HAT=174&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 59. GET `egocptsrvand.ego.gov.tr/mblSrv17/service.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:16:02 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSETSTBAA=GHEENCCAOLGCBPAOPAALCODP; secure; path=/, TS010fd228=0139005254b8f6edf5f8080189741e6c18d475410ebf3122d775a4e083b88953462df9f9890ffe0f8dd11500a398755b6643b56d6d79553fc6c94d58dd0e43fc74a61b84f5; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:16:03 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (813 byte):

```json
{"table":[{"arac_no":"-","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ","hat_no":"174","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 14 dk Sonra","detay":""},{"arac_no":"12-153","plaka_no":"06 DT 9908","lat":"39.871387","lng":"32.717491","hiz":"35 km","durak_no":"10564","onceki_durak_no":"10563","hat_no":"174","konum_tarihi":"09.08.2026 17:15:56","durak_sira_no":"18","aci":"187","doluluk":{"message":"no data"},"detay":"Körüklü‚ Engelli","trafik":{"label":"Normal","trafficLevel":"normal","avgDelayMinutes":0.7,"avgDelayText":"0.7","reason":null,"lastSeenUtc":"2026-08-09T14:14:59.827Z"},"saniye":"999999","sure":"Geçti","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"4","durum":"gecti","konum":"-","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 60. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:16:02 GMT
Location: /mblSrv12/service.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWQBQBBA=ODKODHDABAOGEPPJLKILFACB; secure; path=/, TS010fd228=013900525423051ac07b3758b381cc4564c3eaa776101ea987f343a10d2a6a2aa895f309c50cf0f556b3bafa77cc2cee6e5ccbf447ddd111474e8f9abfa0a3402961d5f4d1; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:16:03 GMT
Content-Length: 292
```

**Yanıt Gövdesi** (292 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv12/service.asp?&amp;LAN=tr&amp;FNC=Otobus&amp;DURAK=10560&amp;HAT=174&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 61. GET `egocptsrvand.ego.gov.tr/mblSrv12/service.asp?&LAN=tr&FNC=Otobus&DURAK=10560&HAT=174&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:16:02 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCUTDTBCB=FAEJLFCAHFJIEHEPIJLEBIOM; secure; path=/, TS010fd228=01390052544ac6722fd0df7c7cfb267156ccee08eaf729858ce0672ab5d6cb4eec9d08ad082aeb939f61f257c1921c24eb3566b2ef3164aa9ad31e601c0f16f5e93602aebe; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:16:03 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (813 byte):

```json
{"table":[{"arac_no":"-","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ","hat_no":"174","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 14 dk Sonra","detay":""},{"arac_no":"12-153","plaka_no":"06 DT 9908","lat":"39.871387","lng":"32.717491","hiz":"35 km","durak_no":"10564","onceki_durak_no":"10563","hat_no":"174","konum_tarihi":"09.08.2026 17:15:56","durak_sira_no":"18","aci":"187","doluluk":{"message":"no data"},"detay":"Körüklü‚ Engelli","trafik":{"label":"Normal","trafficLevel":"normal","avgDelayMinutes":0.7,"avgDelayText":"0.7","reason":null,"lastSeenUtc":"2026-08-09T14:14:59.827Z"},"saniye":"999999","sure":"Geçti","secili_durak_no":"10560","secili_durak_sira_no":"16","yon":"4","durum":"gecti","konum":"-","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 62. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:16:30 GMT
Location: /mblSrv19/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWQBQBBA=MENODHDAECEFAFGHMKOIOHHN; secure; path=/, TS010fd228=0139005254738325879e030723a35d559670b26990fce74359bdffc7275751cb083a438bed24280d69dea286a4961b7ae7964a4bd28a50ab5e060745a80e2a89d979e2e951; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:16:30 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv19/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 63. GET `egocptsrvand.ego.gov.tr/mblSrv19/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:16:30 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWQAQDDB=IGHPJFCAFCKCBCOIHPLECOJD; secure; path=/, TS010fd228=0139005254f2330afcbbd7536c2b3db065cc862662715661eb31090715f90d6c2fe4124ee3df2ec97868cb10974da0972d13eee2759541d893c4de24bcb34f50388f3eeddf; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:16:30 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (235 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 14 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 64. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:17:00 GMT
Location: /mblSrv20/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWQBQBBA=ILAPDHDABJMDIPPJADLANFCI; secure; path=/, TS010fd228=013900525438a10d86950b4683166791b62595e18c4d4fbcbba28cdfd91a9552c50c01bf1b4bcec826959953e3bf730da505084d470e7b378aadd5fdf06e40cea38417279b; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:00 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv20/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 65. GET `egocptsrvand.ego.gov.tr/mblSrv20/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:17:00 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSETRRDAB=LDIFCDCAPEICLPAHOGNGEPMP; secure; path=/, TS010fd228=01390052548777501e6676e6a43295f80b8743520e458442fde2f7038864e36d225ba94413f63d7ec3780fc472dfb714694070c55802bdc548e52a8637f4d8cc9cad76bf83; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:01 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (235 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 13 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 66. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:17:30 GMT
Location: /mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWQBQBBA=DEEPDHDAKDEMBILLNFNCKNKH; secure; path=/, TS010fd228=0139005254f97b5efdc50cdabcad7f7addb976abad73e13075be74dcbc54f07c3746266b39c1526aff002d17e76a772c1b0d1d69d6ffa5eb68d8be8a1fe688117c31acdef2; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:30 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv5/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=10560&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 67. GET `egocptsrvand.ego.gov.tr/mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=10560&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:17:30 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCUTBRDDB=NHAANECAHACFDEABCNCBPJCD; secure; path=/, TS010fd228=013900525413c394a95a6d0b541421a82dc9bda28b4c88e46f04697998fd368d3aee1817203c9ac0fb94e2dee61606cb285643238663d9e45a86aeaa54bdb69eef5473dcac; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:30 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (235 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:30 / 13 dk Sonra","detay":"","hat_kod":"174","hat_no":"174","hat_kisa_kod":"174","hat_ad":"BEYTEPE METRO-BEYSUKENT ANGORA EVLERİ"}],"message":"","status":"TRUE"}
```

---

### 68. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=HatBilgileri&YOL=TRUE&KOD=101&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:17:40 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWQBQBBA=NHFPDHDAIKNIMDECMMDFADEM; secure; path=/, TS010fd228=0139005254e934595993e6d639acc728ac7ad474a341eae72e2d53cfdb519b1062734d9a05732bba9303cb3cabe94a424ea83acbc2fd5c138bc9fb1c137a67220290518499; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:40 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (32293 byte):

```json
{"table":[{"id":"1","tur":"EGO, OTOBÜS","kod":"101","ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER","sure":"73","mesafe":"43","detay":""}],"table_durak":[{"id":"1","sira":"1","kod":"14043","ad":"GÖLBAŞI HAREKET NOKTASI","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.768373","lng":"32.815506","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"2","sira":"2","kod":"14687","ad":"YUNUS EMRE CAMİİ","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.76995","lng":"32.815839","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"3","sira":"3","kod":"14044","ad":"KIR ÇİÇEĞİ EVLERİ","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.772569","lng":"32.816852","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"4","sira":"4","kod":"14194","ad":"35.CD.","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.774423","lng":"32.817443","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"5","sira":"5","kod":"13805","ad":"MİLLİ İRADE ÖĞRENCİ YURDU","konum":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı","lat":"39.777385","lng":"32.816619","detay":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı"},{"id":"6","sira":"6","kod":"13806","ad":"GÖLBAŞI ŞEHİT ÖZEL HAREKATÇILAR ÖĞRENCİ YURDU","konum":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı","lat":"39.779325","lng":"32.815203","detay":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı"},{"id":"7","sira":"7","kod":"13185","ad":"ANKARA ÜNİVERSİTESİ TEKNOKENT","konum":"Bahçelievler Mh.Mh.319.Sk.Gölbaşı","lat":"39.782763","lng":"32.814141","detay":"Bahçelievler Mh.Mh.319.Sk.Gölbaşı"},{"id":"8","sira":"8","kod":"12579","ad":"ÖĞRENCİ YURTLARI","konum":"Bahçelievler Mh.319.Sk.Gölbaşı","lat":"39.783407","lng":"32.81119","detay":"Bahçelievler Mh.319.Sk.Gölbaşı"},{"id":"9","sira":"9","kod":"12514","ad":"CUMHURİYET PARKI","konum":"Bahçelievler Mh.319.Sk.Gölbaşı","lat":"39.784849","lng":"32.807505","detay":"Bahçelievler Mh.319.Sk.Gölbaşı"},{"id":"10","sira":"10","kod":"11323","ad":"GÖLBAŞI BELEDİYESİ","konum":"Gaziosmanpaşa Mh.Sahil Cd.Gölbaşı","lat":"39.789364","lng":"32.804168","detay":"Gaziosmanpaşa Mh.Sahil Cd.Gölbaşı"},{"id":"11","sira":"11","kod":"11260","ad":"JANDARMA","konum":"Gaziosmanpaşa Mh.Şht.Ali Gaffar Okan Cd.Gölbaşı","lat":"39.792239","lng":"32.803136","detay":"Gaziosmanpaşa Mh.Şht.Ali Gaffar Okan Cd.Gölbaşı"},{"id":"12","sira":"12","kod":"11258","ad":"BALDUDAK İLKOKULU","konum":"Karşıyaka Mh.İlkokul Sk.Gölbaşı","lat":"39.796053","lng":"32.800156","detay":"Karşıyaka Mh.İlkokul Sk.Gölbaşı"},{"id":"13","sira":"13","kod":"11171","ad":"CEMRE PARKI","konum":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı","lat":"39.795616","lng":"32.796408","detay":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı"},{"id":"14","sira":"14","kod":"11170","ad":"774 SK.","konum":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı","lat":"39.793492","lng":"32.794152","detay":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı"},{"id":"15","sira":"15","kod":"11178","ad":"GÜZEL YALI EVLERİ","konum":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı","lat":"39.790776","lng":"32.792745","detay":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı"},{"id":"16","sira":"16","kod":"11180","ad":"GÖLKONAKLARI","konum":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı","lat":"39.786357","lng":"32.790068","detay":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı"},{"id":"17","sira":"17","kod":"11182","ad":"MOGAN PARK","konum":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı","lat":"39.78191","lng":"32.785785","detay":"Karşıyaka Mh.Haymana Yolu Blv.Gölbaşı"},{"id":"18","sira":"18","kod":"11183","ad":"PATALYA HOTEL","konum":"Karşıyaka Mh.612 Cd.Gölbaşı","lat":"39.779744","lng":"32.780584","detay":"Karşıyaka Mh.612 Cd.Gölbaşı"},{"id":"19","sira":"19","kod":"14365","ad":"607.CD.","konum":"Karşıyaka Mh.612.Cd.Gölbaşı","lat":"39.783396","lng":"32.777586","detay":"Karşıyaka Mh.612.Cd.Gölbaşı"},{"id":"20","sira":"20","kod":"11174","ad":"GÜNEY SİTESİ","konum":"Karşıyaka Mh.Yıldırım Cd.Gölbaşı","lat":"39.784938","lng":"32.775023","detay":"Karşıyaka Mh.Yıldırım Cd.Gölbaşı"},{"id":"21","sira":"21","kod":"10268","ad":"YILDIRIM CD.","konum":"-","lat":"39.782646","lng":"32.77262","detay":"-"},{"id":"22","sira":"22","kod":"11187","ad":"KARÇİÇEĞİ SİTESİ","konum":"Karşıyaka Mh.Mh.601.Sk.Gölbaşı","lat":"39.778637","lng":"32.770353","detay":"Karşıyaka Mh.Mh.601.Sk.Gölbaşı"},{"id":"23","sira":"23","kod":"11169","ad":"ŞİRİNGÖLKÖY SİTESİ","konum":"Karşıyaka Mh.Söğüt Sk.Gölbaşı","lat":"39.781387","lng":"32.767634","detay":"Karşıyaka Mh.Söğüt Sk.Gölbaşı"},{"id":"24","sira":"24","kod":"11168","ad":"NESİBE AYDIN OKULLARI","konum":"Karşıyaka Mh.Söğüt Sk.Gölbaşı","lat":"39.780732","lng":"32.765217","detay":"Karşıyaka Mh.Söğüt Sk.Gölbaşı"},{"id":"25","sira":"25","kod":"10401","ad":"VİLLA KUR SİTESİ","konum":"Karşıyaka Mh.492.Cd.Gölbaşı","lat":"39.777915","lng":"32.757811","detay":"Karşıyaka Mh.492.Cd.Gölbaşı"},{"id":"26","sira":"26","kod":"13951","ad":"492.CD.","konum":"Karşıyaka Mh.492.Cd.Gölbaşı","lat":"39.775716","lng":"32.751247","detay":"Karşıyaka Mh.492.Cd.Gölbaşı"},{"id":"27","sira":"27","kod":"12727","ad":"FİZİKÇİLER SİTESİ","konum":"Karşıyaka Mh.Mh.547.Sk.Gölbaşı","lat":"39.77499","lng":"32.748063","detay":"Karşıyaka Mh.Mh.547.Sk.Gölbaşı"},{"id":"28","sira":"28","kod":"12707","ad":"ÇEVİKER KONAKLARI","konum":"Karşıyaka Mh.Mh.492.Cd.Gölbaşı","lat":"39.774423","lng":"32.745757","detay":"Karşıyaka Mh.Mh.492.Cd.Gölbaşı"},{"id":"29","sira":"29","kod":"11167","ad":"ESKİDOSTLAR SİTESİ","konum":"Karşıyaka Mh.538.Sk.Gölbaşı","lat":"39.776778","lng":"32.757664","detay":"Karşıyaka Mh.538.Sk.Gölbaşı"},{"id":"30","sira":"30","kod":"10550","ad":"YEŞİL SİTE","konum":"Karşıyaka Mh.538.Sk.Gölbaşı","lat":"39.774819","lng":"32.762255","detay":"Karşıyaka Mh.538.Sk.Gölbaşı"},{"id":"31","sira":"31","kod":"11879","ad":"CEMİL ÖZGÜR VİLLALARI","konum":"Karşıyaka Mh.538.Sk.Gölbaşı","lat":"39.774047","lng":"32.764691","detay":"Karşıyaka Mh.538.Sk.Gölbaşı"},{"id":"32","sira":"32","kod":"10297","ad":"ENDA KONUTLARI","konum":"Karşıyaka Mh.538.Cd.Gölbaşı","lat":"39.773977","lng":"32.76873","detay":"Karşıyaka Mh.538.Cd.Gölbaşı"},{"id":"33","sira":"33","kod":"11871","ad":"ÇEVRE VE ORMAN BAKANLIĞI LABARATUVARI","konum":"Karşıyaka Mh.G
... [TRUNCATED, toplam 31283 karakter]
```

---

### 69. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobus&DURAK=14043&HAT=101&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:17:44 GMT
Location: /mblSrv20/service.asp?&LAN=tr&FNC=Otobus&DURAK=14043&HAT=101&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDCWRCQDBA=LADPDHDAMAOIDJHKMEMHJFPI; secure; path=/, TS010fd228=01390052545254da07e0654dd8ae31e462f8544383381d4924beb7aa9ba9828f1d52e96381bf361f012ce0f9da82f66d22b3fae92c4770eadb29155358c29ff56240f2740e; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:44 GMT
Content-Length: 292
```

**Yanıt Gövdesi** (292 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv20/service.asp?&amp;LAN=tr&amp;FNC=Otobus&amp;DURAK=14043&amp;HAT=101&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 70. GET `egocptsrvand.ego.gov.tr/mblSrv20/service.asp?&LAN=tr&FNC=Otobus&DURAK=14043&HAT=101&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:17:44 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDAUTDRADA=EGDNHFCAKHCFLKKLGBCJNJJA; secure; path=/, TS010fd228=01390052549f291f631e5be953b04d1e99655e84e6172ef687e3eb33a36a7f35aeefb9e8c14efde0b20969bc2cd0de6c978eeffeef5e15bd4adf6595211e2f8b295809f997; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:17:44 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (841 byte):

```json
{"table":[{"arac_no":"-","hat_ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER","hat_no":"101","sure":"Sonraki Hareket Saati İlk Duraktan\n18:00 / 43 dk Sonra","detay":""},{"arac_no":"08-122","plaka_no":"06 BM 3972","lat":"39.780315","lng":"32.769821","hiz":"40 km","durak_no":"11169","onceki_durak_no":"10268","hat_no":"101","konum_tarihi":"09.08.2026 17:17:32","durak_sira_no":"23","aci":"131","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli‚ Bisiklet Aparatı","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":1.0,"avgDelayText":"1","reason":"abnormal_slowdown","lastSeenUtc":"2026-08-09T14:15:53.803Z"},"saniye":"999999","sure":"Geçti","secili_durak_no":"14043","secili_durak_sira_no":"1","yon":"3","durum":"gecti","konum":"-","hat_ad":"GÖLBAŞI-HAYMANA YOLU-BAHÇELİEVLER"}],"message":"","status":"TRUE"}
```

---

### 71. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=YakinDuraklar&MSF=500&LAT=39.8841067&LNG=32.9383026&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:18:08 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWRCQDBA=JOFPDHDAKMHHDAPACEBLJICH; secure; path=/, TS010fd228=01390052545829bf55695e117d5f930066e5899792a74a2e67eaac691edace3be1d5e5beca3693ab9bc5f80c6cfcee05dc2b01bce4608b26310fe00836a1de477a4383ace5; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:18:08 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (1902 byte):

```json
{"table":[{"id":"5267","kod":"30353","ad":"VADİ MANZARA EVLERİ","konum":"Akşemsettin Mh.Sultan Fatih Cd.Mamak","lat":"39.884156","lng":"32.93998","detay":"143 m","hatlar":"351, 364, 387"},{"id":"5266","kod":"30352","ad":"VADİ MANZARA EVLERİ","konum":"Akşemsettin Mh.Sultan Fatih Cd.Mamak","lat":"39.884327","lng":"32.940259","detay":"169 m","hatlar":"351, 364, 387"},{"id":"5260","kod":"30346","ad":"NATA VEGA 1.DURAK","konum":"Akşemsettin Mh.Doğukent Cd.Mamak","lat":"39.884633","lng":"32.934567","detay":"324 m","hatlar":"301, 330, 338, 339-5, 340, 341, 353"},{"id":"5247","kod":"30333","ad":"GREEN LİFE SİTESİ 2","konum":"Akşemsettin Mh.Sultan Fatih Cd.Mamak","lat":"39.881846","lng":"32.94071","detay":"325 m","hatlar":"351, 364, 387"},{"id":"6485","kod":"31703","ad":"NATA VEGA","konum":"Akşemsettin Mh.Mh.Anatolium Mamak","lat":"39.885168","lng":"32.934558","detay":"341 m","hatlar":"301, 338, 339-7, 340, 340-2, 341, 346, 364"},{"id":"5218","kod":"30304","ad":"GREEN LİFE SİTESİ 2","konum":"Akşemsettin Mh.Sultan Fatih Cd.Mamak","lat":"39.881929","lng":"32.941119","detay":"341 m","hatlar":"351, 364, 387"},{"id":"5241","kod":"30327","ad":"NATA VEGA","konum":"Akşemsettin Mh. Mamak","lat":"39.884655","lng":"32.933796","detay":"389 m","hatlar":"339, 353, 358, 387, 731"},{"id":"5294","kod":"30380","ad":"2307.CD.","konum":"Akşemsettin Mh.Natoyolu Cd.Mamak","lat":"39.880943","lng":"32.935955","detay":"405 m","hatlar":"334, 334-6, 336, 336-1, 344"},{"id":"6451","kod":"31646","ad":"NATA VEGA","konum":"Akşemsettin Mh.Anatolium Mamak","lat":"39.884721","lng":"32.933555","detay":"411 m","hatlar":"301, 330, 338, 339, 339-5, 339-7, 340, 341, 346, 353, 358, 364, 387"},{"id":"5268","kod":"30354","ad":"2307.CD.","konum":"Akşemsettin Mh.Natoyolu Cd.Mamak","lat":"39.879903","lng":"32.937179","detay":"477 m","hatlar":"334, 334-6, 336, 336-1, 344"}],"message":"","status":"TRUE"}
```

---

### 72. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecenHatlar&KOD=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:18:12 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDAWQAQDAB=LHPMEHDABEDABLBBFHEBFFJO; secure; path=/, TS010fd228=0139005254a571009246878da11c5c184d19f24b8c25f02d5f6ad051a79ed9b0c8960011317cda284f3f026e648020c875bcac7a8579a578969cd1fdb28bd19e6fb0adf2c0; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:18:13 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (610 byte):

```json
{"table":[{"id":"279","tur":"EGO, OTOBÜS","kod":"351","ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS","sure":"120","mesafe":"47","detay":"SÃ¼resi 120 dk, Hat UzunluÄŸu 47 km"},{"id":"296","tur":"EGO, OTOBÜS","kod":"364","ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ","sure":"80","mesafe":"41","detay":"SÃ¼resi 80 dk, Hat UzunluÄŸu 41 km"},{"id":"315","tur":"EGO, OTOBÜS","kod":"387","ad":"EGO 3.BÖLGE-NATOYOLU-SULTAN FATİH CD.","sure":"25","mesafe":"39","detay":"SÃ¼resi 25 dk, Hat UzunluÄŸu 39 km"}],"message":"","status":"TRUE"}
```

---

### 73. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:18:12 GMT
Location: /mblSrv7/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDQEQTTCDB=CDJPBGDAPHOGNICNKFGIKLJH; secure; path=/, TS010fd228=01390052545a03816f46777f2b6e299525ac653124793a7cbaa022ec58f5cf7a801433427f5a647ffa2af7eb26e61fab76e469395be28f6224e98b90844257905a78494641; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:18:13 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv7/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=30353&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 74. GET `egocptsrvand.ego.gov.tr/mblSrv7/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:18:12 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDQEQRTABA=DNPKKICAHHFKMJLEPMMOHCKN; secure; path=/, TS010fd228=013900525467e0d80fbfff7c9164d7c0f69f58e9d0e58fe1bf4a0acab40e3e285c8ee1ede442578f01e0013b8bead1ccb49e4826fad3234abdd8c45d8814fc9ad594eb1bd7; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:18:13 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (1669 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:40 / 22 dk Sonra","detay":"","hat_kod":"351","hat_no":"351","hat_kisa_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"09-315","plaka_no":"06 BT 3791","lat":"39.910427","lng":"32.932602","hiz":"7 km","durak_no":"31821","onceki_durak_no":"30375","hat_no":"351","konum_tarihi":"09.08.2026 17:18:04","durak_sira_no":"76","aci":"180","doluluk":{},"detay":"Solo‚ Engelli","trafik":{},"saniye":"963","sure":"16 dk","secili_durak_no":"30353","secili_durak_sira_no":"93","yon":"4","durum":"","konum":"-","hat_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n18:20 / 1 sa 2 dk Sonra","detay":"","hat_kod":"364","hat_no":"364","hat_kisa_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"},{"arac_no":"07-365","plaka_no":"06 BE 8019","lat":"39.900639","lng":"32.911621","hiz":"30 km","durak_no":"30316","onceki_durak_no":"30258","hat_no":"364","konum_tarihi":"09.08.2026 17:18:01","durak_sira_no":"67","aci":"240","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.3,"avgDelayText":"0.3","reason":"multi_route_abnormal_slowdown","lastSeenUtc":"2026-08-09T14:17:42.25Z"},"saniye":"612","sure":"10 dk","secili_durak_no":"30353","secili_durak_sira_no":"78","yon":"5","durum":"","konum":"-","hat_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"}],"message":"","status":"TRUE"}
```

---

### 75. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:18:42 GMT
Location: /mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDQEQTTCDB=DKMPBGDAAFCHOJKHFGNEPJCN; secure; path=/, TS010fd228=0139005254188cf12b156c537a7ee23cb46fae7b7274d84d6c81e38d5339cb1dc83e5f00f49c41e5c72260ad17cf764354bf6940d66b34d7c8ffd81f2b98ac573d99ab0186; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:18:43 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv5/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=30353&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 76. GET `egocptsrvand.ego.gov.tr/mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:18:42 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGTRSABD=OEOAHICAAPFKLJDHPCKLGBOH; secure; path=/, TS010fd228=0139005254376f507fe32babdb653955391861e694a547206159692e62b1ffedd83bd509a0807538caaeeeeb511605c90c5e0fc17ee09412395fd008a348985a0d11ad7f3a; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:18:43 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (1845 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:40 / 22 dk Sonra","detay":"","hat_kod":"351","hat_no":"351","hat_kisa_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"09-315","plaka_no":"06 BT 3791","lat":"39.909401","lng":"32.933109","hiz":"38 km","durak_no":"31821","onceki_durak_no":"30375","hat_no":"351","konum_tarihi":"09.08.2026 17:18:36","durak_sira_no":"76","aci":"158","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.2,"avgDelayText":"0.2","reason":"possible_incident","lastSeenUtc":"2026-08-09T14:17:55.243Z"},"saniye":"939","sure":"16 dk","secili_durak_no":"30353","secili_durak_sira_no":"93","yon":"4","durum":"","konum":"-","hat_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n18:20 / 1 sa 2 dk Sonra","detay":"","hat_kod":"364","hat_no":"364","hat_kisa_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"},{"arac_no":"07-365","plaka_no":"06 BE 8019","lat":"39.900024","lng":"32.910339","hiz":"30 km","durak_no":"30314","onceki_durak_no":"30316","hat_no":"364","konum_tarihi":"09.08.2026 17:18:30","durak_sira_no":"68","aci":"231","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.3,"avgDelayText":"0.3","reason":"multi_route_abnormal_slowdown","lastSeenUtc":"2026-08-09T14:17:42.25Z"},"saniye":"593","sure":"10 dk","secili_durak_no":"30353","secili_durak_sira_no":"78","yon":"5","durum":"","konum":"-","hat_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"}],"message":"","status":"TRUE"}
```

---

### 77. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:19:14 GMT
Location: /mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDQEQTTCDB=NBAACGDALLEECEIFFKJOJMAK; secure; path=/, TS010fd228=0139005254d875bf39c8b72d84f4be14719876a9db05ddab8d3ebd07794e26b3ad32d245735b248ede61648b1a7e0a81b2be7e41da590939c9023c51808e1960d0c4b3cad8; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:19:13 GMT
Content-Length: 282
```

**Yanıt Gövdesi** (282 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv5/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=30353&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 78. GET `egocptsrvand.ego.gov.tr/mblSrv5/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:19:14 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGTRSABD=AHOAHICALABDODOAAJJHELGK; secure; path=/, TS010fd228=0139005254d0c12b35c6e0694e4a1c023c73433d45b6574f85abf47693f8e764e054965ca5de4ccb47c8757eaa67fb42b565c60408a9cc99621829c60513217fdc241f2062; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:19:13 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (1842 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:40 / 21 dk Sonra","detay":"","hat_kod":"351","hat_no":"351","hat_kisa_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"09-315","plaka_no":"06 BT 3791","lat":"39.907963","lng":"32.93362","hiz":"0 km","durak_no":"30363","onceki_durak_no":"31821","hat_no":"351","konum_tarihi":"09.08.2026 17:18:58","durak_sira_no":"77","aci":"159","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.2,"avgDelayText":"0.2","reason":"possible_incident","lastSeenUtc":"2026-08-09T14:18:50.423Z"},"saniye":"908","sure":"15 dk","secili_durak_no":"30353","secili_durak_sira_no":"93","yon":"4","durum":"","konum":"-","hat_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n18:20 / 1 sa 1 dk Sonra","detay":"","hat_kod":"364","hat_no":"364","hat_kisa_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"},{"arac_no":"07-365","plaka_no":"06 BE 8019","lat":"39.898014","lng":"32.908432","hiz":"19 km","durak_no":"30314","onceki_durak_no":"30316","hat_no":"364","konum_tarihi":"09.08.2026 17:19:01","durak_sira_no":"68","aci":"218","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.3,"avgDelayText":"0.3","reason":"multi_route_abnormal_slowdown","lastSeenUtc":"2026-08-09T14:18:56.94Z"},"saniye":"565","sure":"9 dk","secili_durak_no":"30353","secili_durak_sira_no":"78","yon":"5","durum":"","konum":"-","hat_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"}],"message":"","status":"TRUE"}
```

---

### 79. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:19:44 GMT
Location: /mblSrv17/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDQEQTTCDB=GJDACGDAIEBJANBEBAMJJECK; secure; path=/, TS010fd228=0139005254b8765e45b28034fbd1aefff63fa2f15a86d1acf62c593dd388a463a09fda844d000a3e30b885c9b00dc9332107e7b094c2344ab3a8d459c0aede99a825a103f3; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:19:43 GMT
Content-Length: 283
```

**Yanıt Gövdesi** (283 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv17/service.asp?&amp;LAN=tr&amp;FNC=Otobusler&amp;DURAK=30353&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 80. GET `egocptsrvand.ego.gov.tr/mblSrv17/service.asp?&LAN=tr&FNC=Otobusler&DURAK=30353&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:19:44 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSERTSDBB=PGKLMCCALOPJFCHPODGGKJEC; secure; path=/, TS010fd228=013900525440e0c7094c11cf1e5680ab55f541b703f34dfa59b93c04006d06d900971aae8a720be94bfa74f2d8df29318172864f8f9cafcbf56a9e70a660f2fd2d999b7e15; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:19:43 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (1844 byte):

```json
{"table":[{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n17:40 / 21 dk Sonra","detay":"","hat_kod":"351","hat_no":"351","hat_kisa_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"09-315","plaka_no":"06 BT 3791","lat":"39.907387","lng":"32.933941","hiz":"12 km","durak_no":"30363","onceki_durak_no":"31821","hat_no":"351","konum_tarihi":"09.08.2026 17:19:28","durak_sira_no":"77","aci":"147","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.2,"avgDelayText":"0.2","reason":"possible_incident","lastSeenUtc":"2026-08-09T14:18:50.423Z"},"saniye":"891","sure":"15 dk","secili_durak_no":"30353","secili_durak_sira_no":"93","yon":"3","durum":"","konum":"-","hat_kod":"351","hat_ad":"AKŞEMSETTİN-SU DEPOSU-MAMAK-15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI-SIHHİYE-ULUS"},{"arac_no":"-","sure":"Sonraki Hareket Saati İlk Duraktan\n18:20 / 1 sa 1 dk Sonra","detay":"","hat_kod":"364","hat_no":"364","hat_kisa_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"},{"arac_no":"07-365","plaka_no":"06 BE 8019","lat":"39.896587","lng":"32.909634","hiz":"29 km","durak_no":"30312","onceki_durak_no":"30314","hat_no":"364","konum_tarihi":"09.08.2026 17:19:31","durak_sira_no":"69","aci":"100","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Aksama","trafficLevel":"cok_yogun","avgDelayMinutes":0.2,"avgDelayText":"0.2","reason":"multi_route_abnormal_slowdown","lastSeenUtc":"2026-08-09T14:18:56.94Z"},"saniye":"536","sure":"9 dk","secili_durak_no":"30353","secili_durak_sira_no":"78","yon":"2","durum":"","konum":"-","hat_kod":"364","hat_ad":"ZİRVEKENT-EGE MAHALLESİ-METEHAN-NATOYOLU CD.-DİKİMEVİ"}],"message":"","status":"TRUE"}
```

---

### 81. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=Duyurular&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:19:50 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDQEQTTCDB=AIEACGDALNNIPHIBHDILPMKN; secure; path=/, TS010fd228=01390052549b594e59c81ed77b331c458807f2b7c9127f78acc78656ae0778bd3dc33e8a2228a00c2741d6aa310d0eb4adcda842d84b06781c6ebd948b427efd5a5bdbe8bc; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:19:51 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (4306 byte):

```json
{"table":[{"id": "h6447","baslik": "YENİ GİŞELER VE KİŞİSELLEŞTİRME MERKEZLERİ.","tarih": "DUYURU 07.08.2026"},{"id": "7769","baslik": "224 KUZEY YILDIZI MAHALLESİ-YÜKSELTEPE-ETLİK ŞEHİR HASTANESİ BELİRTİLEN GÜZARGAHTA SAAT 06:30 VE 16:00 HAT TAHSİSİ YAPILMIŞTIR.","tarih": "DUYURU 30.07.2026"},{"id": "7768","baslik": "397 YEŞİLDERE-ANKARA.","tarih": "DUYURU 28.07.2026"},{"id": "7767","baslik": "NATOYOLU CADDESİ GENERAL ZEKİ DOĞAN İSTASYONU ÇALIŞMASINDAN DOLAYI EGO OTOBÜS GÜZERGAHLARI HAKKINDA.","tarih": "DUYURU 27.07.2026"},{"id": "7766","baslik": "NATOYOLU CADDESİ GENERAL ZEKİ DOĞAN İSTASYONU ÇALIŞMASINDAN DOLAYI EGO OTOBÜS GÜZERGAHLARI HAKKINDA.","tarih": "DUYURU 27.07.2026"},{"id": "h6446","baslik": "GENERAL ZEKİ DOĞAN İSTASYONU ÇALIŞMALARI HAKKINDA.","tarih": "DUYURU 26.07.2026"},{"id": "h6445","baslik": "GENERAL ZEKİ DOĞAN İSTASYONU ÇALIŞMALARI HAKKINDA.","tarih": "DUYURU 26.07.2026"},{"id": "h6443","baslik": "579 HATTI GÜZERGAH DÜZENLEMESİ.","tarih": "DUYURU 20.07.2026"},{"id": "h6442","baslik": "523, 533, 535, 536, 545, 561, 506-1, 506-2, VE 536-1 HATLARI GÜZERGAH DÜZENLEMESİ.","tarih": "DUYURU 20.07.2026"},{"id": "h6441","baslik": "TÜM OTOBÜSLERİMİZİN KLİMA VE HAVALANDIRMA SİSTEMLERİ AKTİF BİR ŞEKİLDE ÇALIŞMAKTADIR.","tarih": "DUYURU 17.07.2026"},{"id": "7765","baslik": "351NUMARALI HATINDA GÜZERGAH DEĞİŞİKLİĞİ.","tarih": "DUYURU 17.07.2026"},{"id": "7764","baslik": "242 DEMETEVLER METRO 25 MART MH.HATTI GÜZERGAHI YENİDEN DÜZENLENMİŞTİR.","tarih": "DUYURU 08.07.2026"},{"id": "7763","baslik": "242 DEMETEVLER METRO 25 MART MH.HATTI GÜZERGAHI YENİDEN DÜZENLENMİŞTİR.","tarih": "DUYURU 06.07.2026"},{"id": "h6439","baslik": "6-7-8-9 TEMMUZ TARİHLERİ ARASINDA ESENBOĞA HAVALİMANI İLE AŞTİ İSTİKAMETİNE ULAŞIM SAĞLAYACAK VATANDAŞLARIMIZIN DİKKATİNE.","tarih": "DUYURU 02.07.2026"},{"id": "7762","baslik": "338 EGE MAHALLESİ 846.CD.MAMAK DİKİMEVİ 15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI SIHHİYE ULUS HATTI GÜZERGAHI YENİDEN DÜZENLENMİŞTİR.","tarih": "DUYURU 01.07.2026"},{"id": "h6438","baslik": "36.NATO DEVLET VE HÜKÜMET BAŞKANLARI ZİRVESİ KAPSAMINDA ULAŞIM DÜZENLEMELERİ.","tarih": "DUYURU 01.07.2026"},{"id": "h6436","baslik": "36.NATO ZİRVESİ KAPSAMINDA ULAŞIM TEDBİRLERİNE İLİŞKİN;.","tarih": "DUYURU 26.06.2026"},{"id": "h6435","baslik": "TOPLU TAŞIMA HİZMETLERİNDE YAZLIK SERVİS PROGRAMINA GEÇİLECEKTİR.","tarih": "DUYURU 26.06.2026"},{"id": "h6433","baslik": "AKTİF GÖRME ENGELLİLER DERNEĞİ YÖNETİCİLERİNDEN EGO GENEL MÜDÜRLÜĞÜNE ZİYARET.","tarih": "DUYURU 24.06.2026"},{"id": "h6432","baslik": "BASIN AÇIKLAMASI.","tarih": "DUYURU 23.06.2026"},{"id": "7761","baslik": "330 ,336,340,341,346,..HATLARINDA GÜZEGAH DEĞİŞİKLİĞİ.","tarih": "DUYURU 23.06.2026"},{"id": "7760","baslik": "193 OPERA KIZILAY İNCEK TOKİ HATTI GÜZERGAHI YENİDEN DÜZENLENMİŞTİR.","tarih": "DUYURU 22.06.2026"},{"id": "h6430","baslik": "EGO, KURUMSAL KARBON AYAK İZİ RAPORUNU TAMAMLADI.","tarih": "DUYURU 18.06.2026"},{"id": "h6428","baslik": "EGO CEP’TE 5.0 KULLANIMA SUNULDU.","tarih": "DUYURU 13.06.2026"},{"id": "7759","baslik": "330, 336,337,340,.EGE MH.LOJMAN 15 TEMMUZ KIZILAY MİLLİ İRADE MEYDANI ABB BİNASI HATTI GÜZERGAHI YENİDEN DÜZENLENMİŞTİR.","tarih": "DUYURU 12.06.2026"},{"id": "h6427","baslik": "TOPLU ULAŞIM FİLOMUZU GÜÇLENDİRMEYİ SÜRDÜRÜYORUZ.","tarih": "DUYURU 12.06.2026"},{"id": "h6425","baslik": "EGO, ALTINPARK MOTOSİKLET FUARI’NDA ELEKTRİKLİ BİSİKLETLERİYLE YERİNİ ALDI.","tarih": "DUYURU 09.06.2026"},{"id": "h6423","baslik": "EGO’DA ACİL DURUM TATBİKATLARI GERÇEKLEŞTİRİLDİ.","tarih": "DUYURU 04.06.2026"},{"id": "h6422","baslik": "ISO DENETİMLERİ ÖNCESİNDE FARKINDALIK EĞİTİMLERİ TAMAMLANDI.","tarih": "DUYURU 04.06.2026"},{"id": "h6421","baslik": "KURBAN BAYRAMI SÜRESİNCE EGO OTOBÜS, ANKARAY VE METRO ÜCRETSİZ.","tarih": "DUYURU 22.05.2026"},{"id": "h6417","baslik": "19 MAYIS ATATÜRK’Ü ANMA, GENÇLİK VE SPOR BAYRAMINDA TOPLU TAŞIMA ÜCRETSİZ.","tarih": "DUYURU 18.05.2026"},{"id": "h6416","baslik": "EGO’DA 3 BİN 142 ŞOFÖR PERSONELE HİZMET İÇİ EĞİTİM DESTEĞİ.","tarih": "DUYURU 12.05.2026"}],"message":"","status":"TRUE"}
```

---

### 82. POST `clientservices.googleapis.com/uma/v2`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
Host: clientservices.googleapis.com
Connection: keep-alive
Content-Length: 16560
X-Chrome-UMA-Log-SHA1: CkjAUbkb8L2LmLLnsl3e6pzilomSgQNf/bxH3J4twA9lr8TsXByNLXCSDGECDSae85aGPUClvaPZuSp2w84XDjDmu48AP9dnkhMQARogfaQedPcwW1IVsG8iuMXJ2pT+5Pq921CQo9+zOOggNh0gAQ==
X-Chrome-UMA-Log-HMAC-SHA256: CkyR4c8mEyxKsfBo3tKMUlODczTY80cGS2EJSh2N0Qyy0oTJvwmT+Tee8tVHNjG+Ss8e+s3qLo2iEVc8Px7RNglN3GnuaXY+KpKVIMLiEAEaIF8zZtJDml7plLmMYZsHJoPJKbDpSWN4WaW4L5MuLwUaIAE=
X-Chrome-UMA-ReportingInfo: CkTFx4sGy91hUsMJqNStRvOGtsVw3PXABrKeu5MkHMDTyEB6ScMC1+ggRJioXini//GS7RcwyO0zBndR5NyDmfdF6+GMthABGiBFfES1BWiHUpJymJ+O63PWQy59+k0JRyYnQYId5MRnISAB
Content-Type: application/vnd.chrome.uma
User-Agent: Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Mobile Safari/537.36
Accept-Encoding: gzip, deflate
```

**İstek Gövdesi:**

```

'²gi(eÉK\á¶QJ¦ÊáÊy7ð-=ùq ìÿ:nÇ|¹¾Í¾ä':A·Ùz¸Ý¦¡Fk09ãÖ {ôÐOeæ Wï§F0ÖiBA-ÙÃc$X{8JÂê
\ñ¼Óí :d;Å0R~W·pøXä¯¥Ii|e =¸o=ê m+hjK
0­½o§^ÖL²Z¬±mÉ}Ø\+_ù+ü/vh³ÄI/Uòn6|4ÌFE¹1Y:¥AÔÞr6åøÐkÜ&\UDÇR[ê	ÄÙâ ¾öÿÛç&<fQÂ·dwÐe2Ût@©ÆJÿë¸äýu¨Án|/¼÷¹åÿh»uÃÎ%3ð¨2vÏD¢@$í PÓiâôs3togeÍ!}>õg¢äVí§/NâÁ	©}£ChÍà£ñ¸ºbY´)E^ïêüe$ºÓ»#±?î½á 57/d§ï7$ÏSÊ¿Wüe(d½x%xm¶¦®ÒeÔ -×N°N	@¯ºo#ÝtìÚê/ØÐûun7ðõö®Áì±pQwtËÒ øÈèLÝð«A=iÃ-öÑNVºN¯¸ulCo`Ã+lü2âÌ¯ÞwRBõøtì+V&¥|2hy¢;aÆÂý÷ÁU£àl|rªÙEÈ^àf¢ô(×Ãðº¿Åá´³LÌBù¬kØ07TÁoøslì÷Ð¶¯} ¬è ÇÅpþê=Í°Îä
iitÚ¢áaÕJµáWbäÑ5P øsÊàs+É_qbÍ'Jpü§a"G¿WÔv ùfLÔíCóHRÆ§§.0îÿ½¦à	{Ä²(æp'Ö}'fÀ0ö×QsW_± 'DMÇ¿[Ò²ä:jÖ8ïbD
ø¸F?èv¢yPá
¢20¥
@%E'ïcuo Ä/5¿PÖ¹4øhWjÆ§Ýµ>Ùä-ÃJóÚK×I«!øÇ§¬xZÚf_ª{Á ÌµY¢¹:!iØù]A®lìÓÄ1ïaI%±| Å¼¨mYþ5Â¯×E
 Y+µ)(:ÿÆ<úTL¥ç~õx~àÆÆá«ÃÓ*®³?ÀüÁÇ¥*u,Þø1M_íÖÃOJÂ8Õû¢ºöú:ìñzÉ=4jÂO®ý$jÄlôMú²_}LTTV^~Àà­¸8<º@vOÐrõµÔÒÓËÙ,#k§(F[JV=³N0]×®ÚÖ¦Á!%#ÝfáÉY¾GÐ1)½EíÒh´À4Ò°<;ÞÈâõ¿ót<ÇOÌoÌ8QzMåó#pú:ïùâqÞIOý¢RjR¬³îaïË~Ä_Ð×ð%eÒwÒ.ÝIÛz-ªVkþ9=>eçtqøÇÿ=®ÛÉÖgßûKNÓ+BÿÍ£)£É«Í*LÚ øËêÙÕûÄAHT{ª3þEêÂÑ¨a"j`ÂBóáùAÇõ¸0ÐhåZõqzUG«räSØzG\&u«uõâÙ6òÕD<$½æÁ'%;õ<Ð¨ÇF×r®1¤ÞíKIU@þê2	&N/ã?[Ô®ÒScÄÀÅ¦Æ+ýnê§ª1czm	»`üô=;³8n?EÞEdzt·ÿÙôlW94o3`s4MçþKÁ« ù%"a9«°ì>\öélkZuûÂYäº8[ì{ì%6¥®äsD°ïÀÂ¸±÷$ïnæfØ-É¾Ü©ÐÿÙI{LâcCVYÔho2£i0½t¦p!GÊ`T3±Ö!a,¤/r)2FfËjÀåk´Î}!Ëô
bF-åË]ý9½e¾0¢nnÄ×G)ã9Ä3ìGMªìÕD£#/¬þ`ÃOöø4Í`½=©Ìv;ÁëïMihÇËÔw¾bèûpÎüºÃ±:«¯CØPÐ¦ZÿcìUíRgÂåÿ-rAÆCm¬S±\á%A(7ÆÓõ­ËåÐ+£;?²ú.W)}Õí¨E#îwÎØÂõ ú Êíts³½­
W¿æÓ%ú?99ðþ«C§ºÆ`WsÓ`ÏóñOÖ	Â¨Afk~ÓÓË$IñrÞ»ë!s3ÝÉ¢Z +=cÀò_B¾tLSä^u
Eï¤Æÿúc/ÔßÉìØu:®x KÝõ?Ê5ÖÄÈØ[IÏOÎRÐÈ_óªmÖÔ£q£Èô¯0ßYe @øªKû¼¤mÂ:ØJÇ¸*JhÒzÝ±tÔ6à!$rMcL9²ºexò$»r>¹T2 ²²S Ö<~¾Ì£©Í
... [TRUNCATED, toplam 16560 karakter]
```

**Yanıt Header'ları:**

```
Content-Type: text/plain; charset=UTF-8
Content-Security-Policy-Report-Only: script-src 'none'; form-action 'none'; frame-src 'none'; report-uri https://csp.withgoogle.com/csp/scaffolding/asuacrsguc:50:0
Cross-Origin-Opener-Policy-Report-Only: same-origin; report-to=asuacrsguc:50:0
Report-To: {"group":"asuacrsguc:50:0","max_age":2592000,"endpoints":[{"url":"https://csp.withgoogle.com/csp/report-to/scaffolding/asuacrsguc:50:0"}],}
Content-Encoding: gzip
Date: Sun, 09 Aug 2026 14:20:02 GMT
Server: scaffolding on HTTPServer2
Content-Length: 22
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN
```

**Yanıt Gövdesi** (2 byte):

```json
OK
```

---

### 83. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=HatBilgileri&YOL=TRUE&KOD=110&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:20:16 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWQBQBBA=PHHAEHDALGIIIKAMPKHAGMFO; secure; path=/, TS010fd228=0139005254fef890a3442f744887eeed86df5f2f83938ef0852d5854716c030beebaee068dd5f64dcc93a9884f1a1a72458002afb021a7dc4c18b2034517a2ac277547d9a3; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:20:17 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (29496 byte):

```json
{"table":[{"id":"16","tur":"EGO, OTOBÜS","kod":"110","ad":"BİLKENT METRO İSTASYONU-BİLKENT-BEYTEPE MAHALLESİ","sure":"48","mesafe":"33","detay":""}],"table_durak":[{"id":"1016","sira":"1","kod":"12908","ad":"BİLKENT METRO İSTASYONU","konum":"Üniversiteler Mh.Mh.Beytepe Köyü Yolu Çankaya","lat":"39.906004","lng":"32.764297","detay":"Üniversiteler Mh.Mh.Beytepe Köyü Yolu Çankaya"},{"id":"1017","sira":"2","kod":"10724","ad":"ASKERİYE LOJMANLARI","konum":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya","lat":"39.898897","lng":"32.764774","detay":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya"},{"id":"1018","sira":"3","kod":"10722","ad":"TSK ÖZEL BAKIM GİRİŞİ","konum":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya","lat":"39.896509","lng":"32.763462","detay":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya"},{"id":"1019","sira":"4","kod":"10623","ad":"ŞEFİK ERENSÜ KIŞLASI","konum":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya","lat":"39.894241","lng":"32.761513","detay":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya"},{"id":"1020","sira":"5","kod":"10717","ad":"19 EYLÜL SPOR TESİSİ","konum":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya","lat":"39.889736","lng":"32.756149","detay":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya"},{"id":"1021","sira":"6","kod":"12518","ad":"REHABİLİTASYON MERKEZİ","konum":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya","lat":"39.892537","lng":"32.754026","detay":"Üniversiteler Mh.Beytepe Köyü Yolu Çankaya"},{"id":"1022","sira":"7","kod":"13963","ad":"BİLKENT CENTER","konum":"Üniversiteler Mh. Çankaya","lat":"39.884921","lng":"32.755697","detay":"Üniversiteler Mh. Çankaya"},{"id":"1023","sira":"8","kod":"13135","ad":"TÜRKİYE EMLAK BANKASI ORTAOKULU","konum":"Üniversiteler Mh.Mh.Flamingo Cd.Çankaya","lat":"39.883879","lng":"32.75244","detay":"Üniversiteler Mh.Mh.Flamingo Cd.Çankaya"},{"id":"1024","sira":"9","kod":"10668","ad":"ÇAMLIK SİTESİ","konum":"Üniversiteler Mh.Bilkent-1 Çamlık Sitesi Çankaya","lat":"39.882122","lng":"32.751167","detay":"Üniversiteler Mh.Bilkent-1 Çamlık Sitesi Çankaya"},{"id":"1025","sira":"10","kod":"10672","ad":"BİLKENT CENTER","konum":"Üniversiteler Mh.1597.Cd.Çankaya","lat":"39.884743","lng":"32.756342","detay":"Üniversiteler Mh.1597.Cd.Çankaya"},{"id":"1026","sira":"11","kod":"10674","ad":"DOĞRAMACIZADE ALİ SAMİ PAŞA CAMİİ","konum":"Üniversiteler Mh.1597.Cd.Çankaya","lat":"39.88464","lng":"32.760224","detay":"Üniversiteler Mh.1597.Cd.Çankaya"},{"id":"1027","sira":"12","kod":"10676","ad":"BİLKENT 2.ETAP","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.88306","lng":"32.761735","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1028","sira":"13","kod":"10687","ad":"ÖSYM","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.879752","lng":"32.76356","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1029","sira":"14","kod":"10678","ad":"YÖK","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.876661","lng":"32.763508","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1030","sira":"15","kod":"10635","ad":"BİLKENT OTEL VE KONFERANS MERKEZİ","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.874747","lng":"32.764015","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1031","sira":"16","kod":"10645","ad":"DOĞU KAMPÜSÜ","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.868698","lng":"32.765326","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1032","sira":"17","kod":"10640","ad":"BİLKENT LOJMANLARI","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.86562","lng":"32.7658","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1033","sira":"18","kod":"10641","ad":"ŞAFAK SİTESİ","konum":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya","lat":"39.861374","lng":"32.762509","detay":"Üniversiteler Mh.İhsan Doğramacı Blv.Çankaya"},{"id":"1034","sira":"19","kod":"10653","ad":"UFUK SİTESİ","konum":"Beytepe Mh.11.Cd.Çankaya","lat":"39.859454","lng":"32.757842","detay":"Beytepe Mh.11.Cd.Çankaya"},{"id":"1035","sira":"20","kod":"10654","ad":"1614.SK.","konum":"Beytepe Mh.1691.Sk.Çankaya","lat":"39.85784","lng":"32.752685","detay":"Beytepe Mh.1691.Sk.Çankaya"},{"id":"1036","sira":"21","kod":"10728","ad":"F BLOKLARI","konum":"Beytepe Mh.1920.Cd.Çankaya","lat":"39.855746","lng":"32.756443","detay":"Beytepe Mh.1920.Cd.Çankaya"},{"id":"1037","sira":"22","kod":"10732","ad":"F4 BLOK","konum":"Beytepe Mh.1920.Cd.Çankaya","lat":"39.855547","lng":"32.759863","detay":"Beytepe Mh.1920.Cd.Çankaya"},{"id":"1038","sira":"23","kod":"10729","ad":"F BLOKLARI","konum":"Beytepe Mh.1920.Cd.Çankaya","lat":"39.85588","lng":"32.756465","detay":"Beytepe Mh.1920.Cd.Çankaya"},{"id":"1039","sira":"24","kod":"12819","ad":"EKON KONUTLARI","konum":"Beytepe Mh.Mh.11.Cd.Çankaya","lat":"39.855498","lng":"32.755484","detay":"Beytepe Mh.Mh.11.Cd.Çankaya"},{"id":"1040","sira":"25","kod":"12816","ad":"CANERKENT VİLLALARI","konum":"Beytepe Mh.Mh.1812.Sk.Çankaya","lat":"39.855434","lng":"32.752764","detay":"Beytepe Mh.Mh.1812.Sk.Çankaya"},{"id":"1041","sira":"26","kod":"12721","ad":"BEYTEPE KÖYÜ","konum":"Beytepe Mh.Mh. Çankaya","lat":"39.858091","lng":"32.743963","detay":"Beytepe Mh.Mh. Çankaya"},{"id":"1042","sira":"27","kod":"10590","ad":"MİSAKİ MİLLİ İLKOKULU","konum":"Beytepe Mh.Şht.Jnd.Astğmn.Mustafa Tayyarcan Cd.Çankaya","lat":"39.858782","lng":"32.741056","detay":"Beytepe Mh.Şht.Jnd.Astğmn.Mustafa Tayyarcan Cd.Çankaya"},{"id":"1043","sira":"28","kod":"10588","ad":"BEYTEPE MERKEZ CAMİ","konum":"Beytepe Mh.Şht.Jnd.Astğmn.Mustafa Tayyarcan Cd.Çankaya","lat":"39.856269","lng":"32.740376","detay":"Beytepe Mh.Şht.Jnd.Astğmn.Mustafa Tayyarcan Cd.Çankaya"},{"id":"1044","sira":"29","kod":"10596","ad":"SADIK KALEMCİ CAMİ","konum":"Beytepe Mh.Beytepe-Alacaatlı Yolu Çankaya","lat":"39.854956","lng":"32.731968","detay":"Beytepe Mh.Beytepe-Alacaatlı Yolu Çankaya"},{"id":"1045","sira":"30","kod":"10586","ad":"BİLİM SİTESİ","konum":"Beytepe Mh.13.Sk.Çankaya","lat":"39.854457","lng"
... [TRUNCATED, toplam 28927 karakter]
```

---

### 84. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecenHatlar&KOD=10672&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:20:24 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGRTRDBC=NEMACGDAHOAMHKHKGHHAKFCH; secure; path=/, TS010fd228=0139005254057bf077ae530bf6619969e466431c160ea1a25502307bf3394c3ff81216ce71abd276e7c4a62cf83fae2ff92830dc5b19a2a289a4b6e58572d9952760ee4f2f; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:20:24 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (716 byte):

```json
{"table":[{"id":"16","tur":"EGO, OTOBÜS","kod":"110","ad":"BİLKENT METRO İSTASYONU-BİLKENT-BEYTEPE MAHALLESİ","sure":"48","mesafe":"33","detay":"SÃ¼resi 48 dk, Hat UzunluÄŸu 33 km"},{"id":"17","tur":"EGO, OTOBÜS","kod":"111","ad":"BİLKENT-BİLKENT METRO İSTASYONU","sure":"45","mesafe":"29","detay":"SÃ¼resi 45 dk, Hat UzunluÄŸu 29 km"},{"id":"88","tur":"EGO, OTOBÜS","kod":"175","ad":"BİLKENT METRO İSTASYONU-BEYTEPE MAH","sure":"95","mesafe":"45","detay":"SÃ¼resi 95 dk, Hat UzunluÄŸu 45 km"},{"id":"89","tur":"EGO, OTOBÜS","kod":"176","ad":"BİLKENT METRO-BİLKENT ÜNİVERSİTESİ","sure":"25","mesafe":"26","detay":"SÃ¼resi 25 dk, Hat UzunluÄŸu 26 km"}],"message":"","status":"TRUE"}
```

---

### 85. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecisSaatleri&HAT=110&TUR=PAZAR&DURAK=10668&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:20:28 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDCWRCQDBA=APFAEHDABHEIHOGKCJMDPFEK; secure; path=/, TS010fd228=0139005254ad5955f8eb3cd8fed9dc6b7bdd99e1412f413ca0653fe1c2c19e21b5ddee812915a9a57fc35296816d0f268c3276c766e979f31dedea5a862ac0d56fd452f653; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:20:28 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (112 byte):

```json
{"table":[{"tur":"PAZAR","saat":"22","dakika":"46","detay":""}],"message":"8/9/2026 5:20:28 PM","status":"TRUE"}
```

---

### 86. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecisSaatleri&HAT=110&TUR=CUMARTES%C4%B0&DURAK=10668&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:20:30 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDAWQAQDAB=ACPNEHDAPPIPLBLMIFABLMBD; secure; path=/, TS010fd228=013900525443787ce0116ec7be019bd972bcced32ac662bfab64e2bc86ab344d2bf82ab8446c954a3a0e345896a709bbb34352a2ec077ce6be6af90857b40721fff0a95d9c; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:20:30 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (117 byte):

```json
{"table":[{"tur":"CUMARTESİ","saat":"22","dakika":"46","detay":""}],"message":"8/9/2026 5:20:30 PM","status":"TRUE"}
```

---

### 87. GET `egocptsrvand.ego.gov.tr/hibrit/action.asp?FNC=DuraktanGecisSaatleri&HAT=110&TUR=HAFTA%20%C4%B0%C3%87%C4%B0&DURAK=10668&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:20:32 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSESSRDBB=JCEDBGDAJOOIENMIFIBPADOH; secure; path=/, TS010fd228=01390052541967a6a6c5c0561007232c7c4accce4e372bbed0fb97162775e5ecc3607e477d52f63135c4e907082c79471b9c0c9fe5e832e46f922ed37997a1ebf331ff543e; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:20:32 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (119 byte):

```json
{"table":[{"tur":"HAFTA İÇİ","saat":"22","dakika":"49","detay":""}],"message":"8/9/2026 5:20:32 PM","status":"TRUE"}
```

---

### 88. GET `egocptsrvand.ego.gov.tr/hibrit/act.asp?FNC=HatBilgileri&YOL=TRUE&KOD=114&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:20:54 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDSGRTRDBC=DKPACGDANCEKNDDLNBIDJOPJ; secure; path=/, TS010fd228=013900525428f55441abc97e7ef60d746fe851a4f5d577bf972dc84d88ce8d014245b4ec559b07acd856ed8f2409016406ca5ef0b322b6c37b42bae1a0800acec6b519f7c4; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:20:53 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (20118 byte):

```json
{"table":[{"id":"22","tur":"EGO, OTOBÜS","kod":"114","ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ","sure":"40","mesafe":"23","detay":""}],"table_durak":[{"id":"1220","sira":"1","kod":"14043","ad":"GÖLBAŞI HAREKET NOKTASI","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.768373","lng":"32.815506","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"1221","sira":"2","kod":"14687","ad":"YUNUS EMRE CAMİİ","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.76995","lng":"32.815839","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"1222","sira":"3","kod":"14044","ad":"KIR ÇİÇEĞİ EVLERİ","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.772569","lng":"32.816852","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"1223","sira":"4","kod":"14194","ad":"35.CD.","konum":"Bahçelievler Mh.35.Cd.Gölbaşı","lat":"39.774423","lng":"32.817443","detay":"Bahçelievler Mh.35.Cd.Gölbaşı"},{"id":"1224","sira":"5","kod":"13805","ad":"MİLLİ İRADE ÖĞRENCİ YURDU","konum":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı","lat":"39.777385","lng":"32.816619","detay":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı"},{"id":"1225","sira":"6","kod":"13806","ad":"GÖLBAŞI ŞEHİT ÖZEL HAREKATÇILAR ÖĞRENCİ YURDU","konum":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı","lat":"39.779325","lng":"32.815203","detay":"Bahçelievler Mh.Mh.35.Cd.Gölbaşı"},{"id":"1226","sira":"7","kod":"13185","ad":"ANKARA ÜNİVERSİTESİ TEKNOKENT","konum":"Bahçelievler Mh.Mh.319.Sk.Gölbaşı","lat":"39.782763","lng":"32.814141","detay":"Bahçelievler Mh.Mh.319.Sk.Gölbaşı"},{"id":"1227","sira":"8","kod":"12579","ad":"ÖĞRENCİ YURTLARI","konum":"Bahçelievler Mh.319.Sk.Gölbaşı","lat":"39.783407","lng":"32.81119","detay":"Bahçelievler Mh.319.Sk.Gölbaşı"},{"id":"1228","sira":"9","kod":"12514","ad":"CUMHURİYET PARKI","konum":"Bahçelievler Mh.319.Sk.Gölbaşı","lat":"39.784849","lng":"32.807505","detay":"Bahçelievler Mh.319.Sk.Gölbaşı"},{"id":"1229","sira":"10","kod":"11323","ad":"GÖLBAŞI BELEDİYESİ","konum":"Gaziosmanpaşa Mh.Sahil Cd.Gölbaşı","lat":"39.789364","lng":"32.804168","detay":"Gaziosmanpaşa Mh.Sahil Cd.Gölbaşı"},{"id":"1230","sira":"11","kod":"11260","ad":"JANDARMA","konum":"Gaziosmanpaşa Mh.Şht.Ali Gaffar Okan Cd.Gölbaşı","lat":"39.792239","lng":"32.803136","detay":"Gaziosmanpaşa Mh.Şht.Ali Gaffar Okan Cd.Gölbaşı"},{"id":"1231","sira":"12","kod":"10079","ad":"OSMANLI PARKI","konum":"Gaziosmanpaşa Mh.Şehit Ali Gaffar Okkan Cd.Gölbaşı","lat":"39.796825","lng":"32.802338","detay":"Gaziosmanpaşa Mh.Şehit Ali Gaffar Okkan Cd.Gölbaşı"},{"id":"1232","sira":"13","kod":"11281","ad":"ÜNİVERSİTELİLER SK.","konum":"Gaziosmanpaşa Mh.Şht.Ali Gaffar Okan Cd.Gölbaşı","lat":"39.799416","lng":"32.802604","detay":"Gaziosmanpaşa Mh.Şht.Ali Gaffar Okan Cd.Gölbaşı"},{"id":"1233","sira":"14","kod":"10062","ad":"GÖLBAŞI MESLEKİ VE TEKNİK ANADOLU LİSESİ","konum":"Gaziosmanpaşa Mh.Şehit Ali Gaffar Okkan Cd.Gölbaşı","lat":"39.801523","lng":"32.80284","detay":"Gaziosmanpaşa Mh.Şehit Ali Gaffar Okkan Cd.Gölbaşı"},{"id":"1234","sira":"15","kod":"14153","ad":"YUNUS EMRE PARKI","konum":"Gaziosmanpaşa Mh.Şehit Ali Gaffar Okkan Cd.Gölbaşı","lat":"39.803531","lng":"32.803071","detay":"Gaziosmanpaşa Mh.Şehit Ali Gaffar Okkan Cd.Gölbaşı"},{"id":"1235","sira":"16","kod":"11273","ad":"GÖLBAŞI MEZARLIĞI","konum":"Şafak Mh.Ankara Konya Yolu Gölbaşı","lat":"39.806431","lng":"32.804167","detay":"Şafak Mh.Ankara Konya Yolu Gölbaşı"},{"id":"1236","sira":"17","kod":"11271","ad":"GÖLBAŞI SANAYİ SİTESİ","konum":"-","lat":"39.809156","lng":"32.803298","detay":"-"},{"id":"1237","sira":"18","kod":"11172","ad":"AVM 1.DURAK","konum":"Karşıyaka Mh.Ankara Konya Yolu Yanyolu Gölbaşı","lat":"39.815813","lng":"32.798542","detay":"Karşıyaka Mh.Ankara Konya Yolu Yanyolu Gölbaşı"},{"id":"1238","sira":"19","kod":"10741","ad":"AVM 2.DURAK","konum":"Karşıyaka Mh.Ankara Konya Yolu Yanyolu Gölbaşı","lat":"39.818773","lng":"32.797055","detay":"Karşıyaka Mh.Ankara Konya Yolu Yanyolu Gölbaşı"},{"id":"1239","sira":"20","kod":"10739","ad":"AVM 3.DURAK","konum":"Oran Mh.Ankara Konya Yolu Yanyolu Çankaya","lat":"39.822882","lng":"32.796534","detay":"Oran Mh.Ankara Konya Yolu Yanyolu Çankaya"},{"id":"1240","sira":"21","kod":"11205","ad":"İNCEK KAVŞAĞI","konum":"Oran Mh.Ahlatlıbel Kvş.Çankaya","lat":"39.84351","lng":"32.807395","detay":"Oran Mh.Ahlatlıbel Kvş.Çankaya"},{"id":"1241","sira":"22","kod":"11207","ad":"DİKMEN KAVŞAĞI","konum":"Akpınar Mh.Ata Park İçi Yolu Çankaya","lat":"39.850189","lng":"32.811073","detay":"Akpınar Mh.Ata Park İçi Yolu Çankaya"},{"id":"1242","sira":"23","kod":"10856","ad":"ÇEŞME","konum":"Akpınar Mh.Mevlana Blv.Çankaya","lat":"39.855186","lng":"32.809213","detay":"Akpınar Mh.Mevlana Blv.Çankaya"},{"id":"1243","sira":"24","kod":"13202","ad":"AKPINAR","konum":"Akpınar Mh.Mh.Mevlana Blv.Çankaya","lat":"39.859074","lng":"32.809834","detay":"Akpınar Mh.Mh.Mevlana Blv.Çankaya"},{"id":"1244","sira":"25","kod":"10858","ad":"TURHAN DÖKMECİ İLKÖĞRETİM OKULU","konum":"Akpınar Mh.Mevlana Blv.Çankaya","lat":"39.867759","lng":"32.810726","detay":"Akpınar Mh.Mevlana Blv.Çankaya"},{"id":"1245","sira":"26","kod":"10860","ad":"AKPINAR MAHALLESİ","konum":"Gökkuşağı Mh.Mevlana Blv.Çankaya","lat":"39.872318","lng":"32.811295","detay":"Gökkuşağı Mh.Mevlana Blv.Çankaya"},{"id":"1246","sira":"27","kod":"10862","ad":"GÖKKUŞAĞI MAHALLESİ","konum":"Gökkuşağı Mh.Mevlana Blv.Çankaya","lat":"39.876857","lng":"32.81173","detay":"Gökkuşağı Mh.Mevlana Blv.Çankaya"},{"id":"1247","sira":"28","kod":"10864","ad":"KOŞUYOLU PARKI","konum":"Gökkuşağı Mh.Mevlana Blv.Çankaya","lat":"39.879631","lng":"32.812019","detay":"Gökkuşağı Mh.Mevlana Blv.Çankaya"},{"id":"1248","sira":"29","kod":"10865","ad":"FEN LİSESİ","konum":"Cevizlidere Mh.Mevlana Blv.Çankaya","lat":"39.882043","lng":"32.812257","detay":"Cevizlidere Mh.Mevlana Blv.Çankaya"},{"id":"1249","sira":"30","kod":"10930","ad":"TAURUS AVM","konum":"Ehlibeyt Mh.Mevlana Blv.Çankaya","lat":"39.892704","lng":"32.813347","detay":"Ehlibeyt Mh.Mevlana Blv.Çankaya"},{"id":"1250","sira":"31","kod":"10933","ad":"BALGAT KÖPRÜSÜ","konum":"Ehlibeyt Mh.Mevlana Blv.Çan
... [TRUNCATED, toplam 19643 karakter]
```

---

### 89. GET `egocptsrvand.ego.gov.tr/hibrit/srv.asp?&LAN=tr&FNC=Otobus&DURAK=14043&HAT=114&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0`

- **Durum Kodu:** 302
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: EGO Genel Mudurlugu-EGO Cepte-ANDROID-Xiaomi-M2011K2C-osV:16-apV:5.1.2
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=windows-1254
Expires: Sat, 08 Aug 2026 14:21:00 GMT
Location: /mblSrv19/service.asp?&LAN=tr&FNC=Otobus&DURAK=14043&HAT=114&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok
Set-Cookie: ASPSESSIONIDSESSRDBB=PGHDBGDAAOOEMKKBHEKDBAGN; secure; path=/, TS010fd228=013900525455ba9b600c346292a388b41782828fc3f2c69cfd154d1e564dfa83bd48636eb934cf5da46524494cd457fea77c89447766e8a28b67c98813050857b869e43074; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:21:00 GMT
Content-Length: 292
```

**Yanıt Gövdesi** (292 byte):

```json
<head><title>Object moved</title></head>
<body><h1>Object Moved</h1>This object may be found <a HREF="/mblSrv19/service.asp?&amp;LAN=tr&amp;FNC=Otobus&amp;DURAK=14043&amp;HAT=114&amp;UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&amp;LAN=tr&amp;ACSMode=0&amp;secure=ok">here</a>.</body>

```

---

### 90. GET `egocptsrvand.ego.gov.tr/mblSrv19/service.asp?&LAN=tr&FNC=Otobus&DURAK=14043&HAT=114&UID=4C19FF69-CF38-4765-A621-63D671359ED3-1019688678&LAN=tr&ACSMode=0&secure=ok`

- **Durum Kodu:** 200
- **HTTP Sürümü:** HTTP/1.1

**İstek Header'ları:**

```
user-agent: Dart/3.11 (dart:io)
connection: keep-alive
accept: application/json; charset=UTF-8
accept-encoding: gzip
host: egocptsrvand.ego.gov.tr
```

**Yanıt Header'ları:**

```
Cache-Control: private,private
Pragma: no-cache
Content-Type: text/html; Charset=utf-8
Content-Encoding: gzip
Expires: Sat, 08 Aug 2026 14:21:00 GMT
Vary: Accept-Encoding
Set-Cookie: ASPSESSIONIDQGQRTBAB=EBMHADCAMDNEFOGHFOJBLNAF; secure; path=/, TS010fd228=0139005254afac599a557287155611c7c0514ad4352f93200c1084d735580d125496c29c5192021b71eecc628949f632d792033ed2ed0548fa4e309943e13ddcadf7002c85; Path=/; Domain=.egocptsrvand.ego.gov.tr
Date: Sun, 09 Aug 2026 14:21:00 GMT
Connection: close
Transfer-Encoding: chunked
```

**Yanıt Gövdesi** (1428 byte):

```json
{"table":[{"arac_no":"-","hat_ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ","hat_no":"114","sure":"Sonraki Hareket Saati İlk Duraktan\n17:40 / 19 dk Sonra","detay":""},{"arac_no":"07-170","plaka_no":"06 BG 3504","lat":"39.774494","lng":"32.817444","hiz":"36 km","durak_no":"14194","onceki_durak_no":"14044","hat_no":"114","konum_tarihi":"09.08.2026 17:20:39","durak_sira_no":"4","aci":"9","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Normal","trafficLevel":"normal","avgDelayMinutes":4.3,"avgDelayText":"4.3","reason":null,"lastSeenUtc":"2026-08-09T14:19:58.517Z"},"saniye":"999999","sure":"Geçti","secili_durak_no":"14043","secili_durak_sira_no":"1","yon":"0","durum":"gecti","konum":"-","hat_ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ"},{"arac_no":"07-169","plaka_no":"06 BG 1036","lat":"39.845203","lng":"32.809406","hiz":"72 km","durak_no":"11205","onceki_durak_no":"10741","hat_no":"114","konum_tarihi":"09.08.2026 17:20:53","durak_sira_no":"21","aci":"37","doluluk":{"message":"no data"},"detay":"Solo‚ Engelli","trafik":{"label":"Yoğun","trafficLevel":"az_yogun","avgDelayMinutes":-0.1,"avgDelayText":"-0.1","reason":"multi_route_abnormal_slowdown","lastSeenUtc":"2026-08-09T14:16:58.52Z"},"saniye":"999999","sure":"Geçti","secili_durak_no":"14043","secili_durak_sira_no":"1","yon":"1","durum":"gecti","konum":"-","hat_ad":"GÖLBAŞI YURTLAR-AŞTİ-AKKÖPRÜ"}],"message":"","status":"TRUE"}
```

---
