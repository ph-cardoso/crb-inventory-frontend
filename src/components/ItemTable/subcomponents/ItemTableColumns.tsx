import { Button } from "@/components/ui/button";
import { TItem } from "@/types/Item";
import { ColumnDef } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

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
    header: "Id da Categoria",
  },
  {
    accessorKey: "stock_quantity",
    header: "Quantidade em estoque",
  },
  {
    accessorKey: "minimum_threshold",
    header: "Limiar mínimo",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const navigate = useNavigate();
      return (
        <Button onClick={() => navigate(`/item/${row.original.id}`)}>
          Detalhar
        </Button>
      );
    },
  },
];
