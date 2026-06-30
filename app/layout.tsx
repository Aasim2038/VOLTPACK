import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoltPack - Premium PC Repacks",
  description: "Download highly compressed, verified PC games.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050508] text-white antialiased">
        {/* Global Navbar wrapper */}
        <Navbar />
        
        {/* Active Page/Route Content */}
        {children}
        
        {/* Global Footer wrapper */}
        <Footer />
      </body>
    </html>
  );
}