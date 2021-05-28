import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmedValidator} from './confirmed.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class FormComponent {

  value = '';
  hide = true;
  submitted = false;
  gender: string;
  genre: string;
  genders: string[] = ['Male', 'Female', 'Prefer not to disclose'];
  genres: string[] = ['None', 'Comedy', 'Drama', 'Tragedy', 'Opera', 'Historical plays'];
  ageGroups: string[] = ['18-29', '30-44', '45+', 'Prefer not to disclose'];
  title = 'Create your Member profile and get first access to the very best of offers, inspiration and community.';

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
        password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9\-\+]{9,11}$')]],
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        country: [''],
        postalCode: ['18000'],
        gender: [''],
        ageGroup: [''],
        dateOfBirth: [''],
        genre: [''],
        userMessage: ['', Validators.maxLength(250)],
        subscribeForLetters: ['']
      },
      {validator: ConfirmedValidator('password', 'confirmPassword')}, );
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Your data has been submitted successfully!');
      this.registrationForm.reset();
    } else {
      Object.keys(this.registrationForm.controls).forEach(field => {
        const control = this.registrationForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    }
  }
}

