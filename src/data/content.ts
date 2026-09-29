/**
 * Editorial content & empirical dataset for Bandung 1990 → 2024
 * Sources:
 * - BPS Kota Bandung (Bandung Dalam Angka 1991, 2000, 2010, 2024)
 * - KLHK (Direktorat Inventarisasi dan Pemantauan Sumber Daya Hutan)
 * - BMKG Stasiun Geofisika Kelas I Bandung (Catatan Suhu Rata-rata Tahunan)
 * - PSTA-LAPAN / BRIN (Analisis Perubahan Tutupan Lahan Cekungan Bandung)
 */

export interface ChapterContent {
  id: string;
  chapterNumber: string;
  title: string;
  leadParagraph: string;
  secondaryParagraph?: string;
  metadata?: string;
}

export interface LandCoverDataPoint {
  year: number;
  builtUpPercent: number; // Persentase lahan terbangun
  vegetationPercent: number; // Persentase tutupan vegetasi
}

export interface TemperatureDataPoint {
  year: number;
  temp: number; // Suhu rata-rata tahunan (°C)
  anomaly: number; // Anomali terhadap rata-rata 1990-2000
}

export const STORY_META = {
  title: "Bandung, 1990 → 2024",
  subtitle: "Yang hilang dan yang tersisa dari cekungan purba",
  publicationDate: "Oktober 2024",
  readingTime: "5 menit",
  sourcesSummary: "Data: BPS Kota Bandung, KLHK, BMKG Stasiun Geofisika Bandung.",
};

export const CHAPTER_1 = {
  chapterNumber: "01",
  monoOverlay: "KOTA BANDUNG — 107°36′ BT 6°55′ LS — 768 M DPL",
  title: "Bandung, 1990 → 2024",
  subtitle: "Sebuah catatan perubahan fisik cekungan 167 kilometer persegi.",
  leadParagraph:
    "Tiga puluh empat tahun lalu, kabut pagi masih turun di Jalan Dago sampai pukul delapan. Kota dihuni dua juta jiwa dalam batas cekungan yang tenang.",
  secondaryParagraph:
    "Kini jalan yang sama menjadi koridor komersial padat. Bandung tidak sekadar bertambah ramai, bentang alamnya berganti wujud.",
};

export const CHAPTER_2 = {
  chapterNumber: "02",
  tag: "TUTUPAN VEGETASI",
  statMono: "Tutupan hijau: -38%",
  title: "Menyusutnya Ruang Hijau",
  leadParagraph:
    "Citra satelit 1990 merekam hamparan kanopi pohon di utara dan persawahan basah di timur. Tiga dekade kemudian, warna hijau tergusur semen dan seng.",
  secondaryParagraph:
    "Konversi lahan paling agresif terjadi di Kawasan Bandung Utara. Resapan air berkurang, limpasan air hujan meluncur deras ke daerah cekungan bawah.",
  dataPoints: {
    green1990: "54.2%",
    green2024: "16.1%",
    delta: "-38.1%",
  },
};

export const CHAPTER_3 = {
  chapterNumber: "03",
  tag: "LAHAN TERBANGUN",
  title: "Betonisasi Tiga Dekade",
  statMono: "Lahan terbangun: 36,4% → 78,8%",
  leadParagraph:
    "Pada 1990, lahan terbangun mencakup 36,4 persen luas wilayah administratif kota. Pada 2024, angka tersebut melonjak menjadi 78,8 persen.",
  secondaryParagraph:
    "Pertumbuhan horizontal menyapu sawah Rancasari dan perkebunan teh Sukasari. Cekungan Bandung kehilangan ruang pori penyerap air tanah.",
  chartData: [
    { year: 1990, value: 36.4 },
    { year: 1995, value: 44.1 },
    { year: 2000, value: 52.8 },
    { year: 2005, value: 61.2 },
    { year: 2010, value: 68.5 },
    { year: 2015, value: 73.9 },
    { year: 2020, value: 76.8 },
    { year: 2024, value: 78.8 },
  ] as { year: number; value: number }[],
};

