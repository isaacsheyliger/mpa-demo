import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Nav } from "./_components/nav";
import { Footer } from "./_components/footer";
import "./globals.css";

const lato = Lato({ 
  weight: "400",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "MB Designs",
  description: "Design, Develop, and Deploy fast, responsive, and sleek websites for your small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full box-border">
        <body className={`m-0 h-full box-border ${lato.className}`}>
            <div className="wrapper min-h-full box-border flex flex-col">
                <Nav aria-label="Main Navigation" />
                {children}
                <Footer aria-label="Footer" />
            </div>
        </body>
    </html>
  );
}
