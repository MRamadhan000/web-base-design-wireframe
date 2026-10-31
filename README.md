# Web Base Design Wireframe

Aplikasi web berbasis **Next.js (App Router)** dengan pola arsitektur **MVVM (Model – View – ViewModel)** yang dikelompokkan **berdasarkan fitur** (*feature-based*). Data diambil dari backend **Strapi** menggunakan **TanStack Query (React Query)** untuk data fetching dan caching.

---

## Daftar Isi

1. [Teknologi](#teknologi)
2. [Memulai](#memulai)
3. [Environment Variables](#environment-variables)
4. [Arsitektur MVVM](#arsitektur-mvvm)
5. [Struktur Folder](#struktur-folder)
6. [Aturan Tiap Folder](#aturan-tiap-folder)
7. [Alur Data](#alur-data)
8. [Query Strapi (`buildStrapiQuery`)](#query-strapi-buildstrapiquery)
9. [Menambah Fitur Baru](#menambah-fitur-baru)
10. [Docker](#docker)
11. [Konvensi Penamaan](#konvensi-penamaan)

---

## Teknologi

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/) + TypeScript
- [TanStack Query](https://tanstack.com/query) untuk server state
- [Strapi](https://strapi.io/) sebagai backend / headless CMS
- Docker untuk deployment

---

## Memulai

### Prasyarat

- Node.js 18+ (disarankan LTS terbaru)
- npm / yarn / pnpm
- Backend Strapi yang sudah berjalan

### Instalasi

```bash
# 1. Clone repository
git clone <url-repository>
cd web-base-design-wireframe

# 2. Install dependency
npm install

# 3. Salin environment variable lalu isi nilainya
cp .env.example .env.local

# 4. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

### Script

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build production |
| `npm run start` | Menjalankan hasil build |
| `npm run lint` | Menjalankan linter |

---

## Environment Variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_API_BASE_URL=http://10.0.1.249/backend/api
NEXT_PUBLIC_IMAGE_BASE_URL=http://10.0.1.249/backend
NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID=<ORGANIZATION_DOCUMENT_ID>
```

| Variable | Keterangan |
|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Base URL API Strapi (tanpa trailing slash) |
| `NEXT_PUBLIC_IMAGE_BASE_URL` | Base URL untuk media/gambar dari backend |
| `NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID` | `documentId` organisasi. **Wajib**, dipakai untuk men-scope semua query |

> **Penting:** variabel `NEXT_PUBLIC_*` ditanam ke bundle saat **build**, bukan saat runtime. Jika nilainya berubah, aplikasi harus di-build ulang. Lihat bagian [Docker](#docker).

---

## Arsitektur MVVM

| Layer | Folder | Tanggung Jawab |
|---|---|---|
| **View** | `views/` | Tampilan (UI). Hanya render dan menerima data dari ViewModel. |
| **ViewModel** | `hooks/` | State server (TanStack Query), loading/error, dan handler. Menghubungkan View dengan Repository. |
| **Model** | `models/` | Kontrak data (`.types.ts`) dan akses API (`.service.ts`). |
| **Repository** | `repositories/` | Perantara ViewModel ↔ Service. Mapping/transform data, menggabungkan beberapa service. |

---

## Struktur Folder

```
src/
├── app/                          # Routing Next.js (App Router), tipis, hanya memanggil View
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
├── shared/                       # Model & util lintas fitur (pagination, buildStrapiQuery, dll)
├── components/                   # Komponen UI global/reusable (Button, Modal, dll)
├── lib/                          # Helper global (QueryProvider, utils)
└── ...
```

---

## Aturan Tiap Folder

### `views/` — View (Wajib)

- Entry utama sebuah fitur. Bisa berupa:
  - **Page View**: satu halaman penuh, contoh `BeritaPageView.tsx`, `BeritaDetailView.tsx`
  - **Section**: bagian dari halaman, contoh `BeritaSection.tsx` (misalnya dipakai di Home)
- Nama file diakhiri `View` atau `Section`, format **PascalCase**.

### `hooks/` — ViewModel (Wajib)

- Custom hook dengan format `use<NamaFitur>ViewModel.ts`.
- Memakai `useQuery` / `useMutation`, dengan `queryFn` yang memanggil **repository**.
- Query keys fitur didefinisikan **di luar** fungsi hook.
- Mengembalikan object yang siap dipakai View (data default, `isLoading`, `error`, `refetch`).

### `models/` — Model (Wajib)

- `*.types.ts`: seluruh `interface`/`type` fitur (response API, entity, payload).
- `*.service.ts`: fungsi murni untuk **fetch API** (GET/POST/PUT/DELETE). Tidak ada state, tidak ada React atau TanStack Query.

### `repositories/` — Repository (Wajib)

- Format nama: `<fitur>.repository.ts`.
- Fungsi baca berprefix `find...`, fungsi tulis berprefix `create...` / `update...` / `delete...`. Contoh: `findAllBerita`, `findBeritaById`.
- Memanggil service, lalu **mapping/normalisasi** response menjadi tipe yang dipakai UI.

### `components/` — Komponen Fitur (Opsional)

- Komponen kecil yang **hanya dipakai di fitur ini**. Jika dipakai lintas fitur, pindahkan ke `src/components/`.

---

## Alur Data

```
View  ──►  ViewModel (hooks + TanStack Query)  ──►  Repository  ──►  Service  ──►  API
 ▲                       │                              │               │
 └───────────────────────┴────── data / loading / error ◄───────────────┘
```

Satu arah: **View → ViewModel → Repository → Service**. Layer di bawah **tidak boleh** meng-import layer di atasnya.

---

## Query Strapi (`buildStrapiQuery`)

Semua request list ke Strapi dibangun lewat helper `buildStrapiQuery` agar format query konsisten dan otomatis ter-scope ke organisasi.

Yang ditangani otomatis:

- Pagination (`pagination[page]`, `pagination[pageSize]`)
- `fields` dan `populateFields` (populate relasi/media dengan field terbatas)
- Filter dinamis (key lain selain parameter di atas)
- Pencarian `$or` + `$containsi` berdasarkan `keyword` dan `orFields`
- Filter wajib `filters[organization][documentId][$eq]`

### Contoh pemakaian di service

```typescript
import { buildStrapiQuery } from "@/shared/utils/build-strapi-query";

const qs = buildStrapiQuery({
  page: 1,
  limit: 9,
  keyword: "banjir",
  orFields: ["title", "content", "author"],
  fields: ["title", "slug", "publishedAt"],
  populateFields: { thumbnail: ["url", "alternativeText"] },
});

const res = await fetch(`${BASE_URL}/beritas?${qs}`);
```

### Catatan

- `keyword` hanya diproses jika tidak kosong **dan** `orFields` terisi. Keyword otomatis di-`trim()`.
- Jangan mencampur `populateFields` dengan `populate=*`, karena bisa saling menimpa.
- Jika `NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID` belum diatur, fungsi akan melempar error.

---

## Menambah Fitur Baru

Salin struktur folder `berita/` dan ganti namanya. Contoh untuk fitur `pengumuman`:

```
src/features/pengumuman/
├── components/
├── hooks/
│   └── usePengumumanViewModel.ts
├── models/
│   ├── pengumuman.service.ts
│   └── pengumuman.types.ts
├── repositories/
│   └── pengumuman.repository.ts
└── views/
    └── PengumumanPageView.tsx
```

Langkah singkat:

1. Definisikan tipe di `models/*.types.ts` (tipe `Raw` dari API dan tipe untuk UI).
2. Tulis fungsi fetch di `models/*.service.ts` memakai `buildStrapiQuery`.
3. Tulis `find...` + mapping di `repositories/*.repository.ts`.
4. Buat ViewModel di `hooks/` dengan `useQuery` dan query keys.
5. Buat View di `views/`, lalu panggil dari `app/<route>/page.tsx`.

---

## Docker

### Build

Variabel `NEXT_PUBLIC_*` harus diberikan saat **build** lewat `--build-arg`:

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_BASE_URL=http://10.0.1.249/backend/api \
  --build-arg NEXT_PUBLIC_IMAGE_BASE_URL=http://10.0.1.249/backend \
  --build-arg NEXT_PUBLIC_ORGANIZATION_DOCUMENT_ID=iv4f6jflnq4lst18pu7owh23 \
  -t web-base-design-wireframe .
```

### Run

```bash
docker run -d \
  --name web-base-design-wireframe \
  -p 3000:3000 \
  web-base-design-wireframe
```

Aplikasi berjalan di [http://localhost:3000](http://localhost:3000).

> Mengubah environment variable saat `docker run` **tidak** memengaruhi bundle client. Jika nilai `NEXT_PUBLIC_*` berubah, lakukan `docker build` ulang.

---

## Konvensi Penamaan

| Jenis | Format | Contoh |
|---|---|---|
| View / Section | `<Nama>View.tsx` / `<Nama>Section.tsx` (PascalCase) | `BeritaPageView.tsx` |
| ViewModel | `use<NamaFitur>ViewModel.ts` | `useBeritaViewModel.ts` |
| Service | `<fitur>.service.ts` | `berita.service.ts` |
| Types | `<fitur>.types.ts` | `berita.types.ts` |
| Repository | `<fitur>.repository.ts` | `berita.repository.ts` |
| Fungsi repository (baca) | `find...` | `findAllBerita`, `findBeritaById` |
| Fungsi repository (tulis) | `create...` / `update...` / `delete...` | `createBerita` |