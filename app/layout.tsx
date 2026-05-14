import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/ui/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M.A.K.A. E-Portfolio System | Bicol University Gubat Campus",
  description: "Official e-portfolio of the M.A.K.A project (Made to Aspire Kabataan in Adhering to the Filipino Core Values) for Bicol University Gubat Campus, showcasing student profiles, prefaces, and core Filipino values.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col selection:bg-[#d4af37] selection:text-black">
        <Navbar />
        <div className="flex-1 flex flex-col pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
