import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogContent } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

const imports = [
  MatLabel,
  MatFormField,
  MatIcon,
  MatDialogContent,
  ReactiveFormsModule,
];

@Component({
  selector: 'app-modal',
  standalone: true,
  imports,
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  form!: FormGroup;
  //private readonly formBuild = inject(FormBuilder);

  constructor() {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
