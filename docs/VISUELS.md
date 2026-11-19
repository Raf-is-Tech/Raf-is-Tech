# Visuels du README

Les huit fichiers de [assets](../assets) sont des SVG originaux, autonomes et statiques. Ils reprennent le fond bleu nuit, le cyan et le rouge du portfolio. Les cartes de projets ont chacune une couleur d'accent ; les dessins représentent leurs usages, sans prétendre reproduire leur interface.

## Fichiers

| Fichier | Usage |
| --- | --- |
| `hero-dark.svg` / `hero-light.svg` | Bannière 1200 × 440, avec typographie et illustration de couches logicielles |
| `hero-mobile-dark.svg` / `hero-mobile-light.svg` | Bannière 680 × 460, avec composition adaptée aux écrans de 600 pixels et moins |
| `arbojson.svg` | Éditeur JSON et graphe de données |
| `raflane.svg` | Colonnes, cartes et déplacement d'une tâche |
| `playgrid.svg` | Tuiles de jeu, memory et manette |
| `covatlas.svg` | Carte stylisée et courbe illustrative, sans valeurs réelles |

La bannière utilise `<picture>` pour sélectionner sa composition et son thème. Les cartes restent sur fond sombre dans les deux thèmes. Les noms, les descriptions, les liens et les technologies sont aussi présents en texte dans le README.

## Modifier et régénérer

Depuis la racine du dépôt, avec Node.js :

```sh
node scripts/build-assets.mjs
```

Le [générateur](../scripts/build-assets.mjs) utilise uniquement les modules intégrés à Node.js. Modifier ce fichier puis régénérer les SVG pour conserver des sources cohérentes. Les polices ont des variantes de repli système ; aucune police distante n'est chargée.

## Vérification réalisée

- Lecture XML des huit SVG et vérification des références locales du README.
- Aperçu du Markdown et du HTML dans Edge, avec les styles de `github-markdown-css`.
- Contrôle aux largeurs 1280, 390 et 320 pixels, en thèmes clair et sombre : images chargées, bonne variante de bannière, textes alternatifs et absence de débordement horizontal.
- Inspection visuelle des captures et ouverture de la section de parcours.

Les aperçus locaux et les outils temporaires sont dans `.preview/`, exclu de Git.

## Publication et vérification sur GitHub

Le README est publié dans le dépôt public [Raf-is-Tech/Raf-is-Tech](https://github.com/Raf-is-Tech/Raf-is-Tech), sur la branche `main`, et apparaît sur [le profil GitHub](https://github.com/Raf-is-Tech).

Le rendu réel a été contrôlé dans Edge aux largeurs 1280 et 390 pixels, dans les thèmes clair et sombre. Les cinq images visibles sont chargées, les variantes de bannière sont sélectionnées correctement et les tableaux ne débordent pas. La section de parcours s'ouvre et son contenu est visible. Les captures de cette vérification sont conservées localement dans `.preview/github-profile-*.png`.

Pour publier de futures modifications, depuis ce dépôt local :

```sh
git add README.md assets scripts docs
git commit -m "docs: update profile"
git push
```
