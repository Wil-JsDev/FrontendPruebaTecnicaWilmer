import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';

@Component({
  selector: 'app-book-delete',
  imports: [
    RouterLink
  ],
  templateUrl: './book-delete.component.html',
})
export default class BookDeleteComponent {

  private route = inject(ActivatedRoute);
  bookService = inject(BookService);
  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe( (rest) => {
      console.log(rest)
    });
  }
}
