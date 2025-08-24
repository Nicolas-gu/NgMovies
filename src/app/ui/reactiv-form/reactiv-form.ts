import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reactiv-form',
  imports: [ReactiveFormsModule, MatIconModule, MatInputModule],
  templateUrl: './reactiv-form.html',
  styleUrl: './reactiv-form.scss'
})
export class ReactivForm {
  private fb = inject(FormBuilder);

  newUserForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
}
