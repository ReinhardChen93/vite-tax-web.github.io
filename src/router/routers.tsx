import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// 懒加载路由组件
const Home = lazy(() => import('@/pages/home'));
const Service = lazy(() => import('@/pages/servicePage'));
const NotFound = lazy(() => import('@/pages/404'));
const InternationalTaxation = lazy(() => import('@/pages/servicePage/internationalTaxation.tsx'));
const LawCase = lazy(() => import('@/pages/LawCase'));
const ContactUs = lazy(() => import('@/pages/ContactUs'))

export const routes: RouteObject[] = [
  {
    path: '/',
    index: true,
    element: <Home />  // 直接使用 JSX 元素
  },
  {
    path: 'service',
    element: <Service />,
    children: [
      {
        path: 'internationalTaxation',
        element: <InternationalTaxation />
      },
      // {
      //   path: 'service2',
      //   element: <div>service2</div>
      // }
    ]
  },
  {
    path: 'lawCase/:id',
    element: <LawCase />
  },
  {
    path: 'contactUs',
    element: <ContactUs />
  },
  {
    path: '*',
    element: <NotFound />
  }
];