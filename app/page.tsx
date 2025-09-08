import { Button } from '@/app/_components/ui/button';
import Header from './_components/header';
import { Input } from './_components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './_components/ui/card';
import { db } from '@/app/_lib/prisma';
import BarbershopItem from './_components/barbershop-item';
import { quickSearchOptions } from './_constants/search';
import BookingItem from './_components/booking-item';

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
          {quickSearchOptions.map((option) => (
            <Button variant="secondary" className="gap-2" key={option.title}>
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
                className="h-4 w-4"
              />
              {option.title}
            </Button>
          ))}
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

        <BookingItem />

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
