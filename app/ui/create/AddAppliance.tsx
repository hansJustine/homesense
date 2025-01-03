"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createAppliance } from "@/lib/actions";

export default function AddAppliance() {
  const [appl, setAppl] = useState<string>();
  const [watts, setWatts] = useState<number>();
  const [usageHour, setUsageHour] = useState<number>();
  const [priceKwh, setPriceKwh] = useState<number>();

  const handleFormSubmit = async () => {
    const watts2 = watts || 0;
    const wattsToKw = watts2 / 1000;
    const data = { appliance: appl, powerKw: wattsToKw, usageHour, priceKwh };
    await createAppliance(data);
    console.log(data);
  };

  return (
    <form
      action={() => {
        handleFormSubmit();
      }}
      className="flex flex-col gap-2"
    >
      <div>
        <label
          htmlFor="appliance"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Appliance name
        </label>
        <Input
          id="appliance"
          name="appliance"
          type="text"
          required
          value={appl}
          onChangeCapture={(e) => setAppl(e.currentTarget.value)}
          placeholder="Appliance"
          className="w-64 w-64"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="powerKw"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Power (watts)
        </label>
        <Input
          id="powerKw"
          name="powerKw"
          type="number"
          required
          value={watts}
          onChangeCapture={(e) => setWatts(Number(e.currentTarget.value))}
          placeholder="20 watts"
          className="w-64 w-64"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="usageHour"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Usage (hours per day)
        </label>
        <Input
          id="usageHour"
          name="usageHour"
          type="number"
          required
          value={usageHour}
          onChangeCapture={(e) => setUsageHour(Number(e.currentTarget.value))}
          placeholder="How long?"
          className="w-64 w-64"
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="priceKwh"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Price rate ($/kWh)
        </label>
        <Input
          id="priceKwh"
          name="priceKwh"
          type="number"
          required
          value={priceKwh}
          onChangeCapture={(e) => setPriceKwh(Number(e.currentTarget.value))}
          placeholder="$0.13/kWh"
          className="w-64 w-64"
        />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 w-64 mt-2">
        Submit
      </Button>
    </form>
  );
}
