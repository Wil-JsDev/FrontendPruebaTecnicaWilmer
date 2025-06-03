import { Component, inject } from '@angular/core';
import { BookService } from '../../../shared/services/book.service';
import { FormUtils } from '../../../form-utils/form-utils.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './book-form.component.html',
})
export default class BookFormComponent {

 private bookService = inject(BookService);
 private formBuilder =inject(FormBuilder);
  formUtils = FormUtils;

  createForm: FormGroup = this.formBuilder.group({
    idBook: [
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(4)],
    ],
    firstName: [
      null,
      [Validators.required, Validators.maxLength(30), Validators.minLength(4)],
    ],
      lastName: [
      null,
      [Validators.required, Validators.maxLength(999), Validators.minLength(14)],
    ]
  });

  createBook(){
    if(this.createForm.invalid){
      console.log('Imprimir form',this.createForm);
      return ;
    }

    const newBook = this.createForm.value;
    console.log('click');
    this.bookService.createBooks(newBook).subscribe( (rest) => {
      console.log(rest)
    });

  }
}
