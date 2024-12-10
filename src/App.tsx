import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Layout as AppLayout } from '@/layout';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </I18nextProvider>
  );
}