import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RoutingService } from '../../core/services/routing-service';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-connexion',
  imports: [ReactiveFormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss'
})
export class Connexion {
  private fb = inject(FormBuilder);
  _routing = inject(RoutingService)
  _userservice = inject(UserService)
  _cd = inject(ChangeDetectorRef)
  
  successMessage = false;
  errorMessage = false;
  connexionForm = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  })

  onLogin(){
    if (this.connexionForm.valid) {
      const{name, password} = this.connexionForm.value
      this._userservice.login(name, password).subscribe(success => {
        if(success){
          console.log("connexion reussie")
          this.successMessage = true;
          this._cd.detectChanges();
          setTimeout(() => {
            this.successMessage = false;
            this._routing.goHome()
            this._cd.detectChanges();
          }, 2500);
        }else{
          console.log("erreur")
          this.connexionForm.markAllAsTouched();
          this.errorMessage = true;
          this._cd.detectChanges();
          setTimeout(() => {
            this.errorMessage = false;
            this._cd.detectChanges();
          }, 2500);
        }
      })
    }else{
      this.connexionForm.markAllAsTouched();
    }
  }
}
