import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ThemeService } from '@/services/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
type LangList = 'en' | 'fa';

@Component({
  selector: 'app-panel',
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  protected themeService = inject(ThemeService);
  private translate = inject(TranslateService);
  protected currentLang = signal<LangList>('en');

  public toggleLang() {
    //  read from local storage
    this.currentLang.set((localStorage.getItem('lang') as LangList) || 'en');
    this.currentLang.set(this.currentLang() === 'en' ? 'fa' : 'en');
    this.translate.use(this.currentLang());
    localStorage.setItem('lang', this.currentLang());
  }

  toggleDrawer() {}
  ngOnInit() {
    this.themeService.initializeTheme();
  }
}
