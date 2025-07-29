import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  // 'imports' es para componentes standalone. Si no usas esa arquitectura, puedes eliminar esa línea.
  // imports: [], 
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  // --- Propiedades para la información de contacto ---

  // Número en formato internacional para mostrar y para llamadas (con +)
  numeroDeContacto = '+56 9 83928092';

  // Número sin símbolos para el enlace de WhatsApp
  numeroParaWhatsApp = '56983928092';

  // Correo electrónico
  email = 'alexandrostefarikis@gmail.com';

  // Mensaje opcional predeterminado para WhatsApp
  mensajeWhatsApp = 'Hola, vi tu portafolio y me gustaría contactarte.';

  // --- Getter para construir la URL de WhatsApp dinámicamente ---

  /**
   * Construye la URL completa para el chat de WhatsApp,
   * codificando el mensaje para que sea seguro para una URL.
   */
  get urlWhatsApp(): string {
    return `https://wa.me/${this.numeroParaWhatsApp}?text=${encodeURIComponent(this.mensajeWhatsApp)}`;
  }
}

