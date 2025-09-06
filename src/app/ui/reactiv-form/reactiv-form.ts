import { UserModel } from './../../core/models/user-model.models';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RoutingService } from '../../core/services/routing-service';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-reactiv-form',
  imports: [ReactiveFormsModule, MatIconModule, MatInputModule],
  templateUrl: './reactiv-form.html',
  styleUrl: './reactiv-form.scss'
})
export class ReactivForm {
  private fb = inject(FormBuilder);
  _userService = inject(UserService)
  _cd = inject(ChangeDetectorRef)
  _routing = inject(RoutingService)

  successMessage = false;
  errorMessage = false;
  newUserForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  onSubmit(){
    if (this.newUserForm.valid) {
      const newUser: UserModel = {
        ...this.newUserForm.getRawValue()
      }
      this._userService.createUser(newUser).subscribe()
      this.successMessage = true;
      this._cd.detectChanges();
      setTimeout(() => {
        this.successMessage = false;
        this._routing.goHome()
        this._cd.detectChanges();
      }, 2500);
      
    }else{
      this.newUserForm.markAllAsTouched();
      this.errorMessage = true;
      this._cd.detectChanges();
      setTimeout(() => {
        this.errorMessage = false;
        this._cd.detectChanges();
      }, 2500);
    }
  }
}
