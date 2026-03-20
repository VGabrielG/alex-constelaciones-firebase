# Mapa del Proyecto para Asistentes de IA

Si eres una IA leyendo esto, aquí tienes el resumen ejecutivo para que no pierdas tiempo leyendo todo el código.

## 📝 Resumen del Negocio
Sitio personal del músico **Alexandros Tefarikis**. El objetivo es mostrar su historia, música, clases de música (Bouzouki, guitarra) y eventos.

## 💻 Tech Stack
- **Framework**: Angular 20 (Standalone Components).
- **Enrutamiento**: Configurado en `src/app/app.routes.ts`. Todas las páginas principales están mapeadas.
- **Activos**: Ubicados en `public/`.
- **Hosting**: Firebase.

## 🗺️ Puntos Clave para la IA
1. **Punto de Entrada**: `src/main.ts` inicia `AppComponent` en `src/app/app.ts`.
2. **Layout Global**: El menú está en `app-header`. El contenido dinámico se carga en `<router-outlet />`.
3. **Mecanismo de Modales**: Se usa el componente `video-modal` para reproducir YouTube; se controla mediante una propiedad `selectedVideoUrl` (vía Signal o variable simple en el componente padre).
4. **Estado Actual**: Estamos en medio de una **migración de diseño**. Hemos decidido eliminar el sistema de partículas (`ng-particles`) para favorecer un fondo limpio (idealmente blanco, aunque `app.css` aún tiene azul oscuro).
5. **Código Muerto Detectado**:
    - Carpeta `src/app/particles-background/` (No se usa).
    - Librerías `ng-particles`, `tsparticles`, `p5`, `tsparticles-engine`, `tslib`.
    - Imágenes pesadas (ver `TODO.md`).

## ⚠️ Lo que NO debes hacer
- No vuelvas a proponer la instalación de `ng-particles` o similares.
- No añadas `NgModule` a los componentes; usa `standalone: true`.
- No toques el componente `video-modal` sin entender que se usa en varias páginas.

## 🔍 Cómo Encontrar Cosas
- Si buscas una sección (ej: "Clases"): `src/app/clases/`.
- Si buscas configuración global: `src/app/app.config.ts`.
- Si buscas el tema de colores: `src/app/app.css` y `src/styles.css`.
