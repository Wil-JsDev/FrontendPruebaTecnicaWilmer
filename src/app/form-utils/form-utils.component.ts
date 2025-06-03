import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-utils',
  imports: [],
  templateUrl: './form-utils.component.html',
})
export class FormUtils {

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    for (const keys of Object.keys(errors)) {
      switch (keys) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Este campo debe de tener al menos ${errors['minlength'].requiredLength} caracteres`;
      }
    }
    return null;
  }
}
