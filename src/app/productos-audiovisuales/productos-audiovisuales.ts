import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParticlesBackground } from '../particles-background/particles-background';

@Component({
  selector: 'app-productos-audiovisuales',
  imports: [RouterLink, ParticlesBackground],
  templateUrl: './productos-audiovisuales.html',
  styleUrl: './productos-audiovisuales.css'
})
export class ProductosAudiovisuales {

}
