import { ContactFormData } from "../schemas/contact.schema";
import { ContactMessageReceipt } from "../types/contact.type";
import { postContactMessage } from "../services/contact.service";

export async function createContactMessage(
  data: ContactFormData,
): Promise<ContactMessageReceipt> {
  const response = await postContactMessage(data);
  return response.data;
}
