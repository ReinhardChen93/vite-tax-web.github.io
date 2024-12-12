import React from "react";
import {
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/utils";
import { useNavigate, Link } from "react-router-dom";
import type { MenuItemType } from '@/components/Navbar';



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, title, children, ...props }, ref) => {
  return (
    <li className="hover:underline text-taxSecondary">
      <NavigationMenuLink asChild>
        <Link
          to={href}
          ref={ref}
          className={cn(
            "select-none space-y-1 leading-none no-underline outline-none transition-colors ",
            className
          )}
          {...props}
        >
          <div className="text-[0.875rem] font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-2xl mt-0 text-white hover:text-taxSecondary focus:bg-accent focus:text-taxSecondary">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface DesktopMenuProps {
  menu: MenuItemType
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menu }) => {
  const navigate = useNavigate();

  const hasSubMenu = Array.isArray(menu?.subMenu) && menu.subMenu.length > 0;

  //* 路由跳转
  const pageGo = (href: string) => {
    if (href)
      navigate(href)
  };

  return (
    <NavigationMenuItem className="relative">
      {hasSubMenu ? (
        <>
          <NavigationMenuTrigger className="text-[1.375rem] hover:text-taxSecondary hover:bg-none bg-transparent">
            {menu.name}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="top-[4rem]">
            <ul className="w-[15.625rem] bg-taxPrimary flex flex-col p-5 gap-y-5">
              {menu.subMenu?.map((submenu, i) => (
                <ListItem
                  key={i}
                  href={submenu.href}
                // onClick={() => pageGo(submenu.href)}
                >
                  {submenu.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "text-[1.375rem] hover:text-taxSecondary hover:bg-none bg-transparent"
          )}
        >
          <div onClick={() => pageGo(menu.href)}>{menu.name}</div>
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  );
}
export default DesktopMenu