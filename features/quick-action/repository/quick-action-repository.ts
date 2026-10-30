import type { QuickAction } from "../models/quick-action.types";
import { toQuickAction } from "../models/quick-action.mapper";
import { fetchQuickActions } from "../services/quick-action.service";

export async function getAllQuickActions(): Promise<QuickAction[]> {
  const data = await fetchQuickActions();
  return data.map(toQuickAction);
}