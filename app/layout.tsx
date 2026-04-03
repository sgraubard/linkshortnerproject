import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import { Link2 } from 'lucide-react';
import { HeaderButtons } from '@/components/header-buttons';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LinkShort – Shorten Links, Share Everywhere',
  description:
    'Create short, memorable links in seconds. Track clicks, manage your links, and share with confidence.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <header className="flex justify-between items-center px-6 py-4 h-16 border-b border-border">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <Link2 className="size-4 text-primary" />
              LinkShort
            </div>
            <div className="flex items-center gap-3">
              <HeaderButtons />
            </div>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
