import type { Metadata } from "next";
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
