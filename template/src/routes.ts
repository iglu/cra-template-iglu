import React from 'react';

const HomeView = React.lazy(() => import(/* webpackPrefetch: true */ './views/HomeView/HomeView'));
const ContactView = React.lazy(() => import(/* webpackPrefetch: true */ './views/ContactView/ContactView'));

export type RouteNames = 'HOME' | 'CONTACT';

export interface RouteValue {
  name: string;
  pattern: string;
  component: React.ComponentType;
}

export type Routes = {
  [key in RouteNames]: RouteValue;
};

export const ROUTES: Routes = {
  HOME: {
    name: 'Home',
    pattern: '/',
    component: HomeView
  },
  CONTACT: {
    name: 'Contact',
    pattern: '/contact',
    component: ContactView
  }
};

export const MAPPED_ROUTES = Object.values(ROUTES);
