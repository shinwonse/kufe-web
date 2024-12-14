import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header } from '@/components';
import { cn } from '@/lib/cn';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'KUFE',
  description: 'Frontend Engineers from Konkuk University',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('bg-[#036b3f]', `${geistSans.variable} ${geistMono.variable} antialiased`)}
      >
        <Header />
        <main className={cn('overflow-x-hidden')}>{children}</main>
      </body>
    </html>
  );
}
