import React from "react";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex flex-col items-center p-7 overflow-auto h-full w-full">
      <div className="bg-blue-100 !w-20 !h-20 !md:w-200 !md:h-200">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Homesense Logo"
        />
      </div>
      <div className="flex flex-row md:flex-col justify-evenly bg-blue-100 w-full gap-5 mt-1">
        <h3 className="font-semibold tracking-tight">Dashboard</h3>
        <h1>Link1</h1>
        <h1>Link1</h1>
        <h1>Link1</h1>
        <h1>Link1</h1>
      </div>
    </div>
  );
}
