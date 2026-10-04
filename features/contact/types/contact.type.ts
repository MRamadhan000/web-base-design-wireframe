export interface ContactInfoItem {
  title: string;
  lines: string[];
}

export interface ContactMessageReceipt {
  id: number;
  nama: string;
}

export interface ContactNotificationData {
  variant: "success" | "error";
  title: string;
  message: string;
}