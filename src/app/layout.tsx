import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unde mâncăm?',
  description: 'Lista restaurantelor din Brasov',
  keywords: ['mancare', 'restaurante', 'Brasov']
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white mx-auto py-2 px-5 flex justify-between">
          <Link href={"/"} className='h-16 w-60 relative'>
            <Image fill alt="unde mancam" className='logo' src={logo} />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
