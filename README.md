# 🧑‍💻 Minilemon Frontend Internship Test

Proyek ini dibuat sebagai bagian dari proses seleksi **Frontend Internship di Minilemon**. Aplikasi ini menampilkan data sekolah di Indonesia menggunakan **[API Sekolah Indonesia](https://github.com/wanrabbae/api-sekolah-indonesia)**, dengan fokus pada implementasi antarmuka yang responsif, bersih, dan mudah digunakan.

---

## 🚀 Fitur Utama

* 🔍 **Pencarian Sekolah** berdasarkan provinsi, kabupaten/kota, atau nama sekolah
* 🏫 **Menampilkan Detail Sekolah** seperti nama, NPSN, status (negeri/swasta), dan alamat
* 📱 **Desain Responsif** — tampil optimal di desktop maupun perangkat mobile
* ⚡ **Data Real-time** diambil langsung dari API publik `api-sekolah-indonesia`
* 💡 **Clean UI & UX** dengan komponen reusable dan struktur code yang terorganisir

---

## 🧠 Teknologi yang Digunakan

| Kategori           | Teknologi                                                                   |
| ------------------ | --------------------------------------------------------------------------- |
| Frontend Framework | React / Next.js *(sesuaikan dengan project kamu)*                           |
| Styling            | Tailwind CSS / CSS Modules / Styled Components                              |
| HTTP Client        | Axios / Fetch API                                                           |
| State Management   | React Hooks / Context API                                                   |
| API                | [API Sekolah Indonesia](https://github.com/wanrabbae/api-sekolah-indonesia) |

---

## ⚙️ Cara Menjalankan Proyek

```bash
# 1. Clone repository
git clone https://github.com/radjikinseptiawan/minilemon-internship-requirment.git

# 2. Masuk ke folder project
cd minilemon-internship-requirment

# 3. Install dependencies
npm install
# atau
yarn install

# 4. Jalankan aplikasi
npm run dev
# atau
yarn dev
```

Aplikasi akan berjalan di `http://localhost:3000/` (default).

---

## 📡 API Endpoint

Proyek ini menggunakan **API Sekolah Indonesia**, yang menyediakan data sekolah dari seluruh Indonesia.

Contoh endpoint:

```bash
GET https://api-sekolah-indonesia.vercel.app/sekolah?provinsi=JAWA%20BARAT
```

Respon contoh:

```json
{
  "status": true,
  "total": 100,
  "data": [
    {
      "npsn": "20202020",
      "nama": "SMA Negeri 1 Bandung",
      "status": "Negeri",
      "alamat": "Jl. Asia Afrika No.1, Bandung"
    }
  ]
}
```

---

## 🧩 Struktur Folder (Contoh)

```
minilemon-internship-requirment/
├── src/
│   ├── components/      # Reusable components
│   ├── pages/           # Halaman utama
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API calls
│   ├── styles/          # File CSS/Tailwind
│   └── utils/           # Helper functions
├── public/
│   └── assets/          # Gambar, ikon, dll
└── package.json
```

---

## 💬 Catatan

Proyek ini dibuat untuk tujuan **tes kemampuan frontend**, meliputi:

* Pemahaman dasar React dan pengelolaan state
* Integrasi dengan API publik
* Pembuatan tampilan yang konsisten dan responsif
* Penulisan kode yang bersih dan mudah dibaca

---

## 👨‍💼 Author

**Radjikin Septiawan**
Frontend Developer — kandidat internship di **Minilemon**
📧 Email: [tambahkan email kamu]
🔗 GitHub: [https://github.com/radjikinseptiawan](https://github.com/radjikinseptiawan)
