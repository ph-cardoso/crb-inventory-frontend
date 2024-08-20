import { TItem } from "@/types/Item";
import { columns } from "./subcomponents/ItemTableColumns";
import ItemTableData from "./subcomponents/ItemTableData";

function getData(): TItem[] {

  return [
    {
      "id": "ffabc524-1070-4c1e-8262-18553324ef9c",
      "name": "Item 6",
      "description": "Descrição do Item 6",
      "is_active": true,
      "category_id": "7facf8dc-9385-49e0-83fc-afc2426a1b68",
      "minimum_threshold": 7,
      "stock_quantity": 8,
      "created_at": "2024-07-29T06:32:27.456963Z",
      "updated_at": "2024-07-29T06:32:27.456963Z"
    },
    {
      "id": "fa95556d-3f89-4921-9c51-e58287044746",
      "name": "Item 49",
      "description": "Descrição do Item 49",
      "is_active": true,
      "category_id": "7facf8dc-9385-49e0-83fc-afc2426a1b68",
      "minimum_threshold": 9,
      "stock_quantity": 36,
      "created_at": "2024-07-29T06:32:27.456963Z",
      "updated_at": "2024-07-29T06:32:27.456963Z"
    },
    {
      "id": "fa0d2c4d-30c6-4144-9b1f-d6f5e0742a02",
      "name": "Item 43",
      "description": "Descrição do Item 43",
      "is_active": true,
      "category_id": "7facf8dc-9385-49e0-83fc-afc2426a1b68",
      "minimum_threshold": 6,
      "stock_quantity": 77,
      "created_at": "2024-07-29T06:32:27.456963Z",
      "updated_at": "2024-07-29T06:32:27.456963Z"
    },
  ]
}

const ItemTable = () => {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <ItemTableData columns={columns} data={data} />
    </div>
  );
}

export default ItemTable;