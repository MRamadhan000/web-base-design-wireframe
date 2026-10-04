import { IconType } from "react-icons";

export interface QuickActionItem {
  id: number;
  title: string;
  description: string;
  icon: IconType;
  href: string;
}
