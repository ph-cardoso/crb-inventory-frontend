import { TItem } from "@/types/Item"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<TItem>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "category_id",
    header: "Categoria",
  },
  {
    accessorKey: "stock_quantity",
    header: "Estoque",
  },
]
