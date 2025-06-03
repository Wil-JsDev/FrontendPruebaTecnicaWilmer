import { Component, inject, signal } from '@angular/core';
import { BookListComponent } from "../../../shared/components/book-list/book-list.component";
import { BookService } from '../../../shared/services/book.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [BookListComponent,
    RouterOutlet
  ],
  templateUrl: './books.component.html',
})
export default class BooksComponent {
  readonly pageNumber = signal(1);
  readonly pageSize = signal(15);

  private bookService = inject(BookService);

  booksResource = rxResource({
  request: () => ({
    page: this.pageNumber(),
    size: this.pageSize(),
  }),
  loader: ({ request }) =>
  this.bookService.getBookPaginated(request.page, request.size)
  });

}
