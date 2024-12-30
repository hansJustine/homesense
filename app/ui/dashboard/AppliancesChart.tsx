import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieGraph from "./PieGraph";
import { sanityFetch } from "@/sanity/lib/live";
import { GET_APPLIANCES } from "@/sanity/lib/queries";

export default async function AppliancesChart() {
  const { data: appliances } = await sanityFetch({ query: GET_APPLIANCES });
  console.log("appliances", appliances);
  return (
    <>
      <Card className="flex flex-col basis-1/2">
        <CardHeader className="items-center pb-0">
          <CardTitle>Appliances Consumption</CardTitle>
          {/* <CardDescription>January - June 2024</CardDescription> */}
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <PieGraph appliances={appliances} />
        </CardContent>
      </Card>
    </>
  );
}
