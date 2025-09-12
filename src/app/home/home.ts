import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParticlesBackground } from '../particles-background/particles-background';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ParticlesBackground, CommonModule, HeaderComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  readonly navigationButtons = [
    { text: 'Inicio', href: '/' },
    { text: 'Productos Audiovisuales', href: '/Productos-Audiovisuales' },
    { text: 'Mi Historia', href: '/Mi-Historia' },
    { text: 'Mi música', href: '/Mi-Musica' },
    { text: 'Próximos Eventos', href: '/Proximos-Eventos' },
    { text: 'Contacto', href: '/Contacto' },
    { text: 'Clases', href: '/Clases' }
  ];
}
