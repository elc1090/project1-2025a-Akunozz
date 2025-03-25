import { BotaoDarkMode } from "@/components/BotaoDarkMode/BotaoDarkMode"
import { ChevronDown, Heart, Search, ShoppingBag, User } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "../ui/separator"
import { Input } from "../ui/input"
import logo from "@/assets/images/umbro.png"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="fixed top-0 w-full">
            <div className="flex bg-white dark:bg-zinc-800 justify-end gap-6 items-center">

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            LANÇAMENTOS
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            MASCULINO
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            FEMININO
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            INFANTIL
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            FUEBOL
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            LIFESTYLE
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            OUTLET
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            item1
                        </DropdownMenuContent>
                    </DropdownMenu>

                <div>
                    <Image src={logo} alt="logo umbro" width={150}/>
                </div>

                <div className="w-44">
                    <Input placeholder="Digite sua busca" />
                </div>

                <BotaoDarkMode />
                <Heart />
                <User />
                <ShoppingBag />

                <DropdownMenu>
                    <DropdownMenuTrigger className="flex flex-row">Ajuda <ChevronDown /> </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Ajuda <Separator orientation="vertical"/> Trocas e devoluções </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>



            </div>
        </nav>
    )
}