import { Component, inject } from '@angular/core';
import { BookService } from '../../../shared/services/book.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormUtils } from '../../../form-utils/form-utils.component';


@Component({
  selector: 'app-book-update',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './book-update.component.html',
})
export default class BookUpdateComponent {
  private bookService = inject(BookService);
  private formBuilder =inject(FormBuilder);
  private route = inject(ActivatedRoute);
  formUtils = FormUtils;

  id: number = 0;

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  updateForm: FormGroup = this.formBuilder.group({
    title: [
      '',
      [Validators.required, Validators.maxLength(20), Validators.minLength(4)],
    ],
    description: [
      null,
      [Validators.required, Validators.maxLength(30), Validators.min(100)],
    ],
    excerpt: [
      null,
      [Validators.required, Validators.maxLength(999), Validators.min(14)],
    ],
    publishDate: [
      null,
      [Validators.required, Validators.maxLength(999), Validators.min(14)],
    ],
  });

  updateBook(){
    if(this.updateForm.invalid){
      console.log('Imprimir form',this.updateForm);
      return ;
    }
    const updateBook = this.updateForm.value;

    this.bookService.updateBooks(this.id, updateBook).subscribe( (rest) => {
      console.log(rest)
    });
  }
}
