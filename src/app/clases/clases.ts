import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParticlesBackground } from '../particles-background/particles-background';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [RouterLink, ParticlesBackground, CommonModule],
  templateUrl: './clases.html',
  styleUrl: './clases.css'
})
export class Clases {

}
