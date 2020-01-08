import React from 'react'

const HomeView = React.lazy(() => import(/* webpackPrefetch: true */ './views/HomeView/HomeView'))
const LoginView = React.lazy(() => import(/* webpackPrefetch: true */ './views/LoginView/LoginView'))
const ContactView = React.lazy(() => import(/* webpackPrefetch: true */ './views/ContactView/ContactView'))

export type RouteNames = 'HOME' | 'LOGIN' | 'CONTACT'

export interface RouteValue {
  name: string
  pattern: string
  component: React.ComponentType
}

export type Routes = {
  [key in RouteNames]: RouteValue
}

export const ROUTES: Routes = {
  HOME: {
    name: 'Home',
    pattern: '/',
    component: HomeView,
  },
  LOGIN: {
    name: 'Login',
    pattern: '/login',
    component: LoginView,
  },
  CONTACT: {
    name: 'Contact',
    pattern: '/contact',
    component: ContactView,
  },
}

export const MAPPED_ROUTES = Object.values(ROUTES)
