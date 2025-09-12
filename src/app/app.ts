import { Component, OnInit, signal, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './header/header';
import { CommonModule } from '@angular/common';
import { ParticlesBackground } from './particles-background/particles-background';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, ParticlesBackground],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  isHomePage = signal(false);

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkUrl(event.urlAfterRedirects);
    });

    this.checkUrl(this.router.url);
  }

  private checkUrl(url: string): void {
    const isHome = url === '/' || url === '/home';
    this.isHomePage.set(isHome);

    if (isHome) {
      this.renderer.addClass(this.el.nativeElement, 'is-home-page');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'is-home-page');
    }
  }
}
