---
description: Reglas propias de este proyecto
applyTo: "src/**"
---

- Cada funcionalidad lee sus datos con su query, en `src/features/<funcionalidad>/<funcionalidad>Query.ts`.
- El estado derivado se calcula al renderizar, no se guarda en useState.
