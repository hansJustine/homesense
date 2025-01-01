import React from "react";
import Image from "next/image";
import SideNavLink from "./SideNavLink";

export default function SideNav() {
  return (
    <div className="flex flex-col items-center p-7 overflow-auto h-full w-full">
      <div className="!w-20 !h-20 !md:w-200 !md:h-200">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="Homesense Logo"
        />
      </div>
      <div className="flex flex-row md:flex-col justify-evenly w-full gap-5 mt-1 md:mt-5">
        <SideNavLink />
      </div>
    </div>
  );
}
