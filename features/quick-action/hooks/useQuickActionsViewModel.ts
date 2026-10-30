import { useQuery } from "@tanstack/react-query";
import { getAllQuickActions } from "../repository/quick-action-repository";

export function useQuickActionsViewModel() {
  const query = useQuery({
    queryKey: ["quick-actions"],
    queryFn: getAllQuickActions,
  });

  return {
    actions: query.data ?? [],
    isLoading: query.isLoading,
    error: query.error,
    refetch: query.refetch,
  };
}
