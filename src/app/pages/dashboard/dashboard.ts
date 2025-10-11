import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDialogModule,
} from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatButtonModule, MatIconModule, TranslateModule, MatDialogModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  readonly dialog = inject(MatDialog);
  public myList = signal<
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      address: string;
      city: string;
      state: string;
    }[]
  >([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St, Anytown, USA',
      city: 'Anytown',
      state: 'CA',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      phone: '0987654321',
      address: '456 Main St, Anytown, USA',
      city: 'Anytown',
      state: 'CA',
    },
    {
      id: 3,
      name: 'Jim Doe',
      email: 'jim.doe@example.com',
      phone: '1111111111',
      address: '789 Main St, Anytown, USA',
      city: 'Anytown',
      state: 'CA',
    },
    {
      id: 4,
      name: 'Jill Doe',
      email: 'jill.doe@example.com',
      phone: '2222222222',
      address: '101 Main St, Anytown, USA',
      city: 'Anytown',
      state: 'CA',
    },
    {
      id: 5,
      name: 'Jack Doe',
      email: 'jack.doe@example.com',
      phone: '3333333333',
      address: '123 Main St, Anytown, USA',
      city: 'Anytown',
      state: 'CA',
    },
  ]);
}
