import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

export const CustomMenu = () => {

    const {pathname} = useLocation();

    const isActive = (path: string)=>{
        return pathname === path;
    }
    
  return (
    <NavigationMenu className="py-5">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link to="/" />}
            className={cn(isActive("/") &&  "bg-slate-400 ","p-2 rounded-md")}
          >
            Inicio
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link to="/search" />}
            className={cn(isActive("/search") &&  "bg-slate-400 ", "p-2 rounded-md")}
          >
            Buscar Supers
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
