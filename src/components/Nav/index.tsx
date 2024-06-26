import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/Button';
import Link from 'next/link';

type Props = {};

export const Nav = (props: Props) => {
  return (
    <nav className="py-5 flex justify-between">
      <Image src={'/logo.svg'} width={200} height={100} alt="logo" />

      <ul className="flex items-center gap-10 font-[500] ">
        <li>
          <Link href="#">Exchange</Link>
        </li>
        <li>
          <Link href="#">Last Transactions</Link>
        </li>
        <li>
          <Link href="#">Invite Friends</Link>
        </li>
        <li>
          <Link href="#">Notifications</Link>
        </li>
      </ul>

      <div className="flex gap-4">
        <Button variant={'outlinedRounded'} className="w-32">
          LOG IN
        </Button>
        <Button variant={'rounded'} className="w-32">
          SIGN UP
        </Button>
      </div>
    </nav>
  );
};
