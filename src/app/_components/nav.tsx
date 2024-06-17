"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useLocation } from "react-router-dom"

// Maintain for potential additional dropdown items
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Lawn Care",
    href: "/",
    description:
      "",
  },
  {
    title: "Tree Removal",
    href: "/",
    description:
      "",
  },
  {
    title: "Snow Removal",
    href: "/",
    description:
      "",
  },{
    title: "Hardscaping",
    href: "/",
    description:
      "",
  },
  {
    title: "Artificial Turf",
    href: "/",
    description:
      "",
  },
  {
    title: "Commercial",
    href: "/",
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
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <NavigationMenu className={isOpen ? "flex-col bg-white" : "" + "grow-0 shrink-0"}>
            <NavigationMenuList className="hidden md:flex py-2">
                {links.map((link, index) => {
                  return link == "Services" ? 
                  (
                    <NavigationMenuItem className="border-b-2 border-white hover:border-black focus:border-black" key={link}>
                        <NavigationMenuTrigger>{link}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="w-[150px]">
                            {components.map((component) => (
                              <ListItem key={component.href} title={component.title} href={component.href} className="py-2">
                                {component.description}
                              </ListItem>
                            ))} 
                          </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                  : (
                    <NavigationMenuItem className="border-b-2 border-white hover:border-black focus:border-black" key={link}>
                        <Link href={link == "Home" ? "/" : link == "About Us" ? "/about" : `/${link.toLowerCase()}`} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {link}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                )})}
            </NavigationMenuList>

            <NavigationMenuItem className="flex md:hidden m-0.5">
                <Button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center justify-center p-2 h-fit w-fit rounded-none bg-white text-black shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </Button>
            </NavigationMenuItem>
            <NavigationMenuList className={`${isOpen ? 'flex' : 'hidden'} md:hidden`} id="mobile-menu">
                <NavigationMenuItem className="mx-8 px-2 pt-2 pb-3 space-y-4 sm:px-3">
                {links.map((link) => (
                        <Link href={link == "Home" ? "/" : `/${link.toLowerCase()}`} key={link} legacyBehavior passHref>
                            <NavigationMenuLink className="block px-2 text-left text-base font-medium border-l-2 border-white hover:border-black active:border-black focus:border-black" onClick={toggleMenu}>
                                {link}
                            </NavigationMenuLink>
                        </Link>
                ))}
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

// Maintain for potential additional dropdown items

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