import NavBar from "@/components/nav-bar";
import NavToggle from "@/components/nav-toggle";
import ToggleTheme from "@/components/toggle-theme";
import Image from "next/image";

export default function Home() {
  return (
    // dark:bg-gray-800 bg-gray-100 text-gray-800 dark:text-gray-100
    <div className="font-sans mt-2 flex-wrap flex items-center justify-start p-2">
      {/* Theme Toggle Mobile */}
      <ToggleTheme screenBased="bottom-5 right-5 fixed md:hidden"></ToggleTheme>

      {/* Main Content + Nav */}
      <div className="w-full flex items-start justify-between gap-4 m-20 p-0">
        <NavBar></NavBar>

        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          Main
        </main>
      </div>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>

    </div>
  );
}
