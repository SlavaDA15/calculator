import App from 'app/App';
import { SettingsPage } from 'pages/admin/SettingsPage/SettingsPage';
import { AutocreditPage } from 'pages/user/AutocreditPage/AutocreditPage';
import { IpotekaPage } from 'pages/user/IpotekaPage/IpotekaPage';
import { PensiyaPage } from 'pages/user/PensiyaPage/PensiyaPage';
import { createBrowserRouter } from 'react-router-dom';
import { AuthGuard } from './AuthGuard';
import { NotFoundPage } from 'pages/errors/NotFoundPage';
import { VisibleGuard } from './VisibleGuard';
import { MainPage } from 'pages/user/MainPage/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/ipoteka',
        element: (
          <VisibleGuard path="/ipoteka">
            <IpotekaPage />
          </VisibleGuard>
        ),
      },
      {
        path: '/autocredit',
        element: (
          <VisibleGuard path="/autocredit">
            <AutocreditPage />
          </VisibleGuard>
        ),
      },
      {
        path: '/pensiya',
        element: (
          <VisibleGuard path="/autocredit">
            <PensiyaPage />
          </VisibleGuard>
        ),
      },
      {
        path: '/settings',
        element: (
          <AuthGuard>
            <SettingsPage />
          </AuthGuard>
        ),
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
