# CONSULTA SOCIAL

MVP web para una plataforma chilena de atención, perfiles profesionales y agendamiento en el área social.

## Descripción

CONSULTA SOCIAL busca conectar a personas, familias, comités de vivienda y organizaciones con profesionales del área social. La plataforma permite visualizar especialidades, disponibilidad y modalidades de atención, sin prometer beneficios estatales ni reemplazar a municipalidades, SERVIU, ChileAtiende, IPS u otros organismos públicos.

## Objetivo del MVP

- Presentar una experiencia minimalista de búsqueda y agenda.
- Mostrar perfiles o categorías profesionales piloto.
- Explicar servicios, límites éticos y valores referenciales con poco texto.
- Incluir CTA a WhatsApp con número placeholder.
- Dejar el proyecto listo para deploy automático en GitHub Pages.

## Stack técnico

- Vite
- React
- JavaScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue en GitHub Pages

El proyecto incluye el workflow `.github/workflows/deploy.yml`, que instala dependencias, compila con `npm run build` y publica el contenido de `dist` en GitHub Pages.

Si GitHub Pages no queda activo automáticamente:

1. Entra al repositorio en GitHub.
2. Ve a `Settings` -> `Pages`.
3. En `Build and deployment`, selecciona `GitHub Actions` como source.
4. Ejecuta nuevamente el workflow `Deploy to GitHub Pages` o haz un nuevo push a `main`.

La configuración de Vite usa:

```js
base: '/consulta-trabajo-social/'
```

## Roadmap inicial

### Fase 1

- Home con buscador de atención.
- Perfiles profesionales piloto.
- Servicios compactos.
- Modalidades y valores referenciales.
- CTA WhatsApp.

### Fase 2

- Motor de agenda real.
- Onboarding de profesionales.
- Página pública por perfil.
- Página específica de RSH.
- Página específica de vivienda y comités.

### Fase 3

- Dominio propio.
- Integración con agenda.
- Integración con pagos.
- Panel interno de gestión de casos, solo si existe backend seguro.

## Advertencia sobre datos sensibles

No subir datos sensibles al repositorio. No almacenar RUT, ingresos, información de salud, discapacidad, datos familiares identificables, credenciales, ClaveÚnica ni documentación personal sin un backend seguro, políticas de acceso y consentimiento adecuados.
