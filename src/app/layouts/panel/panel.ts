import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from '@/services/theme.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-panel',
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  protected themeService = inject(ThemeService);

  toggleDrawer() {}
  ngOnInit() {
    this.themeService.initializeTheme();
  }
}
