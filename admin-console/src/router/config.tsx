import { lazy } from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import DashboardLayout from '../components/dashboard/DashboardLayout';

const Login = lazy(() => import('../pages/login/page'));
const Dashboard = lazy(() => import('../pages/dashboard/page'));
const HomePageEditor = lazy(() => import('../pages/editors/home/page'));
const TeamPageEditor = lazy(() => import('../pages/editors/team/page'));
const PortfolioPageEditor = lazy(() => import('../pages/editors/portfolio/page'));
const GenericPageEditor = lazy(() => import('../pages/editors/generic/page'));
const MediaUpload = lazy(() => import('../pages/dashboard/media/page'));
const HeaderEditor = lazy(() => import('../pages/dashboard/global/header/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" replace />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'pages/home',
        element: <HomePageEditor />,
      },
      {
        path: 'pages/team',
        element: <TeamPageEditor />,
      },
      {
        path: 'pages/portfolio',
        element: <PortfolioPageEditor />,
      },
      {
        path: 'pages/about',
        element: <GenericPageEditor pageKey="about" title="About Page Editor" />,
      },
      {
        path: 'pages/mission',
        element: <GenericPageEditor pageKey="mission" title="Mission Page Editor" />,
      },
      {
        path: 'pages/services',
        element: <GenericPageEditor pageKey="service" title="Services Page Editor" />,
      },
      {
        path: 'pages/contact',
        element: <GenericPageEditor pageKey="contact" title="Contact Page Editor" />,
      },
      {
        path: 'global/header',
        element: <GenericPageEditor pageKey="common" title="Global Settings (Header/Footer)" />,
      },
      {
        path: 'global/footer',
        element: <GenericPageEditor pageKey="common" title="Global Settings (Header/Footer)" />,
      },
      {
        path: 'global/sponsors',
        element: <GenericPageEditor pageKey="common" title="Global Settings (Header/Footer)" />,
      },
      {
        path: 'media',
        element: <MediaUpload />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
