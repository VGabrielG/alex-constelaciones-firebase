import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgParticlesModule } from 'ng-particles';
import { Engine, ISourceOptions } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgParticlesModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  readonly id = "tsparticles";

  readonly navigationButtons = [
    { id: 1, text: 'Donar', href: '#' },
    { id: 2, text: 'Mi Historia', href: '#' },
    { id: 3, text: 'Servicios que Realizamos', href: '#' },
    { id: 4, text: 'Contacto', href: '#' }
  ];

  particlesInit = async (engine: Engine): Promise<void> => {
    console.log('Initializing particles...');
    await loadFull(engine);
  };

  particlesOptions: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 3,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 0.2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out"
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      }
    },
    background: {
      color: {
        value: "#040926"
      }
    },
    detectRetina: true,

    // --- INTERACTIVITY SECTION ---
    interactivity: {
      detectsOn: "canvas", // Where to detect mouse events: "canvas", "window", or "parent"
      events: {
        onClick: {
          enable: true, // Enable click interaction
          mode: "push" // Mode when clicking: "push", "remove", "bubble", "repulse", "grab"
        },
        onHover: {
          enable: true, // Enable hover interaction
          mode: "grab", // Mode when hovering: "grab", "bubble", "repulse", "attract", "connect", "trail", "light"
          parallax: {
            enable: false, // Whether to enable parallax effect on hover
            force: 60,
            smooth: 10
          }
        },
        resize: true // Automatically resize the particles on window resize
      },
      modes: {
        // Configure the behavior of each interaction mode
        grab: {
          distance: 140, // How far particles are affected by the mouse
          links: {
            opacity: 1 // Opacity of links when grabbed
          }
        },
        bubble: {
          distance: 200,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          quantity: 4 // Number of particles to push on click
        },
        remove: {
          quantity: 2 // Number of particles to remove on click
        },
        attract: {
          distance: 200,
          duration: 0.4,
          factor: 5 // How strong the attraction is
        },
        trail: {
          delay: 0.005, // Delay before a new particle is created on trail
          quantity: 5 // Quantity of particles in the trail
        }
      }
    }
  };
}