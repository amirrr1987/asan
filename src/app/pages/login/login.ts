import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {
  public hide = signal(true);

  public togglePasswordVisibility(event: MouseEvent | TouchEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    event.preventDefault();
  }

  public loginForm = new FormGroup({
    nationalCode: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{10}$'),
    ]),
    captcha: new FormControl<string | null>(null, [Validators.required]),
  });
  public onSubmit() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsDirty();
        control.updateValueAndValidity();
      });
      return;
    }
    console.log('form is valid', this.loginForm.value);
  }
}
