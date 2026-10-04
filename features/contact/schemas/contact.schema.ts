import { z } from "zod";

export const contactSchema = z.object({
  nama: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(100, "Nama maksimal 100 karakter"),

  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),

  telepon: z
    .string()
    .optional()
    .or(z.literal("")),

  subjek: z
    .string()
    .min(3, "Subjek minimal 3 karakter")
    .max(150, "Subjek maksimal 150 karakter"),

  pesan: z
    .string()
    .min(10, "Pesan minimal 10 karakter")
    .max(1000, "Pesan maksimal 1000 karakter"),
});

export type ContactFormData = z.infer<typeof contactSchema>;