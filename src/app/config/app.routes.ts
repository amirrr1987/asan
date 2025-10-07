import { LoginPage } from '@/pages/login/login';
import { Auth } from '@/layouts/auth/auth';
import { Panel } from '@/layouts/panel/panel';
import { Routes } from '@angular/router';
import { DashboardPage } from '@/pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'auth',
    component: Auth,
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
    ],
  },

  {
    path: '',
    component: Panel,
    children: [
      {
        path: '',
        component: DashboardPage,
      },
    ],
  },
];
