import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Nama lengkap wajib diisi"),
  email: z.string().email("Format email tidak valid"),
  phone: z.string().min(1, "Nomor telepon wajib diisi").max(20, "Nomor telepon terlalu panjang"),
  subject: z.string().min(1, "Subjek wajib diisi").max(100, "Subjek terlalu panjang"),
  message: z.string().min(1, "Pesan wajib diisi").max(1000, "Pesan terlalu panjang"),
});

export type ContactFormData = z.infer<typeof contactSchema>;