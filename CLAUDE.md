# CLAUDE.md

## Vue d'ensemble

Site web de la Compagnie EZO (compagnie de danse contemporaine). Application Angular 14 avec Angular Material, bilingue (français/anglais), déployée sur Firebase Hosting.

## Commandes

- **Serveur de dev (français) :** `npm run serve:fr` → localhost:4200
- **Serveur de dev (anglais) :** `npm run serve:en`
- **Build de production :** `ng build --aot --configuration "production" --localize`
- **Extraction des chaînes i18n :** `npm run translate`
- **Lancer les tests :** `ng test`
- **Déployer :** `firebase deploy -m "<message>" --only hosting`

La CI build et déploie automatiquement sur Firebase à chaque push sur `main`.

## Architecture

- **Angular 14** avec SCSS, Angular Material 14, RxJS 7
- **Routing :** Défini dans `src/app/app.module.ts` — routes à plat par fonctionnalité (home, presentation, projects, creations, workshops, contact) avec sous-pages imbriquées pour les créations
- **i18n :** i18n natif Angular avec fichiers XLF dans `src/locale/`. Le français est la locale source ; l'anglais est la traduction. Les URLs sont préfixées `/fr/` et `/en/`. Le changement de langue est géré par réécriture d'URL dans `HomeMenuComponent`
- **Déploiement :** Firebase Hosting avec rewrites — `/en/**` → index anglais, tout le reste → index français

## Répertoires clés

- `src/app/models/` — Interfaces de données (ex : `Project.ts`)
- `src/app/shared/` — Composants réutilisables (ex : `mat-know-more`)
- `src/app/header/` — Header avec détection de direction de scroll via RxJS
- `src/app/home-menu/` — Menu de navigation avec animations Angular
- `src/app/creations/` — Pages des créations artistiques (meduses, horizons-cailloux, seven-tries, moon-souls)
- `src/styles/_variables.scss` — Tokens de design : `$dark-blue: #082bcb`, `$orange-solo: #ff9021`, `$small-screen-size: 60rem`
- `src/locale/` — Fichiers de traduction XLF

## Gestion du contenu

Tout le contenu est codé en dur dans les templates des composants et les assets — pas de CMS. Ajouter une nouvelle création ou un projet implique de créer de nouveaux composants Angular et d'ajouter des routes dans `app.module.ts`.

## Contenu du site

Compagnie EZO est une compagnie de danse contemporaine fondée par la chorégraphe Estelle Bézombes, basée en Auvergne-Rhône-Alpes.

- **Accueil** (`/home`) — Présentation courte de la compagnie + section **Actualités** (événements à venir, programme SEED, teasers vidéo)
- **Présentation** (`/about`) — Biographie d'Estelle Bézombes (parcours : danse sur glace, GR, formation en Grèce et à Lyon, programme DART à Berlin) et démarche artistique (humanité, écoféminisme, dialogue intériorité/expression corporelle)
- **Créations** (`/creations`) — Les pièces de la compagnie :
  - **Moon Souls** (2026) — Duo. Déconstruction des stéréotypes de genre, inspiré du mythe d'Aristophane
  - **Les méduses ne nagent jamais seules** (2024-2025) — Pièce pour 5 interprètes, 30 min. Mécanismes de socialisation, différence et rejet
  - **Seven Tries** (2024) — Solo avec néon lumineux, 15 min. Relation corps/systèmes (patriarcal, capitaliste, etc.)
  - **L'horizon est fait de petits cailloux** (2023) — Solo, 8 min. Poésie du quotidien face à l'horizon existentiel
- **Projets** (`/projects`) — Recherche artistique :
  - **Performance in situ Musée** — Performance déambulatoire au MEM Murol, 20 min. Dialogue entre expositions et danse lors de la Nuit européenne des musées
  - **Performance jeune public** — Performance de danse contemporaine pour enfants et adultes, 15 min. Deux histoires en mouvement (La métamorphose, Retrouver le chemin)
  - **Tuning in to the senses** — Performance arts visuels/mouvement, écoféminisme, lié au programme SEED (résidences Avignon/Athènes)
  - **Dialogue avec Pluie de Montchal** — Performance filmée avec le plasticien Pier Fabre (Horizons Arts-Nature 2022)
- **Ateliers** (`/workshops`) — Médiation et transmission : workshops dans écoles de danse (Le Cycle, Manufacture d'Aurillac, Hallet Eghayan, Cité Chorégraphique), centres sociaux et écoles primaires
- **Contact** (`/contact`) — Coordonnées : email compagnie.ezo@gmail.com, Instagram @cie.ezo, adresse à Murol (63), infos légales (SIRET, APE)

## Responsive

Lors de l'ajout ou la modification de contenu, toujours considérer le rendu mobile. Le comportement responsive est géré via des media queries CSS sur `$small-screen-size` (60rem) dans le fichier SCSS de chaque composant. Chaque modification de contenu doit être vérifiée aux breakpoints desktop et mobile.
