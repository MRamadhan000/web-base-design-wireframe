import { useState, useCallback } from "react";
import { QUICK_ACTIONS_DATA } from "../models/quick-action.data";
import { QuickActionItem } from "../models/quick-action.types";

export function useQuickActionsViewModel() {
  const [actions] = useState<QuickActionItem[]>(QUICK_ACTIONS_DATA);

  const handleActionClick = useCallback((action: QuickActionItem) => {
    console.log(`Action clicked: ${action.title}`);
  }, []);

  return {
    actions,
    handleActionClick,
  };
}
