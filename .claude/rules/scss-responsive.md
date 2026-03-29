---
globs: src/**/*.scss
---

## Responsive SCSS conventions

### Typographie fluide
Utiliser les variables de `_variables.scss` au lieu de font-size en dur :
- Titres de page : `$page-title-size` (clamp 2rem → 5rem)
- Titres de section : `$section-title-size` (clamp 1.5rem → 3rem)
- Titres de cartes : `$card-title-size` (clamp 1.5rem → 3rem)
- Sous-titres : `$subtitle-size` (clamp 1rem → 1.5rem)
- Texte courant : `$body-size` (clamp 1rem → 1.2rem)

Ne pas dupliquer les font-size dans les media queries quand une variable `clamp()` gère déjà le scaling.

### Largeurs et dimensions
- Largeurs max : utiliser `width: min(100%, Xrem)` au lieu de `width: Xrem` avec override `100%` en media query. Ça évite le débordement sans media query.
- Exception : quand un élément doit volontairement déborder de son conteneur (ex : `.portrait` dans la page présentation), garder la largeur fixe avec un override mobile explicite.
- Vidéos : utiliser `aspect-ratio` (16/9, 9/16, 2/1...) au lieu de `width` + `height` en dur. Combiné avec `width: min(100%, 60rem)`, la vidéo s'adapte à toutes les tailles d'écran.
- Images principales : `width: min(100%, Xrem)` + `height: auto`.

### Paddings et marges
- Paddings latéraux : utiliser `clamp(min, preferred, max)` au lieu de valeurs fixes avec override mobile (ex : `padding: 2rem clamp(1rem, 6vw, 8rem)` au lieu de `padding: 2rem 8rem` → `padding: 2rem 0rem`).
- Variable `$page-padding-inline` disponible pour le padding principal des pages.

### Media queries
- Un seul breakpoint : `$small-screen-size` (60rem).
- N'ajouter dans `@media` que ce qui ne peut pas être géré par `clamp()`, `min()` ou `max()` — typiquement les changements de layout (`flex-direction`, `grid`, display).
- Ne pas dupliquer dans la media query des propriétés qui sont déjà fluides grâce à `clamp()` ou `min()`.

### Vidéos embarquées (YouTube, Vimeo)
Pattern standard :
```scss
.video {
  width: min(100%, 60rem);
  aspect-ratio: 16 / 9;
  padding: clamp(0rem, 3vw, 4rem);
}
```
Pas besoin de media query pour les vidéos avec ce pattern.
