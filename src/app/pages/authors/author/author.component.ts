import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { AuthorsService } from '../../../shared/services/authors.service';
import { AuthorListComponent } from "../../../shared/components/author-list/author-list.component";

@Component({
  selector: 'app-author',
  imports: [AuthorListComponent],
  templateUrl: './author.component.html',
})
export default  class AuthorComponent {
  readonly pageNumber = signal(1);
  readonly pageSize = signal(15);

  private authorService = inject(AuthorsService);

  authorResource = rxResource({
  request: () => ({
    page: this.pageNumber(),
    size: this.pageSize(),
  }),
  loader: ({ request }) =>
  this.authorService.getAuthors(request.page, request.size)
  });
}
