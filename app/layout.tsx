import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxygen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Keshav Malik",
  description: "Keshav Malik's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oxygen.variable} antialiased`}
      >
          <div className="md:w-1/2 mx-auto py-5 px-4">
            <Header />
            {children}
            <Footer />
          </div>
      </body>
    </html>
  );
}
