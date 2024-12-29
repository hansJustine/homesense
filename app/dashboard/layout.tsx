import React from "react";
import SideNav from "../ui/dashboard/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:flex-row flex-col md:overflow-hidden">
      <div className="w-full flex-none md:w-56 border-solid border-2 border-r-[#b0b0b0]-700 border-t-transparent">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  );
}
