import {Component} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {

  title = 'Create your Member profile and get first access to the very best of offers, inspiration and community.';
  value = '';
  selected = '';
  gender: string;
  genders: string[] = ['Male', 'Female', 'Prefer not to disclose'];
  genre: string;
  genres: string[] = ['None', 'Comedy', 'Drama', 'Tragedy', 'Opera', 'Historical plays'];
  ageGroup: string;
  ageGroups: string[] = ['18-29', '30-44', '45+', 'prefer not to disclose'];
  checked = false;
  indeterminate = false;
  disabled = false;
  labelPosition: 'before' | 'after' = 'after';

  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    Validators.email,
  ]);

  phone = new FormControl('', [
    Validators.pattern('^[0-9]{10}$'),
    Validators.required
  ]);

  firstName = new FormControl('', [
    Validators.minLength(3),
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
}

