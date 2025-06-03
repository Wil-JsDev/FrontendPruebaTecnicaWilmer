import { Routes } from "@angular/router";

export const booksRoutes: Routes =[

  {
    path: '',
    loadComponent: () => import('../../shared/layout/layout.component'),
    children:[
      {
        path: '',
        loadComponent: () => import('./books/books.component'),
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./book-detail/book-detail.component'),
      },
       {
        path: 'create',
        loadComponent: () => import('./book-form/book-form.component'),
      },
      {
        path: 'update/:id',
        loadComponent: () => import('./book-update/book-update.component'),
      },
      {
        path: 'delete/:id',
        loadComponent: () => import('./book-delete/book-delete.component'),
      },
    ]

  }

]
