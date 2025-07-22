import Header from "@/components/header";
import NavBar from "@/components/nav-bar";
import NavComponent from "@/components/nav-component";
import NavToggle from "@/components/nav-toggle";
import ToggleTheme from "@/components/toggle-theme";
import Image from "next/image";
import Dashboard from "./dashboard/page";

export default function Home() {
  const navShow = false;
  return (
    <div className="font-sans h-full w-full flex flex-col items-center justify-start p-0">
      {/* Showing dashboard by default */}
      <Dashboard></Dashboard>
    </div >
  );
}