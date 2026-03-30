# Refactoring & Clean Code

## P1 - Duplication critique

- [x] **Factory d'animation unique** : les 3 fichiers `animations.ts` (home-menu, creations-menu, projects-menu) sont quasi-identiques. Créer une factory function qui prend le trigger name en paramètre.
- [x] **DropdownMenuComponent générique** : fusionner `creations-menu` et `projects-menu` (logique TS + SCSS 100% identiques) en un seul composant qui accepte les items en `@Input`.
- [x] **SupportersComponent** : extraire la section "soutiens" (sponsors) dupliquée dans 6 templates (meduses, horizons-cailloux, moon-souls, seven-tries, musee, jeune-public).

## P2 - Duplication haute & architecture

- [x] **Mixins SCSS pour les pages de détail** : les 8 pages création/projet partagent ~95% du même SCSS (page-container, page-title, content-block, with-image, blue-frame, responsive). Extraire des mixins ou classes partagées.
- [ ] **Extraire données artistes de meduses.component.ts** : déplacer la classe `Artist` dans `models/`, externaliser les données artistes, centraliser `getArtistImagePath` (dupliqué dans artist-modal).
- [ ] **Variables couleurs/font-size manquantes** : ajouter dans `_variables.scss` les gris (`#c1c1c1`, `#dcdcdc`, `#9c9c9c`), blanc, noir, et une variable pour `font-size: 1.2rem` / `clamp(1.2rem, 2vw, 2rem)` utilisés dans 5+ fichiers.

## P3 - Clean code & standards

- [x] **Supprimer injections Router inutiles** : moon-souls, seven-tries, horizons-cailloux, workshops injectent `Router` sans l'utiliser. Supprimer aussi les constructeurs vides (contact, pluie-montchal, tuning-in-to-the-senses).
- [x] **i18n manquants** : ajouter `i18n` sur "Ville de Murol" (4 templates) et sur les boutons "En savoir plus" dans creations.component.html et projects.component.html.
- [x] **Accessibilité** : remplacer le `<div>` clickable par un `<button>` avec `aria-label` dans artist-modal. Ajouter `i18n-alt` sur les images de sponsors.
- [x] **Interface Project inutilisée** : `models/Project.ts` n'est importé nulle part. L'utiliser dans les composants ou le supprimer.
