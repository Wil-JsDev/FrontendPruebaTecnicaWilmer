import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { BookService } from '../../../shared/services/book.service';
import { AuthorsService } from '../../../shared/services/authors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-detail',
  imports: [],
  templateUrl: './author-detail.component.html',
})
export default class AuthorDetailComponent {

  private authorService = inject(AuthorsService);

  authorId = inject(ActivatedRoute).snapshot.params['id'];

  authorResource = rxResource({
    request: () => ({ code: this.authorId }),
    loader: ({ request }) => {
      return this.authorService.getAuthorById(request.code);
    },
  });

}
