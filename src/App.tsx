import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";

import { Login } from "@/pages/Login";
import { Home } from "@/pages/Home";
import { ItemList } from "@/pages/ItemList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewItem } from "@/pages/NewItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemList />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "itens",
    element: <ItemList />,
  },
  {
    path: "new-item",
    element: <NewItem />,
  },
]);

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
