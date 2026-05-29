import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card" 
import { DollarSign,TrendingUp,TrendingDown,ShoppingCart,Users,Activity } from "lucide-react"
import ChartOverView from "@/components/chart"
import Sales from "@/components/sales";

export default function Home() {
  return (
        <main className="flex-1 p-4 pt-16 md:pt-3.5">
          <h1 className="font-semibold text-2xl">
            Visão Geral
            </h1>
          <section className="grid grid-cols-2 gap-4 mt-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                     <CardTitle className="select-none">Receita Total</CardTitle>
                     <DollarSign className="w-5 h-5"/>
                  </div>
                   
                    <CardDescription>Receita gerada nos últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-base">
                    R$ 12.500
                    </p>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                      <CardTitle className="select-none">Pedidos</CardTitle>
                      <ShoppingCart className="w-5 h-5"/>
                  </div>
                  <CardDescription>Total de pedidos nos últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-base">
                    152
                  </p>
                   <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                 
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="select-none">Clientes</CardTitle>
                    <Users className="w-5 h-5"/>
                  </div>
                    <CardDescription>Total de clientes nos últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                     <p className="font-bold text-base">
                    84
                  </p>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="select-none">Conversão</CardTitle>
                    <Activity className="w-5 h-5"/>
                  </div>
                  <CardDescription>Comparado ao mês anterior</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                  <p className="font-bold text-base">
                    12%
                  </p>
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  </div>
                 
                </CardContent>
              </Card>
          </section>

          <section className="mt-4 space-y-4">
            <ChartOverView />
            <Sales/>
          </section>
        </main>
  );
}
