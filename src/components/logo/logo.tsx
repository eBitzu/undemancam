'use client';
import Link from 'next/link';
import Logo from '@public/logo.svg';

export const LogoComponent = () => (
  <Link href="/" className="h-16 absolute top-0 lg:top-4 flex-none">
    <Logo className="h-full dark:fill-white" />
  </Link>
);
