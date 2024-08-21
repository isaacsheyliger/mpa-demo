import type { Metadata } from "next";
import Head from "next/head";
import { Quattrocento } from "next/font/google";
import { Quattrocento_Sans } from "next/font/google";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";
import "./globals.css";
import { checkPrimeSync } from "crypto";

const serif = Quattrocento({
    weight: "400",
    variable: "--font-serif",
    subsets: ["latin"],
});

const serifBold = Quattrocento({
    weight: "700",
    variable: "--font-serif-bold",
    subsets: ["latin"],
});

const sans = Quattrocento_Sans({ 
    weight: "400",
    variable: "--font-sans",
    subsets: ["latin"] 
});

const sansBold = Quattrocento_Sans({
    weight: "700",
    variable: "--font-sans-bold",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: `Home | Contractor Demo Site`,
    description: "Design, Develop, and Deploy fast, responsive, and sleek websites for your small business",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${sansBold.variable} ${serif.variable} ${serifBold.variable} h-full box-border`}>
        <body className={`m-0 h-full box-border`}>
            <div className="wrapper min-h-full box-border flex flex-col">
                <Nav aria-label="Main Navigation" />
                {children}
                <Footer aria-label="Footer" />
            </div>
        </body>
    </html>
  );
}
