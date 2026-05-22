"use client"
import {Sheet,SheetTrigger,SheetContent,SheetTitle} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {Menu ,House , ShoppingBag , User ,Settings } from "lucide-react"
import Link from "next/link"

//Melhorar o Button colocando ele maior
//Mudar a fonte
//Adicionar mais itens no menu

export function Sidebar() {
    return (
        <div>
            <aside>
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className=""> 
                         <Menu />
                    </Button> 
                </SheetTrigger>
                
                <SheetContent side ="left">
                    <SheetTitle className="text-xl">Menu</SheetTitle>

                    <nav className="flex flex-col gap-2 mt-4">
                   <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
                    <House/>
                    <span>Início</span>
                   </Link>

                   <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
                    <ShoppingBag/>
                    <span>Pedidos</span>
                   </Link>

                   <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
                    <User/>
                    <span>Clientes</span>
                   </Link>

                   <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
                    <Settings/>
                    <span>Configurações</span>
                   </Link>

                    </nav>
                </SheetContent>
                </Sheet>
            </aside>
        </div>
    )
}