"use client";
import { Bar, BarChart, CartesianGrid, Line, LineChart,  XAxis, } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export default function ChartOverView() {
  const chartData = [
    { month: "Janeiro", desktop: 186, mobile: 80 },
    { month: "Fevereiro", desktop: 248, mobile: 200 },
    { month: "Março", desktop: 237, mobile: 120 },
    { month: "Abril", desktop: 73, mobile: 190 },
    { month: "Maio", desktop: 209, mobile: 130 },
    { month: "Junho", desktop: 310, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#16a34a",
    },
  } satisfies ChartConfig;


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {/* gráfico de barras → vendas */}
      <Card>
        <CardHeader>
          <CardTitle>Visão Geral de Vendas</CardTitle>
          <CardDescription>Desempenho mensal de vendas</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Bar
                dataKey="desktop"
                fill={chartConfig.desktop.color}
                radius={4}
              />
            </BarChart>
          </ChartContainer>
          <CardFooter>
            +12% em relação ao mês passado
          </CardFooter>
        </CardContent>
      </Card>
      

    {/* gráfico de linha → crescimento */}
     <Card>
  <CardHeader>
    <CardTitle>Crescimento de Usuários</CardTitle>
    <CardDescription>Crescimento contínuo da base de usuários</CardDescription>
  </CardHeader>
  <CardContent>
    <ChartContainer config={chartConfig}>
      <LineChart data={chartData} margin={{ left: 12, right: 12 ,top: 12, bottom: 12}}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={8}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Line
          type="monotone"
          dataKey="mobile"
          stroke={chartConfig.mobile.color}
        />
      </LineChart>
    </ChartContainer>
  </CardContent>
  <CardFooter>
    +18% em relação ao mês passado
  </CardFooter>
</Card>
    </div>
  );
}
