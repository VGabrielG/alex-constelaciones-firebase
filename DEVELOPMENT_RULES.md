# Reglas de Desarrollo

Para asegurar que el proyecto se mantenga limpio y manejable, sigue estas pautas:

## 🧭 Principios Generales
- **Componentes Standalone**: Preferimos componentes independientes. No crees módulos de Angular (`NgModule`) a menos que sea estrictamente necesario.
- **Signals**: Usa Angular Signals (`signal`, `computed`, `effect`) para la reactividad en lugar de dependencias complejas o variables simples si necesitas que la UI reaccione.
- **CSS por Componente**: Mantén los estilos de un componente dentro de su propio archivo `.css`. Usa `src/app/app.css` solo para estilos globales de layout.

## 🧹 Limpieza de Código
- **Evita dependencias muertas**: Si eliminas una funcionalidad (como hicimos con las partículas), borra los archivos y desinstala la librería de `package.json`.
- **Importaciones limpias**: Solo importa en `imports: [...]` lo que realmente uses en la plantilla HTML de ese componente.
- **Imágenes livianas**: No subas imágenes de más de 1-2 MB al proyecto. Optimízalas antes de subirlas (especialmente para `public/imagenes/`).

## ✍️ Nomenclatura
- **Carpetas**: Usa siempre `kebab-case` para las carpetas (ej: `mi-musica`).
- **Clases TS**: Usa `PascalCase` para las clases de componentes (ej: `MiMusicaComponent`).
- **Selectores HTML**: Los selectores deben empezar con `app-` seguido del nombre en kebab-case (ej: `app-header`).

## 🔄 Control de Cambios
- **Commits**: Describe brevemente qué has cambiado (ej: "Añadida sección de contacto", "Eliminado código muerto de partículas").
- **Pruebas**: Corre `ng build` antes de un despliegue para asegurarte de que no hay errores de compilación.
