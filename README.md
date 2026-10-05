# Panduan Arsitektur MVVM (Next.js) — Feature Based

Dokumen ini menjelaskan standar struktur kode project Next.js dengan pola **MVVM (Model – View – ViewModel)** yang dikelompokkan **berdasarkan fitur** (*feature-based*), dan menggunakan **TanStack Query (React Query)** untuk data fetching & caching. Semua developer wajib mengikuti panduan ini agar kode konsisten dan mudah dirawat.

---

## 1. Konsep Singkat

| Layer | Folder | Tanggung Jawab |
|---|---|---|
| **View** | `views/` | Tampilan (UI). Hanya render & menerima data dari ViewModel. |
| **ViewModel** | `hooks/` | State server (TanStack Query), loading/error, dan handler. Menghubungkan View dengan Repository. |
| **Model** | `models/` | Kontrak data (`.types.ts`) dan akses API (`.service.ts`). |
| **Repository** | `repositories/` | Perantara ViewModel ↔ Service. Mapping/transform data, gabung beberapa service. |

---

## 2. Struktur Folder

```
src/
├── app/                          # Routing Next.js (App Router) — tipis, hanya memanggil View
│   └── berita/
│       ├── page.tsx
│       └── [id]/page.tsx
│
├── features/                     # Semua kode dikelompokkan per fitur
│   └── berita/
│       ├── components/           # Komponen kecil khusus fitur ini (Card, Filter, dll)
│       ├── hooks/                # ViewModel
│       │   └── useBeritaViewModel.ts
│       ├── models/
│       │   ├── berita.service.ts # Fetch API
│       │   └── berita.types.ts   # Interface / type
│       ├── repositories/
│       │   └── berita.repository.ts
│       └── views/                # View utama (Page View / Section)
│           ├── BeritaPageView.tsx
│           ├── BeritaDetailView.tsx
│           └── BeritaSection.tsx
│
├── components/                   # Komponen UI global/reusable (Button, Modal, dll)
├── lib/                          # Helper global (axios instance, QueryProvider, utils)
└── ...
```

> Fitur baru (misal `produk`, `pengumuman`) cukup menyalin struktur folder `berita/` dan mengganti namanya.

---

## 3. Aturan Tiap Folder

### 3.1 `views/` — View (Wajib)
- Merupakan **entry utama** sebuah fitur. Bisa berupa:
  - **Page View** → satu halaman penuh, contoh: `BeritaPageView.tsx`, `BeritaDetailView.tsx`
  - **Section** → bagian dari halaman, contoh: `BeritaSection.tsx` (misal dipakai di Home)
- Nama file diakhiri `View` atau `Section`, format **PascalCase**.

### 3.2 `hooks/` — ViewModel (Wajib)
- Berisi custom hook dengan format `use<NamaFitur>ViewModel.ts`.
- Memakai **`useQuery` / `useMutation`** dari TanStack Query, dengan `queryFn` yang memanggil **repository**.
- Mendefinisikan **query keys** fitur (di luar fungsi hook).
- Mengembalikan object yang siap dipakai View (data default, `isLoading`, `error`, `refetch`).

### 3.3 `models/` — Model (Wajib)
- `*.types.ts` → seluruh `interface`/`type` fitur (response API, entity, payload).
- `*.service.ts` → fungsi murni untuk **fetch API** (GET/POST/PUT/DELETE). Tidak ada state, tidak ada React/TanStack Query.

### 3.4 `repositories/` — Repository (Wajib)
- Format nama: `<fitur>.repository.ts`.
- Berisi fungsi dengan prefix **`find...`** (baca) dan **`create/update/delete...`** (tulis), contoh: `findAllBerita`, `findBeritaById`.
- Memanggil service, lalu **mapping/normalisasi** response menjadi tipe yang dipakai UI.

### 3.5 `components/` — Komponen Fitur (Opsional)
- Komponen kecil yang **hanya dipakai di fitur ini**. Komponen yang dipakai lintas fitur pindahkan ke `src/components/`.

---

## 4. Alur Data

```
View  ──►  ViewModel (hooks + TanStack Query)  ──►  Repository  ──►  Service  ──►  API
 ▲                       │                              │               │
 └───────────────────────┴────── data / loading / error ◄───────────────┘
```

Satu arah: **View → ViewModel → Repository → Service**. Layer di bawah tidak boleh meng-import layer di atasnya.

---