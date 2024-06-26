import Image from 'next/image';
import React from 'react';
import { Button } from '../Button';

type Props = {};

export const SwapTokens = (props: Props) => {
  return (
    <section className="flex flex-col items-center border border-[#464646] rounded-[10px] bg-[#000000cc] backdrop-blur-lg p-10 gap-[30px]">
      <div className="flex w-full justify-between">
        <h4 className=" text-ellipsis text-xl font-semibold">SWAP TOKENS</h4>
        <Image src={'setting.svg'} height={32} width={32} alt="settings icon" />
      </div>

      <div className="flex w-full gap-1 relative">
        {Array.from({ length: 2 }).map(() => (
          <div className="bg-[#1E1E1E] px-12 py-5 w-1/2 flex justify-between">
            <div className="flex flex-col">
              <span className="text-5xl font-semibold">0.00</span>
              <span className="text-ellipsis text-[#666] ">$0.00</span>
            </div>
            <div className="flex flex-col items-start gap-[10px]">
              <div className="flex items-center bg-[#000] px-3 py-2 gap-2">
                <Image src={'btc-currency.svg'} height={32} width={32} alt="btc currency icon" />
                <span className="text-[#868686] text-xl font-medium">BTC </span>
                <Image src={'arrow-left.svg'} height={32} width={16} alt="left arrow icon" />
              </div>
              <div>
                <span>Balance: </span>
                <span className="text-[#3980FF]">24,240</span>
              </div>
            </div>
          </div>
        ))}
        {/* Coin swap icon */}
        <button className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-['50px] w-[50px] bg-[#000] flex items-center justify-center p-[10px]">
          <Image src={'coins-swap-icon.svg'} height={32} width={32} alt="right arrow icon" />
        </button>
      </div>

      {/* Button */}
      <div>
        <Button variant={'rounded'} className="w-[250px]">
          SWAP TOKENS
        </Button>
      </div>

      {/* Rate */}
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span>1 BTC = 32.4039 ETH</span>
          <span className="text-[#3980FF]">Free exchange</span>
        </div>
        <span className="text-[#666]">Updates in 4s</span>
      </div>
    </section>
  );
};
