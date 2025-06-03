import { Component, inject } from '@angular/core';
import { BookService } from '../../../shared/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-detail',
  imports:[],
  templateUrl: './book-detail.component.html',
})

export default class BookDetailComponent {

  private bookService = inject(BookService);
  bookId = inject(ActivatedRoute).snapshot.params['id'];

  bookResource = rxResource({
    request: () => ({ code: this.bookId }),
    loader: ({ request }) => {
      return this.bookService.getBooksById(request.code);
    },
  });

}
