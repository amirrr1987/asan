import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',

})
// Child  App
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('asan');
  protected themeService = inject(ThemeService);



  ngOnInit() {
    this.themeService.initializeTheme();
  }

  ngOnDestroy() {
  }


}
