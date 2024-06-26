import React from 'react';
import { Button } from '@/components/Button';
import Image from 'next/image';
import { fetchAssets } from './fetchAssets';
import { cn } from '@/utils';

type Props = {};

export const Assets = async (props: Props) => {
  const { assets } = (await fetchAssets()) ?? { assets: [] };

  return (
    <section className="flex flex-col px-[40px] py-[30px] border border-[#464646] rounded-[10px] bg-[#000000cc] backdrop-blur-lg">
      <table className="table-auto border-spacing-y-4 border-separate w-full">
        <thead className="border-b border-b-[#464646]">
          <tr className="text-left">
            <th>ASSETS</th>
            <th>LAST TRADE</th>
            <th>24H %</th>
            <th>24H CHANGE</th>
            <th className="text-[#3980FF]">{'MORE >'}</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(assets) &&
            assets?.map((assets) => {
              const pairs = assets?.assetName?.split('/');
              return (
                <tr key={assets?._id}>
                  <td>
                    <div className="flex gap-2 items-center">
                      <Image src={assets?.assetImage} height={64} width={64} alt="btc" />
                      <div className="font-medium">
                        <span>{pairs[0]}/</span>
                        <span className="text-[#666666]">{pairs[1]}</span>
                      </div>
                    </div>
                  </td>
                  <td>${assets?.lastTrade}</td>
                  <td className={cn('', assets?.percentChange < 0 ? 'text-[#FF5454]' : 'text-[#6DFFDC]')}>
                    {assets?.percentChange}%
                  </td>
                  <td>
                    ${' '}
                    <span className={cn('', assets?.usdChange < 0 ? 'text-[#FF5454]' : 'text-[#6DFFDC]')}>
                      {assets?.usdChange}
                    </span>
                  </td>
                  <td>
                    <Button className="text-[#00554B] bg-[#6DFF8B] p-[10px]hover:bg-[#90fca6]">Trade</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};
