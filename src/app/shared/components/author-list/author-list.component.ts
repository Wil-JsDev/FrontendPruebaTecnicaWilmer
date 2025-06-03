import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IAuthor } from '../../interfaces/author.interface';

@Component({
  selector: 'app-author-list',
  imports: [
    RouterLink
  ],
  templateUrl: './author-list.component.html',
})
export class AuthorListComponent {

  author = input.required<IAuthor[]>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
  errorMessage = input<string | null | unknown>();

}
