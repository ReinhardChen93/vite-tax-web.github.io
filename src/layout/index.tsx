import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { ScrollRestoration } from 'react-router-dom';
import Footer from '@/components/Footer';
import { Header } from './components/header';
import { Meta } from './components/meta';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  console.log('children', children)
  return (
    <ThemeProvider attribute="class">
      <Meta />
      <div className="flex min-h-screen flex-col dark:bg-taxPrimary dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <ScrollRestoration />
    </ThemeProvider>
  );
};