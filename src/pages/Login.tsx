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
import { useEffect } from "react";

const Login = () => {
  const handleLogin = () => {
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    if (username !== "admin" || password !== "admin") {
      alert("Usuário ou senha inválidos");
      return;
    }

    sessionStorage.setItem("isAuthenticated", "true");
    window.location.href = "/";
  };

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen dark">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>CRB Inventory</CardTitle>
          <CardDescription>Admin</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Usuário</Label>
                <Input
                  id="username"
                  placeholder="Usuário"
                  autoComplete="username"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Senha"
                  autoComplete="current-password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="w-full" onClick={handleLogin}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
