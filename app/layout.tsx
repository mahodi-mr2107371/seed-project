import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToggleTheme from "@/components/toggle-theme";
import Header from "@/components/header";
import { Menu } from "lucide-react";
import NavToggle from "@/components/nav-toggle";
import NavComponent from "@/components/nav-component";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
      >
        <div className="font-sans h-full w-full flex flex-col items-center justify-start p-0">
          <Header>

            {/* Theme toggle Desktop */}
            <ToggleTheme screenBased="hidden md:inline"></ToggleTheme>

          </Header>

          {/* Theme Toggle Mobile */}
          <ToggleTheme screenBased="bottom-5 right-5 fixed md:hidden"></ToggleTheme>

          {/* Main Content + Nav */}
          <div className="w-full h-full flex items-start justify-start flex-1">

            <NavComponent className="h-[90%]" classNameNavBar=""></NavComponent>
            <main className="h-full w-full p-5">
              {children}
            </main>
          </div>

          {/* Footer */}
          <footer className="w-full flex justify-center">
            footer
          </footer>
        </div>
      </body>
    </html>
  );
}
