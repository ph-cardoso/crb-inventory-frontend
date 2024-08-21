import { getCategory } from "@/api/inventory"
import { useQuery } from "@tanstack/react-query"

export const useCategory = (categoryId: string) =>
{
  const query = useQuery({
    queryKey: ["category", { categoryId }],
    queryFn: async () => await getCategory(categoryId),
    staleTime: 1000 * 5,
    refetchOnWindowFocus: false,
    retry: 0
  });

  return query
}

