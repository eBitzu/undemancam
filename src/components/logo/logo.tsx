'use client';
import Link from 'next/link';
import Logo from '@public/logo.svg';

export const LogoComponent = () => (
  <Link href="/" className="h-16">
    <Logo className="relative h-full dark:fill-white" />
  </Link>
);
