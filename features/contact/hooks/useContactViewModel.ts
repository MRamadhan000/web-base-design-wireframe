"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormData,
} from "../schemas/contact.schema";

import {
  ContactInfoItem,
  ContactNotificationData,
} from "../types/contact.type";
import { createContactMessage } from "../repositories/contact.repository";

export function useContactViewModel() {
  const [notification, setNotification] =
    useState<ContactNotificationData | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),

    defaultValues: {
      nama: "",
      email: "",
      telepon: "",
      subjek: "",
      pesan: "",
    },
  });

  const contactInfo: ContactInfoItem[] = [
    {
      title: "Alamat Kantor",
      lines: [
        "Balai Kota Among Tani, Jl. Panglima Sudirman No. 507, Pesanggrahan, Kec. Batu, Kota Batu",
      ],
    },

    {
      title: "Telepon / Fax",
      lines: [
        "(0341) 5025555",
        "(0341) 5025777 (Fax)",
      ],
    },

    {
      title: "Email Resmi",
      lines: [
        "info@batukota.go.id",
        "humas@batukota.go.id",
      ],
    },

    {
      title: "Jam Layanan",
      lines: [
        "Senin - Jumat",
        "08:00 - 16:00 WIB",
      ],
    },
  ];

  const handleSubmit = async (data: ContactFormData) => {
    setNotification(null);

    try {
      const receipt = await createContactMessage(data);
      form.reset();
      setNotification({
        variant: "success",
        title: "Pesan berhasil dikirim",
        message: `Terima kasih, ${receipt.nama}. Pesan Anda sudah tercatat.`,
      });
    } catch {
      setNotification({
        variant: "error",
        title: "Pesan gagal dikirim",
        message: "Terjadi kesalahan. Silakan coba kirim kembali.",
      });
    }
  };

  const dismissNotification = () => setNotification(null);

  return {
    form,
    contactInfo,
    handleSubmit,
    notification,
    dismissNotification,
  };
}