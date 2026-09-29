# Bandung, 1990 → 2024 — Yang Hilang dan Yang Tersisa

Liputan jurnalisme visual (*scrollytelling*) mengenai transformasi fisik, penyusutan tutupan vegetasi, laju betonisasi, lonjakan populasi, dan mikroklimat Cekungan Bandung selama kurun waktu 1990 hingga 2024.

---

## 1. Spesifikasi Teknis & Editorial

- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Motion**: Framer Motion (`useScroll`, `useTransform` berbasis cubic-bezier editorial)
- **Desain Sistem**: Strict 3-color palette, font serif humanis + mono tabular, anti-slop guidelines
- **Performa Target**: LCP < 2.0 detik pada jaringan 3G (simulasi Moto G4), total page payload < 2.5 MB

---

## 2. Palet Warna (Strict Palette)

| Token | Nilai Hex | Penggunaan |
| :--- | :--- | :--- |
| `paper` | `#F7F5F0` | Latar kanvas utama (off-white hangat) |
| `ink` | `#1A1A1A` | Teks tubuh, judul, garis struktur primer |
| `muted` | `#8A8578` | Grid garis bantu, label koordinat, metadata |
| `terracotta` | `#B85C38` | Aksen tunggal editorial (anomali suhu, bab aktif) |
| `positive` | `#4A7C59` | Kanopi vegetasi pada visual spasial |
| `negative` | `#A83232` | Penanda penyusutan ruang terbuka hijau |

---

## 3. Tipografi

Proyek menggunakan `next/font/google` yang otomatis mengunduh dan melakukan self-hosting font secara lokal saat proses *build* tanpa pemanggilan CDN eksternal:

- **Display (Judul Bab & Kutipan)**: `Fraunces` (weights 400 & 600, tracking -2% s/d -4%)
- **Body (Naskah Narasi)**: `Source Serif 4` (weight 400, line-height 1.6, max width 62ch)
- **Metadata & Angka Data**: `IBM Plex Mono` (weights 400, 500, 600, tracking +8%)

---

## 4. Struktur Bab (8 Scroll Chapters)

1. **Bab 01 — Pembuka**: Visual lanskap monokrom/sepia Cekungan Bandung 1990 dengan koordinat astronomis dan naskah pembuka.
2. **Bab 02 — Tutupan Vegetasi**: *Crossfade morph* peta spasial 1990 vs 2024 dengan *overlay* tipis penyusutan kanopi hijau (-38%).
3. **Bab 03 — Lahan Terbangun**: Grafik garis tunggal hitam-putih (*1.5px ink stroke*) dengan grid horizontal 25% menunjukkan lonjakan betonisasi (36,4% → 78,8%).
4. **Bab 04 — Lanskap Kota**: Komparasi interaktif terbelah (*split screen slider*) antara koridor jalan 1990 dan kepadatan komersial 2024.
5. **Bab 05 — Demografi**: Animasi counter mono berukuran besar (96px) menghitung pertumbuhan 2,05 juta jiwa menjadi 2,52 juta jiwa.
6. **Bab 06 — Mikroklimat**: Deretan balok vertikal tahunan (1990–2024) dengan gradasi warna *paper-to-terracotta* yang merekam kenaikan suhu rata-rata +1,6°C.
7. **Bab 07 — Perspektif**: Kutipan sentral Prof. Otto Soemarwoto mengenai kerentanan ekologi mangkok Bandung.
8. **Bab 08 — Penutup & Kolofon**: Lanskap senja 2024, pernyataan pamungkas, dan dokumentasi metodologi sumber data terbuka.

---

## 5. Sumber Data & Sitasi Empiris

1. **Badan Pusat Statistik (BPS) Kota Bandung**
   - *Bandung Dalam Angka (1991, 2001, 2011, 2024)*. Data kependudukan, luas wilayah administratif (167,3 km²), dan kepadatan per kecamatan.
2. **Kementerian Lingkungan Hidup dan Kehutanan (KLHK)**
   - *Direktorat Inventarisasi dan Pemantauan Sumber Daya Hutan (IPSDH)*. Data tutupan lahan spasial dan deforestasi daerah tangkapan air Kawasan Bandung Utara (KBU).
3. **Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)**
   - *Stasiun Geofisika Kelas I Bandung (Jl. Cemara No. 66)*. Rekam data pengamatan suhu udara rata-rata tahunan Cekungan Bandung kurun 1990–2024.
4. **Pusat Riset Sains Antariksa (PSTA) — BRIN / LAPAN**
   - Kajian perubahan tutupan lahan dan fenomena *Urban Heat Island* (UHI) Cekungan Bandung berbasis citra satelit Landsat 5 TM dan Sentinel-2.

---

## 6. Menjalankan Proyek

```bash
cd bandung-scrollytelling
npm install
npm run dev
```

Buka peramban di `http://localhost:3000`.
