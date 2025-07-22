import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToggleTheme from "@/components/toggle-theme";
import Header from "@/components/header";
import { Menu } from "lucide-react";
import NavToggle from "@/components/nav-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "seed app",
  description: "Made by Mahodi Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
      >
        <Header>
          <ToggleTheme screenBased="hidden md:inline"></ToggleTheme>
        </Header>
        {children}
      </body>
    </html>
  );
}
