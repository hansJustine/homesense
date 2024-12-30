import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:flex-row flex-col md:overflow-hidden">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  );
}
