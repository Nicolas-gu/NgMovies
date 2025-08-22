import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiv-form.html',
  styleUrl: './reactiv-form.scss'
})
export class ReactivForm {
  private fb = inject(FormBuilder);

  newUserForm = this.fb.group({
    name: [''],
    email: [''],
    password: [''],
    confirmPassword: ['']
  })
}
