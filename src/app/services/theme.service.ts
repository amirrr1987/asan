// theme.service.ts
import { Injectable, signal, } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public currentTheme = signal<'light' | 'dark'>('light');

  toggleTheme() {
    const current = this.currentTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  public setTheme(theme: 'light' | 'dark') {
    const htmlEl = document.documentElement;
    htmlEl.style.colorScheme = theme;
    htmlEl.setAttribute('data-theme', theme);
    this.currentTheme.set(theme);
    localStorage.setItem('theme', theme);

  }

  public initializeTheme() {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    this.setTheme(savedTheme ?? 'light');
  }

}
