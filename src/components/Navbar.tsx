import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import React from "react";
import { classesInfo, clubsInfo, membershipInfo, navlinks } from "@/constants";
import { Dumbbell, Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center px-2">
      <h1 className="flex flex-row items-center gap-2 font-poppins font-semibold text-4xl cursor-pointer">
        <a href="/">FitHub</a>
        <Dumbbell />
      </h1>

      <NavigationMenu className="sm:flex hidden justify-end items-center flex-1">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Membership</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {membershipInfo.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Clubs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {clubsInfo.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Classes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {classesInfo.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="cursor-pointer flex items-center gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="font-poppins flex flex-row items-center gap-1">
                FitHub <Dumbbell size={15} />
              </SheetTitle>
            </SheetHeader>
            <ul className="list-none flex flex-col justify-center items-center gap-4 mt-4 font-poppins">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <a href={`/${link.href}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
        <ModeToggle />
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "font-poppins block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="font-poppins text-sm font-medium leading-none">{title}</div>
            <p className="font-poppins line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
