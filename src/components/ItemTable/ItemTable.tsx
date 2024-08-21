import { columns } from "./subcomponents/ItemTableColumns";
import ItemTableData from "./subcomponents/ItemTableData";
import { ItemListResponse } from "@/api/inventory.types";

interface ItemTableProps {
  data: ItemListResponse;
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const ItemTable = ({
  data,
  page,
  pageSize,
  setPage,
  setPageSize,
}: ItemTableProps) => {
  const pagination = {
    page,
    pageSize,
    setPage,
    setPageSize,
    total: data["total"],
  };

  return (
    <div className="container mx-auto py-10">
      <ItemTableData
        columns={columns}
        data={data["result"]}
        pagination={pagination}
      />
    </div>
  );
};

export { ItemTable };
