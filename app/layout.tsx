import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import {Sidebar} from "@/components/Sidebar";
import { ThemeProvider } from "next-themes";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Painel de controle e gestão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html
        lang="pt-BR"
       className={`${poppins.className} h-full antialiased`}
        suppressHydrationWarning
      >
        <body className="flex min-h-screen">
          <ThemeProvider attribute="class" defaultTheme="light">
          <Sidebar/>
        {children}
        </ThemeProvider>
        </body>
      </html>
    
  );
}
