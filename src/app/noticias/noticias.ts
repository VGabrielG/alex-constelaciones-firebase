import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
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
