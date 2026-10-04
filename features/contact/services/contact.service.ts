import { ApiResponse } from "@/shared/models/api-response";

import { ContactFormData } from "../schemas/contact.schema";
import { ContactMessageReceipt } from "../types/contact.type";

export async function postContactMessage(
  data: ContactFormData,
): Promise<ApiResponse<ContactMessageReceipt>> {
  return new ApiResponse(
    {
      id: Date.now(),
      nama: data.nama,
    },
    "Pesan berhasil dikirim.",
  );
}
