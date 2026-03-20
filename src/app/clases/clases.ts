import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './clases.html',
  styleUrl: './clases.css'
})
export class Clases {

}
