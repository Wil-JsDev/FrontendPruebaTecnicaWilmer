import { Routes } from '@angular/router';
import { TopMenuComponent } from './shared/components/top-menu/top-menu.component';

export const routes: Routes = [

  {
    path: 'books',
    loadChildren: () => import('./pages/books/books.routes').then(
      (m) => m.booksRoutes
    ),

  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'authors',
    loadChildren: () => import('./pages/authors/author.routes').then(
      (m) => m.authorRoutes
    )
  },

  {
    path:'**',
    redirectTo:'books'
  }
];
