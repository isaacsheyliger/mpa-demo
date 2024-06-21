"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "../_hooks/use-media-query"
import yourlogo from "../../../public/yourlogotext.svg"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Lawn Care",
    href: "/services/lawn-care",
    description:
      "",
  },
  {
    title: "Tree Removal",
    href: "/services/tree-removal",
    description:
      "",
  },
  {
    title: "Snow Removal",
    href: "/services/snow-removal",
    description:
      "",
  },{
    title: "Hardscaping",
    href: "/services/hardscaping",
    description:
      "",
  },
  {
    title: "Artificial Turf",
    href: "/services/artificial-turf",
    description:
      "",
  },
  {
    title: "Commercial",
    href: "/services/commercial",
    description:
      "",
  },
]

const links = ["Home", "About Us", "Services", "Gallery", "Contact"]

/**
 * Navigation menu component with Home, About, Portfolio, Services, and Contact links.
 * Includes a responsive hamburger dropdown for mobile view.
 * @returns {JSX.Element} Navigation menu.
 */
export function Nav() {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    return (
        isDesktop ? (
        <NavigationMenu>
            <NavigationMenuItem className="hidden md:flex list-none">
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Image src={yourlogo} alt="logo" width={150} height={150} />
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuList className="hidden md:flex pb-2">
                {links.map((link, index) => {
                    return link == "Services" ? (
                        <NavigationMenuItem
                            className="after:duration-500 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100"
                            key={link}
                        >
                            <NavigationMenuTrigger>{link}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-[150px]">
                                    {components.map((component) => (
                                        <ListItem
                                            key={component.href}
                                            title={component.title}
                                            href={component.href}
                                            className="py-2"
                                        ></ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem
                            className="after:duration-500 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100"
                            key={link}
                        >
                            <Link
                                href={
                                    link == "Home"
                                        ? "/"
                                        : link == "About Us"
                                        ? "/about"
                                        : `/${link.toLowerCase()}`
                                }
                                legacyBehavior
                                passHref
                            >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {link}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
        ) : (
        <div className="h-[56px]">
            <Drawer direction="right">
                <DrawerTrigger>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 m-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>


                </DrawerTrigger>
                <DrawerTitle className="sr-only">Main Menu</DrawerTitle>
                <DrawerContent className="space-y-2 pt-8">
                    <Image className="mb-4 pl-6" src="/logotext.svg" alt="logo" width={150} height={150} />
                    {links.map((link) => (
                    <Link
                    className="block px-2 text-left text-base font-medium border-l-2 border-white hover:border-primary active:border-primary focus:border-primary"
                    href={
                        link == "Home"
                            ? "/"
                            : link == "About Us"
                            ? "/about"
                            : `/${link.toLowerCase()}`
                    }
                    key={link}
                    legacyBehavior
                    passHref
                    >
                        <div className="flex flex-row-reverse justify-end pl-4 ease-out after:duration-500 after:block after:w-0.5 after:h-full after:origin-top-left after:scale-y-0 after:bg-primary after:transition-transform after:hover:origin-top-left after:hover:scale-y-100 after:focus:origin-top-left after:focus:scale-y-100 after:active:origin-top-left after:active:scale-y-100">
                            <p className="pl-2">{link}</p>    
                        </div>
                    </Link>
                    ))}
                </DrawerContent>
            </Drawer>
        </div>
        )
    );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"