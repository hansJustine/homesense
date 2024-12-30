"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { createKw } from "@/lib/actions";

export default function CreateForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [kw, setKw] = useState<string>();

  const handleFormSubmit = async () => {
    const newDate = date?.toISOString().split("T")[0];
    console.log(newDate, kw);
    const newData = { kwh: Number(kw), date: newDate };
    const res = await createKw(newData);
    console.log(res, "FORM RES");
    setDate(new Date());
    setKw("");
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
          htmlFor="kw"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Enter killo-watt reading for this month.
        </label>
        <Input
          id="kwh"
          name="kwh"
          type="number"
          required
          value={kw}
          onChangeCapture={(e) => setKw(e.currentTarget.value)}
          placeholder="Killo-watt"
          className="w-64 w-64"
        />
      </div>
      <div>
        <label
          htmlFor="Month"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Enter Month
        </label>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-64"
        />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 w-64 mt-2">
        Submit
      </Button>
    </form>
  );
}
