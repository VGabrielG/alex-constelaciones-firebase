import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesBackground } from '../particles-background/particles-background';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, ParticlesBackground],
  templateUrl: './noticias.html',
  styleUrl: './noticias.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent {
  noticias = [
    {
      imagen: '/imagenes/proximas-noticias.png',
      descripcion: 'Proximamente...',
    },
    {
      imagen: '/imagenes/proximas-noticias.png',
      descripcion: 'Proximamente...',
    },
    {
      imagen: '/imagenes/proximas-noticias.png',
      descripcion: 'Proximamente...',
    },
    {
      imagen: '/imagenes/proximas-noticias.png',
      descripcion: 'Proximamente...',
    },
  ];
}
