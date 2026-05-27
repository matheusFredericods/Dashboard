"use client"
import {Sheet,SheetTrigger,SheetContent,SheetTitle} from "@/components/ui/sheet"
import {Menu} from "lucide-react"
import { NavLinks } from "./NavLinks"

export function Sidebar() {
    return(
        <>
        {/* Mobile Sidebar */}
         <Sheet>
        <SheetTrigger asChild>
          <Menu className="md:hidden h-10 w-10 m-2 cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="text-xl ml-2 mt-4">Dashboard</SheetTitle>
          <nav className="flex flex-col gap-2">
            <NavLinks />
          </nav>
        </SheetContent>
      </Sheet>
      
      {/* Desktop Sidebar */}
         <aside className="hidden md:flex flex-col w-56 h-screen border-r p-3 gap-1">
        <p className="text-sm text-muted-foreground px-2 mb-2">Dashboard</p>
        <nav className="flex flex-col gap-2">
          <NavLinks />
        </nav>
      </aside>
      </>
        
    )
}