import { ItemTable } from "@/components/ItemTable";
import { Navbar } from "@/components/Navbar";
import { useTheme } from "@/components/Theme/ThemeProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Home = () => {
  const themeContext = useTheme();
  return (
    <div className="min-h-screen">
      <Navbar activeMenu="home" />
    </div>
  );
};

export { Home };
