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
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, url, title, children, ...props }, ref) => {
  return (
    <li className="hover:underline text-taxSecondary">
      <NavigationMenuLink asChild>
        <Link
          to={props.url}
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

export default function DesktopMenu({ menu }) {
  let navigate = useNavigate();
  const hasSubMenu = menu.subMenu?.length > 0;
  const pageGo = (url) => {
    console.log("url", url);
    navigate(url)
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
              {menu.subMenu.map((submenu, i) => (
                <ListItem
                  key={i}
                  url={submenu.url}
                  onClick={() => pageGo(submenu.url)}
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
          <div onClick={() => pageGo(menu.url)}>{menu.name}</div>
        </NavigationMenuLink>
      )}
    </NavigationMenuItem>
  );
}
