"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
// import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { createKw } from "@/lib/actions";
import { Calendar } from "@nextui-org/calendar";
import { CalendarDate, parseDate } from "@internationalized/date";

export default function CreateForm() {
  // let curDate = new Date().toISOString().split("T")[0];
  let [date, setDate] = useState<CalendarDate>(
    parseDate(new Date().toISOString().split("T")[0])
  );
  const [kw, setKw] = useState<string>();

  const handleFormSubmit = async () => {
    const newDate = `${date.year}-${date.month}-${date.day}`;
    console.log(newDate, kw);
    const newData = { kwh: Number(kw), date: newDate };
    const res = await createKw(newData);
    console.log(res, "FORM RES");
    setDate(parseDate(new Date().toISOString().split("T")[0]));
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
      <div className="flex flex-col">
        <label
          htmlFor="date"
          className="scroll-m-20 text-1xl font-semibold tracking-tight"
        >
          Enter Month
        </label>
        {/* <Calendar
          mode="single"
          value={date}
          onChange={setDate}
          className="rounded-md border w-64"
        /> */}
        <Calendar aria-label="date" value={date} onChange={setDate} />
      </div>
      <Button className="bg-blue-500 hover:bg-blue-600 w-64 mt-2">
        Submit
      </Button>
    </form>
  );
}
