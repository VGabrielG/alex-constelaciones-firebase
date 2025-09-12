import { Component } from '@angular/core';
import { ParticlesBackground } from '../particles-background/particles-background';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-historia',
  standalone: true,
  imports: [ParticlesBackground, CommonModule],
  templateUrl: './mi-historia.html',
  styleUrl: './mi-historia.css'
})
export class MiHistoria {

}
