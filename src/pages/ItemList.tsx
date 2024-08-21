import { ItemTable } from "@/components/ItemTable";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetItemsList } from "@/query/items";
import { useState } from "react";
import { CirclePlus } from "lucide-react";

const ItemList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { isLoading, isSuccess, data } = useGetItemsList(page, pageSize);

  return (
    <div className="min-h-screen">
      <Navbar activeMenu="itens" />
      <div className="bg-gray-200 p-4">
        <Card className="p-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Estoque</CardTitle>
              <Button
                className="w-40"
                onClick={() => (window.location.href = "/new-item")}
              >
                <CirclePlus className="mr-2" />
                Adicionar item
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading && <div>Carregando...</div>}
            {isSuccess && (
              <ItemTable
                data={data}
                page={page}
                pageSize={pageSize}
                setPage={setPage}
                setPageSize={setPageSize}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { ItemList };
