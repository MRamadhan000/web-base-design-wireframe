import { useQuery } from "@tanstack/react-query";
import { findAllQuickActions } from "../repositories/quick-action.repository";

export function useQuickActionsViewModel() {
  const query = useQuery({
    queryKey: ["quick-actions"],
    queryFn: findAllQuickActions,
  });

  return {
    actions: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
