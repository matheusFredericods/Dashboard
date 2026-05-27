import { House, ShoppingBag, User, Settings } from "lucide-react"
import Link from "next/link"

export function NavLinks() {
  return (
    <>
      <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
        <House />
        <span>Início</span>
      </Link>
      <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
        <ShoppingBag />
        <span>Pedidos</span>
      </Link>
      <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
        <User />
        <span>Clientes</span>
      </Link>
      <Link href="#" className="flex items-center gap-2 p-2 hover:text-muted-foreground duration-75">
        <Settings />
        <span>Configurações</span>
      </Link>
    </>
  )
}