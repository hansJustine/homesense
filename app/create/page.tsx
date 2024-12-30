import React from "react";
import CreateForm from "../ui/create/CreateForm";

export default function page() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-evenly bg-yellow-100 mt-5 gap-10">
      <section className="flex items-center flex-col gap-3 justify-center align-center">
        <h1 className="font-bold text-txl tracking-tight lg:text-3xl">
          ADD KILLO-WATT
        </h1>
        <CreateForm />
      </section>
      <section className="h-full items-center flex flex-col bg-blue-100">
        <h1 className="font-bold text-txl tracking-tight lg:text-3xl">
          ADD APPLIANCES
        </h1>
        <CreateForm />
      </section>
    </div>
  );
}
