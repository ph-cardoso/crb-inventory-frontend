import { getItemsList } from "@/api/inventory"
import { useQuery } from "@tanstack/react-query"

export const useGetItemsList = (page: number, pageSize: number) =>
{
  const query = useQuery({
    queryKey: ["items", { page, pageSize }],
    queryFn: async () => await getItemsList(page, pageSize),
    staleTime: 1000 * 5,
    refetchOnWindowFocus: false,
    retry: 0
  });

  return query
}

