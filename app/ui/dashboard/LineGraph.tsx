"use client";

import React from "react";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Kwh } from "@/sanity/types";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-5))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function LineGraph({ kwhs }: { kwhs: Kwh }) {
  //   console.log("LINE GRAPH: ", JSON.stringify(kwhs, null, 2));
  console.log(typeof kwhs);
  return (
    <ChartContainer className="" config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={kwhs}
        margin={{
          right: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => dateToMonth(value)}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="kwh"
          type="natural"
          stroke="var(--color-desktop)"
          strokeWidth={2}
          dot={{
            fill: "var(--color-desktop)",
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}

function dateToMonth(date: string) {
  const newDate = new Date(date); // 2009-11-10
  const month = newDate.toLocaleString("default", { month: "short" });
  return month;
}
