"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import filtroImg from "@/assets/images/umbro.png" // pode ser substituído por produto real

const produtosMock = [
  {
    id: 1,
    nome: "Chuteira Society Umbro Ada Master Class Pro Bump Stp",
    preco: "R$ 699,99",
    imagem: filtroImg,
  },
  {
    id: 2,
    nome: "Chuteira Futsal Umbro Pro 5 Bump Stp",
    preco: "R$ 649,99",
    imagem: filtroImg,
  },
  {
    id: 3,
    nome: "Chuteira Campo Umbro Adamant Master Class Pro Stp",
    preco: "R$ 999,99",
    imagem: filtroImg,
  },
]

export default function PaginaPrincipal() {
  return (
    <main className="flex px-8 pt-32 gap-6">

      {/* Sidebar de Filtros */}
      <aside className="w-64 shrink-0 space-y-6">
        <h2 className="text-lg font-bold">Filtros</h2>

        <div>
          <h3 className="font-semibold mb-1">Gênero</h3>
          <div className="space-y-1">
            {["Feminino", "Infantil", "Masculino", "Unisex", "Juvenil"].map(item => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox id={item} />
                <label htmlFor={item} className="text-sm">{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Tamanho</h3>
          <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
            {["PP", "P", "M", "G", "GG", "26G", "36G", "1", "2", "4"].map(item => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox id={item} />
                <label htmlFor={item} className="text-sm">{item}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-1">Categoria</h3>
          <div className="space-y-1">
            {["Clube", "Football Boots", "Lifestyle", "Teamwear"].map(item => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox id={item} />
                <label htmlFor={item} className="text-sm">{item}</label>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Área de Produtos */}
      <section className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">LANÇAMENTOS</h2>
          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
            <option>RELEVÂNCIA</option>
            <option>Menor Preço</option>
            <option>Maior Preço</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosMock.map(produto => (
            <div key={produto.id} className="border rounded p-3 relative group">
              <span className="bg-black text-white text-xs px-2 py-1 absolute top-2 left-2">LANÇAMENTO</span>
              <Heart className="absolute top-2 right-2 cursor-pointer text-gray-500 group-hover:text-black" />

              <Image src={produto.imagem} alt={produto.nome} className="w-full h-40 object-contain my-4" />

              <p className="text-xs text-gray-500">Football Boots</p>
              <h3 className="font-bold text-sm">{produto.nome}</h3>
              <p className="font-bold text-base mt-1">{produto.preco}</p>
            </div>
          ))}
        </div>

        {/* Botão ver mais */}
        <div className="flex justify-center mt-8">
          <Button variant="default">VER MAIS</Button>
        </div>
      </section>
    </main>
  )
}
