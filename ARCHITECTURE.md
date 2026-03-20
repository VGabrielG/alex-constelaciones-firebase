# Arquitectura de la Aplicación

Este proyecto es una aplicación de **Página Única (SPA)** construida con **Angular 20** siguiendo las mejores prácticas modernas de componentes independientes (**Standalone Components**).

## 🧩 Bloques de Construcción

### 🛠️ Componentes Principales
- **App Root (`src/app/app.ts`)**: El componente base que estructura el diseño global (encabezado y salida del router).
- **Rutas (`src/app/app.routes.ts`)**: Define el mapeo de URLs a las "páginas" del sitio.
- **Header (`src/app/header/`)**: Barra de navegación global y menús móviles.
- **Home (`src/app/home/`)**: Página de aterrizaje con tarjetas de videos interactivos.

### 📜 Lógica Compartida
- **Signals para el Estado**: Usamos `signal` (como en `App`) para detectar si el usuario está en la Home o en una subpágina y así cambiar dinámicamente el estilo del `<body>`.
- **Modales de Video**: Un componente modular `video-modal` que reutilizamos para reproducir YouTube sin salir del sitio.

## 📁 Estructura de Directorios

```text
src/
├── app/
│   ├── header/              # Barra de navegación universal
│   ├── home/                # Componente principal de bienvenida
│   ├── mi-historia/         # Sección informativa sobre la carrera
│   ├── mi-musica/           # Galería de música/videos
│   ├── noticias/            # Módulo de próximas noticias
│   ├── productos-audiovisuales/ # Portafolio de producciones
│   ├── proximos-eventos/     # Agenda de conciertos
│   ├── video-modal/         # Modal genérico para ver videos
│   ├── app.routes.ts        # Configuración central de rutas
│   └── app.ts               # Componente raíz (Root)
├── public/                 # Imágenes y recursos estáticos
└── index.html              # Punto de entrada HTML
```

## 🛠️ Servicios y Backend
- **Firebase**: Se utiliza para el hosting y potencialmente para la gestión de contenidos a futuro.
- **YouTube Embeds**: Los videos están vinculados directamente desde el canal oficial del artista.

## 🎨 Estilos
- Usamos **CSS nativo** aprovechando el encapsulamiento de componentes de Angular.
- Preferimos el uso de variables CSS para el tema (colores azul oscuro, textos claros para modo nocturno).
