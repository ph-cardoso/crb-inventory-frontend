import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SelectTrigger } from "@radix-ui/react-select";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

interface PaginationProps {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  total: number;
}

interface ItemTableDataProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[] | [];
  pagination: PaginationProps;
}

const ItemTableData = <TData, TValue>({
  columns,
  data,
  pagination,
}: ItemTableDataProps<TData, TValue>) => {
  console.log("pagination", pagination);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            pagination.setPage(pagination.page - 1);
          }}
          disabled={pagination.page === 1}
        >
          Página anterior
        </Button>
        <Button variant="outline" size="sm" disabled>
          {pagination.page}
        </Button>
        <Button variant="outline" size="sm" disabled>
          ...
        </Button>
        <Button variant="outline" size="sm" disabled>
          {Math.ceil(pagination.total / pagination.pageSize)}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            pagination.setPage(pagination.page + 1);
          }}
          disabled={
            pagination.page ===
            Math.ceil(pagination.total / pagination.pageSize)
          }
        >
          Próxima página
        </Button>
      </div>
    </>
  );
};

export default ItemTableData;
