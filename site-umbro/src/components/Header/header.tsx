"use client"

import { BotaoDarkMode } from "@/components/BotaoDarkMode/BotaoDarkMode"
import { ChevronDown, Heart, Search, ShoppingBag, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "../ui/input"
import logo from "@/assets/images/umbro.png"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null)

  const menuItems = [
    "LANÇAMENTOS",
    "MASCULINO",
    "FEMININO",
    "INFANTIL",
    "FUTEBOL",
    "LIFESTYLE",
    "OUTLET",
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-zinc-800 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Menu de navegação */}
        <div className="hidden lg:flex gap-4 text-sm font-semibold uppercase">
          {menuItems.map((item) => (
            <DropdownMenu key={item}>
              <DropdownMenuTrigger className="hover:underline whitespace-nowrap text-xs">
                {item}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <p className="p-2">Item 1</p>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>

        {/* Logo central absoluta */}
        <div className="flex">
          <Image src={logo} alt="logo umbro" width={60} />
        </div>

        {/* Ações do lado direito */}
        <div className="flex items-center gap-4 text-sm">
          {/* Campo de busca */}
          <div className="relative">
            <Input
              placeholder="Digite sua busca"
              className="pl-3 pr-9 py-1 text-sm w-[180px]"
            />
            <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>

          {/* Ícones */}
          <Heart className="cursor-pointer" />
          <User className="cursor-pointer" />
          <ShoppingBag className="cursor-pointer" />

          {/* Ajuda */}
          <div
            className="relative"
            onMouseEnter={() => setHovered("AJUDA")}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="flex items-center cursor-pointer gap-1 hover:underline">
              AJUDA <ChevronDown className="w-4 h-4" />
            </span>
            {hovered === "AJUDA" && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-zinc-700 shadow-md p-2 rounded text-sm z-50">
                <p className="hover:underline cursor-pointer">Central de ajuda</p>
                <p className="hover:underline cursor-pointer">Trocas e devoluções</p>
              </div>
            )}
          </div>

          <BotaoDarkMode />
        </div>
      </div>
    </nav>
  )
}
