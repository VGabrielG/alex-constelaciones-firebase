import { Component } from '@angular/core';
import { ParticlesBackground } from '../particles-background/particles-background';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-musica',
  standalone: true,
  imports: [ParticlesBackground, CommonModule],
  templateUrl: './mi-musica.html',
  styleUrl: './mi-musica.css'
})
export class MiMusica {

}
