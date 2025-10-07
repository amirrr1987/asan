import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.scss',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'mat-app-background'
  }
})
export class LoginPage {
  hide = signal(true);
  clickEvent(event: MouseEvent | TouchEvent) {
    this.hide.set(!this.hide());
    // event.stopPropagation();
    event.preventDefault();
  }
  loginForm = new FormGroup({
    nationalCode: new FormControl<string | null>(null),
    password: new FormControl<string | null>(null),
    captcha: new FormControl<string | null>(null),
  });
  onSubmit(event: Event) {
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
