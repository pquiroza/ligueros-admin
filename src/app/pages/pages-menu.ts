import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Administración Campeonatos',
    group: true,
  },
  {
    title: 'Fixture',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Tabla Posiciones',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  }
  ,
  {
    title: 'Datos Campeonatos',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
      {
        title: 'Goleadores',
        link: '/auth/login',
      },
      {
        title: 'Amonestados',
        link: '/auth/register',
      },
      {
        title: 'Suspendidos',
        link: '/auth/request-password',
      },
    ]
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
