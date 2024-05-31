import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Footer component that displays a logo, product links, company links, and a subscription form.
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 */
export function Footer() {
  return (
    <footer className="grow-0 shrink-0 bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
                <img src="/logo.png" alt="Logo" className="h-10" />
            </div>

            {/* Page Links */}
            <div className="flex justify-center md:justify-around">
                <div>
                    <h3 className="font-bold mb-2">Product</h3>
                    <ul>
                        <li><a href="/services" className="">Services</a></li>
                        <li><a href="/pricing" className="">Pricing</a></li>
                        <li><a href="/clients" className="">Clients</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Company</h3>
                    <ul>
                        <li><a href="/about" className="">About Us</a></li>
                        <li><a href="/contact" className="">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-center md:items-start">
                <h3 className="font-bold mb-2">Subscribe to our newsletter</h3>
                <form className="flex flex-row">
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 mb-2 text-black rounded"
                    />
                    <Button type="submit" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-700">
                        Subscribe
                    </Button>
                </form>
            </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div></div>
            {/* Legal */}
            <div className="flex flex-row">
                <p>
                    Copyright 2024 | MB Designs, LLC | <Link href="">Sitemap</Link>
                </p>
            </div>
            {/* Social Links */}
            <div className=""></div>
        </div>
    </footer>
  );
};