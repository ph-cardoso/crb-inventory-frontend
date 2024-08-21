import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const MainNavbar = ({
  className,
  activeMenu,
  ...props
}: React.HTMLAttributes<HTMLElement> & { activeMenu?: string }) => {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        to="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          { "text-muted-foreground": activeMenu !== "home" },
        )}
      >
        Home
      </Link>
      <Link
        to="/new-item"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          { "text-muted-foreground": activeMenu !== "itens" },
        )}
      >
        Novo Item
      </Link>
    </nav>
  );
};

export { MainNavbar };
