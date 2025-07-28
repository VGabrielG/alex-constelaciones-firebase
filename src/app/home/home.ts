import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { RouterModule} from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  

  readonly navigationButtons = [
    { id: 1, text: 'Servicios Audiovisuales', href: '/Productos-Audiovisuales' },
    { id: 2, text: 'Mi Historia', href: '/mi-historia' },
    { id: 3, text: 'Mi música', href: '/mi-musica' },
    { id: 4, text: 'Contacto', href: '/contacto' }
  ];

  
}