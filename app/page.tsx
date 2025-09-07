import { Button } from '@/app/_components/ui/button';
import Header from './_components/header';
import { Input } from './_components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { Badge } from './_components/ui/badge';
import { Avatar, AvatarImage } from './_components/ui/avatar';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        {/* Welcome */}
        <h2 className="text-xl font-bold">Olá, Rafael!</h2>
        <p>Segunda, 07 de Setembro</p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2">
          <Input type="text" placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon className="" />
          </Button>
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende com os melhores no FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamento */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-bold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* DIREITA */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">07</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
