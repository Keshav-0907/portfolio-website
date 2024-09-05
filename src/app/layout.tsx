import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keshav Malik",
  description: "Breaking and Building",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="text-[#CAC8C5] font-inika flex justify-center w-full">
          <div className="md:w-1/2 w-full">
            <Header />
            <Hero />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
