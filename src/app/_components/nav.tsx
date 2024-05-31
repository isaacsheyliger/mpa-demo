"use client"

import React from "react"
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

// Maintain for potential additional dropdown items
/*
const components: { title: string; href: string; description: string }[] = [
  {
    title: "",
    href: "/",
    description:
      "",
  },
] 
*/
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
        <NavigationMenu className={isOpen ? "flex-col" : "" + "grow-0 shrink-0"}>
            <NavigationMenuList className="sm:px-6 lg:px-8 hidden md:flex">
                <NavigationMenuItem className="hover:border-b-2 hover:border-black focus:border-b-2 focus:border-black">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            About
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/services" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Services
                        </NavigationMenuLink>
                    </Link>
                { // Maintain for potential additional dropdown items
                /*
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                        <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        >
                        {component.description}
                        </ListItem>
                    ))}
                    </ul>
                </NavigationMenuContent>
                */ }
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/pricing" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuItem className="-mr-2 flex md:hidden">
                <Button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md bg-white text-black shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    )}
                </Button>
            </NavigationMenuItem>
            <NavigationMenuList className={`${isOpen ? 'flex' : 'hidden'} md:hidden`} id="mobile-menu">
                <NavigationMenuItem className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-center rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Home</NavigationMenuLink>
                    </Link>
                    <Link href="/about" legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-center rounded-md text-base font-medium hover:text-white hover:bg-gray-700">About</NavigationMenuLink>
                    </Link>
                    <Link href="/portfolio" legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-center rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Portfolio</NavigationMenuLink>
                    </Link>
                    <Link href="/services" legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-center rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Services</NavigationMenuLink>
                    </Link>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink className="block px-3 py-2 text-center rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Contact</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

// Maintain for potential additional dropdown items
/*
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
*/