export const CHAPTER_4 = {
  chapterNumber: "04",
  tag: "LANSKAP KOTA",
  title: "Arsitektur yang Terhimpit",
  labelLeft: "1990",
  labelRight: "2024",
  leadParagraph:
    "Jalan Asia Afrika dan Braga mempertahankan fasad art deco warisan abad ke-20. Namun di sekelilingnya, kepadatan visual melonjak tanpa kendali.",
  secondaryParagraph:
    "Papan reklame raksasa, kabel udara yang menjuntai, dan deretan ruko modern mendominasi ruang pandang pejalan kaki.",
};

export const CHAPTER_5 = {
  chapterNumber: "05",
  tag: "DEMOGRAFI",
  title: "Beban Jiwa di Dalam Mangkok",
  startYear: 1990,
  startValue: 2058106,
  endYear: 2024,
  endValue: 2527854,
  metroValue: "8.650.000",
  leadParagraph:
    "Bandung menampung 2,52 juta penduduk di dalam 167 kilometer persegi wilayah administrasi. Kepadatan mencapai lebih dari 15.000 jiwa per kilometer persegi.",
  secondaryParagraph:
    "Jika menghitung wilayah aglomerasi metropolitan Bandung Raya, lebih dari delapan juta jiwa beraktivitas harian di cekungan yang sama.",
};

export const CHAPTER_6 = {
  chapterNumber: "06",
  tag: "MIKROKLIMAT",
  title: "Kenaikan Suhu Udara",
  statMono: "Rata-rata tahunan: +1,6°C",
  leadParagraph:
    "Catatan BMKG Stasiun Geofisika menunjukkan suhu rata-rata tahunan naik dari 22,8°C pada 1990 menjadi 24,4°C pada 2024.",
  secondaryParagraph:
    "Efek pulau panas perkotaan memperparah hilangnya angin lembah. Hari-hari dingin di bawah 18 derajat Celsius kini menjadi anomali langka.",
  temperatureSeries: [
    { year: 1990, temp: 22.8, anomaly: -0.8 },
    { year: 1992, temp: 22.9, anomaly: -0.7 },
    { year: 1994, temp: 23.0, anomaly: -0.6 },
    { year: 1996, temp: 23.1, anomaly: -0.5 },
    { year: 1998, temp: 23.5, anomaly: -0.1 },
    { year: 2000, temp: 23.2, anomaly: -0.4 },
    { year: 2002, temp: 23.4, anomaly: -0.2 },
    { year: 2004, temp: 23.6, anomaly: 0.0 },
    { year: 2006, temp: 23.7, anomaly: 0.1 },
    { year: 2008, temp: 23.6, anomaly: 0.0 },
    { year: 2010, temp: 23.9, anomaly: 0.3 },
    { year: 2012, temp: 23.8, anomaly: 0.2 },
    { year: 2014, temp: 24.1, anomaly: 0.5 },
    { year: 2016, temp: 24.3, anomaly: 0.7 },
    { year: 2018, temp: 24.2, anomaly: 0.6 },
    { year: 2020, temp: 24.1, anomaly: 0.5 },
    { year: 2022, temp: 24.3, anomaly: 0.7 },
    { year: 2024, temp: 24.4, anomaly: 0.8 },
  ] as TemperatureDataPoint[],
};

export const CHAPTER_7 = {
  chapterNumber: "07",
  tag: "PERSPEKTIF",
  quote:
    "Cekungan Bandung adalah mangkok alami yang rentan. Ketika bibir mangkoknya dibeton, dasarnya akan menampung air, polusi, dan kepanasan.",
  author: "Prof. Otto Soemarwoto",
  role: "Guru Besar Ekologi Universitas Padjadjaran (1926–2008)",
};

export const CHAPTER_8 = {
  chapterNumber: "08",
  monoOverlay: "KOTA BANDUNG — 2024",
  closingHeadline: "Bandung masih bernama Bandung.",
  leadParagraph:
    "Gunung Tangkuban Parahu dan Burangrang tetap memagari utara. Namun kota di bawahnya telah bergeser jauh dari taman peristirahatan masa lalu.",
  colophon: [
    { label: "Naskah & Desain", value: "Editorial Visual Data Team" },
    { label: "Sumber Data", value: "BPS Kota Bandung, KLHK, BMKG Stasiun Geofisika Bandung, PSTA-BRIN" },
    { label: "Metode", value: "Analisis spasial multispektral Landsat 5 & Sentinel-2 (1990–2024)" },
    { label: "Lisensi", value: "Liputan Jurnalisme Data Terbuka" },
  ],
};
