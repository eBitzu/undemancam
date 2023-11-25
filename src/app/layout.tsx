import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from '../components/header/header';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Unde mâncăm?',
  description: 'Lista restaurantelor din Brasov',
  keywords: ['mancare', 'restaurante', 'Brasov']
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="overflow-auto h-screen mx-auto py-3">{children}</main>
      </body>
    </html>
  );
}
