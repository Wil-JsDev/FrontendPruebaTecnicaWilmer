import { Component, inject } from '@angular/core';
import { AuthorsService } from '../../../shared/services/authors.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../form-utils/form-utils.component';

@Component({
  selector: 'app-author-form',
  imports: [
     ReactiveFormsModule,
  ],
  templateUrl: './author-form.component.html',
})
export default class AuthorFormComponent {

  private authorService = inject(AuthorsService);
  private formBuilder =inject(FormBuilder);
  formUtils = FormUtils;

    createForm: FormGroup = this.formBuilder.group({
    idBook: [
      '',
      [Validators.required,],
    ],
    firstName: [
      null,
      [Validators.required, ],
    ],
    lastName: [
      null,
      [Validators.required],
    ]
  });

  createAuthor() {
    if(this.createForm.invalid){
      return ;
    }

    const newAuthor = this.createForm.value;
    this.authorService.createAuthor(newAuthor).subscribe( (rest) => {
      console.log(rest)
    });
  }

}
