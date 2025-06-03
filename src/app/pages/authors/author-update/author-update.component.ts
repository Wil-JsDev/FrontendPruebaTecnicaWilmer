import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../shared/services/book.service';
import { AuthorsService } from '../../../shared/services/authors.service';
import { FormUtils } from '../../../form-utils/form-utils.component';

@Component({
  selector: 'app-author-update',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './author-update.component.html',
})
export default class AuthorUpdateComponent {
  private authorService = inject(AuthorsService);
  private formBuilder =inject(FormBuilder);
  private route = inject(ActivatedRoute);
  formUtils = FormUtils;

  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  updateForm: FormGroup = this.formBuilder.group({
    idBook: [
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(4)],
    ],
    firstName: [
      null,
      [Validators.required, Validators.maxLength(30), Validators.min(100)],
    ],
    lastName: [
      null,
      [Validators.required, Validators.maxLength(999), Validators.min(14)],
    ]
  });



    updateAuthor() {
      if(this.updateForm.invalid){
        return ;
      }

      const newAuthor = this.updateForm.value;
      this.authorService.updateAuthor(this.id,newAuthor).subscribe( (rest) => {
        console.log(rest)
      });
    }
}
