import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '@/services/theme.service';
@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth implements OnInit{
  public themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.initializeTheme();
  }
}
