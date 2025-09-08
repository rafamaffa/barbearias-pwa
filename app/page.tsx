import { Button } from '@/app/_components/ui/button';
import Header from './_components/header';
import { Input } from './_components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { Badge } from './_components/ui/badge';
import { Avatar, AvatarImage } from './_components/ui/avatar';
import { db } from '@/app/_lib/prisma';
import BarbershopItem from './_components/barbershop-item';

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: 'desc',
    },
  });

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

        {/* Categorias */}
        <div className="mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <Button variant="secondary" className="gap-2">
            <Image
              src="/cabelo.svg"
              alt="Cabelo"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            Cabelo
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image src="/barba.svg" alt="barba" width={16} height={16} />
            Barba
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              src="/acabamento.svg"
              alt="acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              src="/sobrancelha.svg"
              alt="sobrancelha"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image
              src="/hidratacao.svg"
              alt="hidratacao"
              width={16}
              height={16}
            />
            Hidratação
          </Button>

          <Button variant="secondary" className="gap-2">
            <Image src="/massagem.svg" alt="massagem" width={16} height={16} />
            Massagem
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        {/* Agendamento */}
        <Card>
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

        {/* Item Barbearia */}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        {/* Item Populares */}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              &copy; 2025 Copyright{' '}
              <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
