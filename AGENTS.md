# workshop-coe

Aplicación React de ejemplo para los talleres del AI CoE.

- Stack: React 19, React Router 7, Tailwind CSS 4 y Vite, en TypeScript estricto.
- Estructura por funcionalidad: cada carpeta de `src/features/` contiene su página, sus componentes, su `api.ts` y sus tipos. Lo compartido va en `src/shared/`.
- Estilos con las clases de Tailwind y los tokens de `src/app/styles.css`. No añadas CSS suelto.
- La API simulada vive en `mock/` y solo existe con `pnpm dev`.
- Antes de dar una tarea por terminada: `pnpm typecheck`.
