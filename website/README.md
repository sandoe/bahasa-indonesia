# BahasaBroen

Astro-baseret blueprint til en større, gratis læringsplatform for BIPA og beslægtede sprogruter.

Denne version er ikke bygget som et slide-arkiv. Den er bygget som en rigtig indholdsplatform med:

- content collections
- lesson data i JSON
- teacher mode + self-study mode
- placeholder-videoer i stedet for ophavsretligt følsomme filer
- ruter for flere sprogretninger

## Stack

- Astro 6
- TypeScript
- Firebase Hosting

## Lokal udvikling

```bash
cd /home/aso/repos/projects/bahasa-indonesia/website
npm install
npm run dev
```

## Build

```bash
cd /home/aso/repos/projects/bahasa-indonesia/website
npm run build
```

Build-scriptet kører først en rights-audit via `scripts/audit-content.mjs`.

## Deploy

```bash
cd /home/aso/repos/projects/bahasa-indonesia/website
npx firebase deploy --only hosting
```

Current hosting target:

- `bahasa-indonesia-dk.web.app`

## Vigtige mapper

- `src/content/courses/`: metadata for BIPA 1-8
- `src/content/lessons/`: lesson entries pr. sprogrute
- `src/components/`: UI-komponenter
- `src/pages/`: routes
- `src/styles/`: design system og global styling
- `scripts/`: content- og rights-audit
- `docs/ARCHITECTURE.md`: arkitekturbeskrivelse

## Media policy

Denne version publicerer ikke:

- lærer-slides
- private undervisningsvideoer
- tredjeparts classroom-materiale

I stedet bruges placeholder-slots, som senere kan skiftes til dine egne videoer.
