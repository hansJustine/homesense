"use client";

import React from "react";

import { Label, Pie, PieChart } from "recharts";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Appliance } from "@/sanity/types";
import {
  calculateConsumpPerDay,
  calculateConsumpPerMonth,
} from "@/lib/applianceConsump";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#3D2774" },
  { browser: "safari", visitors: 200, fill: "#3D2774" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

interface configType {
  [key: string]: { label: string; color: string };
}

export default function PieGraph({ appliances }: { appliances: Appliance[] }) {
  const totalPrice = React.useMemo(() => {
    return appliances.reduce(
      (acc, curr) =>
        acc +
        calculateConsumpPerDay(curr.powerKw, curr.usageHour, curr.priceKwh),
      0
    );
  }, [appliances]);

  const newData = React.useMemo(() => {
    const data: Array<{}> = [];
    appliances.map((curr) => {
      const price = calculateConsumpPerDay(
        curr.powerKw,
        curr.usageHour,
        curr.priceKwh
      );
      const appliance = curr.appliance;
      const fill = curr.color;
      data.push({ appliance, price, fill });
    });
    return data;
  }, [appliances]);

  const chartConfig = React.useMemo(() => {
    const chartConfig: configType = {};
    appliances.map((curr) => {
      const name = curr.appliance || "";
      const color = curr.color || "#000";
      chartConfig[name] = { label: name, color: color };
    });
    console.log("CONFIG", chartConfig);
    return chartConfig;
  }, [appliances]);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={newData}
          dataKey="price"
          nameKey="appliance"
          innerRadius={65}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      ${totalPrice.toLocaleString()}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      price per day
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="appliance" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
}
