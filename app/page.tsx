import { Button } from '@/app/_components/ui/button';
import Header from './_components/header';
import { Input } from './_components/ui/input';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Rafael!</h2>
        <p>Segunda, 07 de Setembro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input type="text" placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon className="" />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende com os melhores no FSW Barber"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
