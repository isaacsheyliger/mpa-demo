import type { Metadata } from "next";
import Head from "next/head";
import { Quattrocento } from "next/font/google";
import { Quattrocento_Sans } from "next/font/google";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";
import "./globals.css";

const serif = Quattrocento({
    weight: "400",
    subsets: ["latin"],
});

const sans = Quattrocento_Sans({ 
    weight: "400",
    subsets: ["latin"] 
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
    <html lang="en" className="h-full box-border">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Quattrocento:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className={`m-0 h-full box-border ${sans.className}`}>
            <div className="wrapper min-h-full box-border flex flex-col">
                <Nav aria-label="Main Navigation" />
                {children}
                <Footer aria-label="Footer" />
            </div>
        </body>
    </html>
  );
}
