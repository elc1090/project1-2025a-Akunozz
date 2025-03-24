import { BotaoDarkMode } from "@/components/BotaoDarkMode/BotaoDarkMode";
import { Heart, ShoppingBag, User } from "lucide-react";
import { CardDescription, Card, CardTitle, CardFooter, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
    <nav className="fixed top-0 w-full">
      <div className="flex bg-white dark:bg-zinc-800 justify-end gap-6 items-center">
        <User />
        <ShoppingBag />
        <Heart />
        <BotaoDarkMode />
      </div>
    </nav>

    <section>
      <div>
        <p className="flex justify-center mt-20 text-blue-500">Olá Pedro</p>
        <Card className="max-w-sm sm:max-w-2xl mx-auto">
          <CardTitle>
            <h1>Titulo do card</h1>
          </CardTitle>
          <CardContent>
            conteudo do card
          </CardContent>
        </Card>
      </div>
    </section>


    </>
  );
}
