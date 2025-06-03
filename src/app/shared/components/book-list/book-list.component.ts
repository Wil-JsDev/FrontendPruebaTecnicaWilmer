import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IBooks } from '../../interfaces/books.interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  imports: [
    RouterLink
  ],
  templateUrl: './book-list.component.html',
})
export class BookListComponent {

  books = input.required<IBooks[]>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
  errorMessage = input<string | null | unknown>();

}
