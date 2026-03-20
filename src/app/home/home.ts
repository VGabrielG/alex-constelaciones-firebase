import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header';
import { VideoModalComponent } from '../video-modal/video-modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,

    CommonModule,
    HeaderComponent,
    VideoModalComponent
  ],
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

  videos = [
    
    {
      url: 'https://www.youtube.com/embed/dQ2i61B2BJg?si=G82g6JzsOjvOT5YS&amp;clip=UgkxhXqLzi0Hm2rVSJ2exwlKfXSowkF1xTdc&amp;clipt=ELKfCRj1vAs',
      thumb: '/imagenes/musica-griega.png',
      alt: 'Bouzouki griego',
      description: 'Música griega y mediterránea'
    },
    { 
      url: 'https://www.youtube.com/embed/pb3Z8O9P84o?si=_ohbkoCwo5qAEzNa&amp;clip=UgkxwaIamyOapuIIkt-1D9W3X5gayFbtcJ6l&amp;clipt=EPeWARjX6wQ',
      thumb: '/imagenes/guitarra-electrica.png', 
      alt: 'Guitarra eléctrica',
      description: 'Guitarra eléctrica'
    },
    { 
      url: 'https://www.youtube.com/embed/s5m54wpBAyg?si=aPj2pTCROMe4LZS8&amp;clip=UgkxRqsJhWICoZFvgk5_cCM1NSL7iPxMZR60&amp ',
      thumb: '/imagenes/guitarra-clasica.png', 
      alt: 'Guitarra clásica',
      description: 'Composiciones musicales'
    }
  ];

  selectedVideoUrl: string | null = null;

  openVideoModal(videoUrl: string) {
    this.selectedVideoUrl = videoUrl;
  }

  closeVideoModal() {
    this.selectedVideoUrl = null;
  }
}
