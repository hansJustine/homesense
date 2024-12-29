import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ElecChart from "../ui/dashboard/ElecChart";
import AppliancesChart from "../ui/dashboard/AppliancesChart";

export default function page() {
  return (
    <div>
      <h1>page</h1>
      <Button className="bg-blue-500 hover:bg-blue-600">Button</Button>
      <div className="p-2 flex flex-col md:flex-row gap-5 mt-5">
        <ElecChart />
        <AppliancesChart />
      </div>
    </div>
  );
}
