import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { AuthorsService } from '../../../shared/services/authors.service';

@Component({
  selector: 'app-author-delete',
  imports: [
    RouterLink
  ],
  templateUrl: './author-delete.component.html',
})
export default class AuthorDeleteComponent {

  private route = inject(ActivatedRoute);
  authorService = inject(AuthorsService);
  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  deleteAuthor(){
    this.authorService.deleteAuthor(this.id).subscribe( (rest) => {
      console.log(rest)
    });
  }
}
