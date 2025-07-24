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