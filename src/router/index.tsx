import { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { routes } from './routers';
import { Layout } from '@/App';

// 为所有路由添加布局和加载状态
const routesWithLayout = [
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: routes
  }
];

export const router = createBrowserRouter(routesWithLayout);