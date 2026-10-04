"use client";

import { UseFormReturn } from "react-hook-form";

import { ContactFormData } from "../schemas/contact.schema";
import { FaMapMarkerAlt } from "react-icons/fa";

interface ContactFormProps {
  form: UseFormReturn<ContactFormData>;
  onSubmit: (data: ContactFormData) => void | Promise<void>;
}

export default function ContactForm({
  form,
  onSubmit,
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = form;

  const inputClass =
    "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-xs text-black placeholder:text-muted-light transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:text-sm";

  const labelClass =
    "mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-light";

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      {/* FORM */}
      <div>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Kirim Pesan
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-black">
            Hubungi Pemerintah Kota Batu
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Nama */}
          <div>
            <label className={labelClass}>
              Nama
            </label>

            <input
              type="text"
              placeholder="Masukkan nama..."
              {...register("nama")}
              className={inputClass}
            />

            {errors.nama && (
              <p className="mt-1 text-xs text-red-500">
                {errors.nama.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className={labelClass}>
              Email
            </label>

            <input
              type="email"
              placeholder="nama@email.com"
              {...register("email")}
              className={inputClass}
            />

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Telepon */}
          <div>
            <label className={labelClass}>
              Telepon
            </label>

            <input
              type="tel"
              placeholder="08123456789"
              {...register("telepon")}
              className={inputClass}
            />

            {errors.telepon && (
              <p className="mt-1 text-xs text-red-500">
                {errors.telepon.message}
              </p>
            )}
          </div>

          {/* Subjek */}
          <div>
            <label className={labelClass}>
              Subjek
            </label>

            <input
              type="text"
              placeholder="Contoh: Pertanyaan Informasi"
              {...register("subjek")}
              className={inputClass}
            />

            {errors.subjek && (
              <p className="mt-1 text-xs text-red-500">
                {errors.subjek.message}
              </p>
            )}
          </div>

          {/* Pesan */}
          <div>
            <label className={labelClass}>
              Pesan
            </label>

            <textarea
              rows={5}
              placeholder="Tuliskan pesan Anda..."
              {...register("pesan")}
              className={inputClass}
            />

            {errors.pesan && (
              <p className="mt-1 text-xs text-red-500">
                {errors.pesan.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </div>

      {/* LOCATION */}
      <div>
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Lokasi
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-black">
            Balai Kota Among Tani
          </h2>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-border bg-muted/30">
          {/* Decorative grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center p-8 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
              <FaMapMarkerAlt size={20} />
            </div>

            <h3 className="text-lg font-bold text-black">
              Balai Kota Among Tani
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-muted-light">
              Jl. Panglima Sudirman No. 507,
              Pesanggrahan, Kecamatan Batu,
              Kota Batu, Jawa Timur.
            </p>

            <p className="mt-3 text-xs text-muted-light">
              -7.8712, 112.5271
            </p>

            <a
              href="https://maps.google.com/?q=-7.8712,112.5271"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-lg border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}