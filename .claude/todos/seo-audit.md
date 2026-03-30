# Audit SEO — Compagnie EZO

## Ce qui est bien fait
- Meta tags complets dans `src/index.html` (title, description, OG, Twitter Cards, canonical, robots, theme-color, keywords)
- `robots.txt` et `sitemap.xml` présents et inclus dans le build
- Alt text sur toutes les images avec support i18n
- HTML sémantique partiel (`<header>`, `<main>`, `<nav>`, `<section>`)
- URLs propres et descriptives (`/creations/moon-souls`, etc.)
- i18n bien implémenté avec builds séparés `/fr/` et `/en/`
- `ngSrc` (Angular Image Directive) utilisé pour l'optimisation des images
- Hiérarchie H1/H2 correcte dans le header
- Firebase Hosting avec headers de sécurité et cache

## Problèmes critiques

### 1. Pas de SSR/prerendering
Le site est 100% CSR. Les crawlers voient un `<app-root>` vide. Point le plus impactant pour le SEO.
- Nécessite migration vers le builder `application` + `@angular/ssr`
- Attention : plusieurs composants accèdent à `window` directement (`header`, `home-menu`, `meduses`) — il faudra garder avec `isPlatformBrowser`
- La migration `browser` → `application` builder implique aussi de passer de `AppModule` à `bootstrapApplication` (standalone)

### 2. Meta tags identiques sur toutes les pages
Aucun usage des services `Title` et `Meta` d'Angular. Toutes les pages partagent le même titre et description.
- Ajouter `data` avec `$localize` sur chaque route (titre + description)
- Écouter `NavigationEnd` dans `AppComponent` pour mettre à jour `<title>`, `<meta description>`, `og:title`, `og:description`, `og:url`, canonical

### 3. Pas de données structurées (JSON-LD)
Aucun markup schema.org. Types à ajouter : `Organization`, `Person` (Estelle Bézombes), `CreativeWork` (les pièces), `Event` (dates de représentation).

### ~~4. Pas de `loading="lazy"` sur les images~~ ✅
~~Les images below-the-fold se chargent toutes immédiatement.~~ Géré automatiquement par `ngSrc` (`NgOptimizedImage`) — toutes les images sans `priority` ont `loading="lazy"` par défaut.

## Problèmes secondaires
- ~~Pas de balises `<article>` pour les créations/projets, pas de `<footer>`~~ ✅
- ~~Titres de sections en `<span>` au lieu de `<h2>`/`<h3>`~~ ✅
- Sitemap sans `changefreq` ni `priority`
- ~~Pas de `hreflang` dans le HTML pour lier les versions fr/en~~ ✅
- `lastmod` du sitemap figé à `2024-04-01`

## Notes d'implémentation (tentative avortée)
- La migration vers le builder `application` a échoué au prerendering (erreur `NG0401` — conflit de plateforme)
- Le `baseHref` des configs `fr`/`en` crée un double préfixe avec le builder `application` (il faut le retirer, la localisation gère le préfixe automatiquement)
- `provideAnimationsAsync()` est le bon choix pour le SSR
- Fichiers nécessaires : `app.config.ts`, `app.config.server.ts`, `app.routes.ts`, `main.server.ts`, `routes.txt`
