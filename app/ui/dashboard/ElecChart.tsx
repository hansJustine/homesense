import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LineGraph from "./LineGraph";
// import { client } from "@/sanity/lib/client";
import { GET_KWHS } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function ElecChart() {
  //   const kwhs = await client.fetch(GET_KWHS);

  //REAL TIME UPDATE
  const { data: kwhs } = await sanityFetch({ query: GET_KWHS });

  return (
    <>
      <Card className="basis-1/2 flex-grow">
        <CardHeader>
          <CardTitle>Line Chart - Dots</CardTitle>
          <CardDescription>Kilowatt-hour Monthly</CardDescription>
        </CardHeader>
        <CardContent>
          <LineGraph kwhs={kwhs} />
        </CardContent>
      </Card>

      <SanityLive />
    </>
  );
}
