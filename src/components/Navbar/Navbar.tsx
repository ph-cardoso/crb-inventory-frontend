import { ThemeModeToggle } from "../Theme/ThemeModeToggle";
import { MainNavbar } from "./subcomponents/MainNavbar";
import { UserNavbar } from "./subcomponents/UserNavbar";

type NavbarProps = {
  activeMenu: string;
};

const Navbar = ({ activeMenu }: NavbarProps) => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNavbar className="mx-6" activeMenu={activeMenu} />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeModeToggle />
          <UserNavbar />
        </div>
      </div>
    </div>
  );
};

export { Navbar };
