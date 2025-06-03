import { Routes } from '@angular/router';

export const authorRoutes: Routes =[

  {
    path: '',
    loadComponent: () => import('../../shared/layout/layout.component'),
    children:[
      {
        path: '',
        loadComponent: () => import('./author/author.component'),
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./author-detail/author-detail.component'),
      },
       {
        path: 'create',
        loadComponent: () => import('./author-form/author-form.component'),
      },
      {
        path: 'update/:id',
        loadComponent: () => import('./author-update/author-update.component'),
      },
      {
        path: 'delete/:id',
        loadComponent: () => import('./author-delete/author-delete.component')
      }
    ]

  }

]
