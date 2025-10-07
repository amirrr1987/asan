import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-panel',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {}
