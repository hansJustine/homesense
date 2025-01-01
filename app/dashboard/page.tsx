import React from "react";
import ElecChart from "../ui/dashboard/ElecChart";
import AppliancesChart from "../ui/dashboard/AppliancesChart";
import { SanityLive } from "@/sanity/lib/live";
import { inter } from "../ui/fonts";

export default function page() {
  return (
    <>
      <div>
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Dashboard
        </h2>
        <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}></h1>
        <div className="p-2 flex flex-col md:flex-row gap-5 mt-5">
          <ElecChart />
          <AppliancesChart />
        </div>
      </div>
      <SanityLive />
    </>
  );
}
