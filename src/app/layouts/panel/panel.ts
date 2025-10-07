import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-panel',
  imports: [RouterOutlet, MatButtonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {}
