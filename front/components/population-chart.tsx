"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Population } from "@/types";

export const description = "A linear area chart";

const chartConfig = {
  value: {
    label: "Population",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function PopulationChart({ population }: { population: Population }) {
  const chartData = population.data?.populationCounts;

  if (!chartData) {
    return <p>No population data available</p>;
  }

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Population</CardTitle>
        <CardDescription>Showing the population growth</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="value"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
