import { createItem } from "@/api/inventory";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const NewItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemThreshold, setItemThreshold] = useState(0);
  const [categoryId, setCategoryId] = useState("");

  const handleCreateItem = () => {
    const body = {
      name: itemName,
      description: itemDescription,
      stock_quantity: itemQuantity,
      minimum_threshold: itemThreshold,
      category_id: categoryId,
    };

    const res = createItem(body);

    if (res) {
      alert("Item adicionado com sucesso!");
      window.location.href = "/itens";
    } else {
      alert("Erro ao adicionar item!");
    }
  };

  return (
    <>
      <Navbar activeMenu={"itens"} />
      <div className="flex justify-center items-center h-screen dark">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Adicionar Novo Item</CardTitle>
            <CardDescription>Preencha os detalhes do novo item</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="itemName">Nome do Item</Label>
                  <Input
                    id="itemName"
                    placeholder="Nome do Item"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="itemDescription">Descrição</Label>
                  <Input
                    id="itemDescription"
                    placeholder="Descrição"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="categoryId">Id da Categoria</Label>
                  <Input
                    id="categoryId"
                    placeholder="Id da Categoria"
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="itemQuantity">Quantidade</Label>
                  <Input
                    id="itemQuantity"
                    type="number"
                    placeholder="Quantidade"
                    value={itemQuantity}
                    onChange={(e) => setItemQuantity(Number(e.target.value))}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="itemThreshold">Limiar Mínimo</Label>
                  <Input
                    id="itemThreshold"
                    type="number"
                    placeholder="Limiar Mínimo"
                    value={itemThreshold}
                    onChange={(e) => setItemThreshold(Number(e.target.value))}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="w-full" onClick={handleCreateItem}>
              Adicionar Item
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export { NewItem };
