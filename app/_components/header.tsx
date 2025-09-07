import { Card, CardContent } from '@/app/_components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between border-0 p-5">
        <Image alt="FSW Barber" src="/logo.png" width={120} height={18} />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
