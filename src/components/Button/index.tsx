import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva('bg-[#9945FF] hover:bg-[#a760fc] px-[10px] py-4 transition-colors', {
  variants: {
    variant: {
      default: '',
      rounded: 'rounded-tl-lg rounded-br-lg ',
      outlinedRounded: 'rounded-tl-lg rounded-br-lg border border-[#9945FF] bg-transparent hover:bg-[#9945FF]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = ({ children, className, variant }: Props) => {
  return <button className={cn(buttonVariants({ variant, className }))}>{children}</button>;
};
