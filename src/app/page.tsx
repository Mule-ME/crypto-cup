import { Assets } from '@/components/Assets';
import { Nav } from '@/components/Nav';
import { SwapTokens } from '@/components/SwapTokens';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto flex flex-col px-32 ">
      <Image
        src={'/background.png'}
        alt="background"
        width={1440}
        height={839}
        className="w-full h-screen absolute z-[-1000] top-0 left-0 object-cover"
      />
      <header>
        <Nav />

        <div className="flex flex-col gap-[30px] text-white max-w-4xl mx-auto mt-24 mb-12">
          <h1 className=" text-7xl text-center">Easy send and Request Crypto.</h1>
          <p className="text-[20px] text-center w-4/6 mx-auto">
            Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in
            between.
          </p>
        </div>
      </header>
      <section className="flex flex-col gap-[70px] mb-32">
        <Assets />
        <SwapTokens />
      </section>
    </main>
  );
}
