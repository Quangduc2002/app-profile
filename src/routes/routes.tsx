import React, { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from './route.constant';
import AppLayout from '@/Layout/AppLayout/AppLayout';
import Home from '@/Page/Home/Home';
import Project from '@/Page/Project/Project';
import About from '@/Page/About/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: (
          <Suspense fallback={undefined}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.PROJECT,
        element: (
          <Suspense fallback={undefined}>
            <Project />
          </Suspense>
        ),
      },
      {
        path: ROUTE_PATH.ABOUT,
        element: (
          <Suspense fallback={undefined}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);
