# Direction du README

## Concept réalisé : RAF'STECH / Mission Console

Un profil qui ressemble à l'entrée d'un atelier de création logicielle : une bannière de console, une présentation courte autour des SaaS et des solutions métier sur mesure, des projets que l'on peut explorer et des contributions professionnelles clairement attribuées.

Cette composition reprend la grille, la palette et les repères de console du portfolio. Elle associe une bannière typographique, une illustration de couches logicielles et une galerie de quatre projets. Les descriptions restent en texte sur toute la largeur pour être lisibles sur mobile.

## Parcours de lecture

1. **Identité** — RAF'STECH, Moucharaf ADEOCHUN, ingénieur logiciel à Cotonou ; une promesse courte autour des SaaS, des applications web et mobiles et de l'e-commerce sur mesure.
2. **Missions livrées** — ArboJSON, Raflane, Playgrid et CovAtlas, avec un usage concret et un accès à chaque fiche.
3. **Travail en équipe** — ingénieur logiciel chez Vertim Coders depuis novembre 2025 ; conception, développement, maintenance et évolution, avec QuoteFlow et ASO comme contributions documentées.
4. **Boîte à outils** — technologies regroupées par usage : interfaces, backend/e-commerce, mobile et exploration Python/OpenCV.
5. **Parcours** — section repliable pour la formation, l'expérience et le projet de reconnaissance faciale.
6. **Contact** — portfolio, LinkedIn et e-mail.

Le périmètre WordPress couvre les plugins et les fonctionnalités WooCommerce personnalisées. Le développement de thèmes est exclu, conformément à la précision de l'utilisateur. Les applications personnelles du catalogue restent décrites selon leurs fonctions réelles ; le positionnement SaaS ne leur attribue pas un modèle commercial non documenté.

## Traitement visuel réalisé

- Quatre variantes de bannière SVG : bureau et mobile, chacune en thème clair et sombre ; sélection par `<picture>`.
- Quatre cartes illustrées : JSON et graphe pour ArboJSON, tableau pour Raflane, jeux pour Playgrid, carte et graphique pour CovAtlas.
- Des illustrations originales ; elles ne sont pas des captures des applications et ne contiennent ni statistiques ni données réelles.
- Une composition statique, des textes alternatifs descriptifs et du texte Markdown pour les informations essentielles.
- Des liens directs vers les démos et des liens vers les fiches du portfolio pour découvrir le contexte de chaque projet.
- Des SVG autonomes et un générateur Node.js sans dépendance ; aucune requête à un service de badges ou d'images pour afficher les visuels.

Les interactions du README sont les liens des projets et la section de parcours repliable. Les aperçus locaux ont été vérifiés dans Edge avec une feuille de styles GitHub en thèmes clair et sombre, aux largeurs 1280, 390 et 320 pixels. Après publication, le rendu réel sur [le profil GitHub](https://github.com/Raf-is-Tech) a également été vérifié aux largeurs 1280 et 390 pixels dans les deux thèmes : images chargées, bonne variante de bannière, aucun débordement horizontal et parcours repliable fonctionnel. Les fichiers et les commandes de régénération sont documentés dans [VISUELS.md](VISUELS.md).

## Étapes

- [x] Initialiser Git sur `main`.
- [x] Ajouter les fichiers de base et un README éditorial.
- [x] Analyser le portfolio, documenter les limites LinkedIn et vérifier les liens de code publics.
- [x] Intégrer le texte des missions et les captures LinkedIn fournis par l'utilisateur ; corriger le début chez Vertim Coders à novembre 2025.
- [x] Créer la bannière et la composition visuelle.
- [x] Vérifier les aperçus locaux sur mobile et dans les deux thèmes.
- [x] Vérifier le rendu sur le profil GitHub après publication.
- [x] Connecter le dépôt public `Raf-is-Tech/Raf-is-Tech` et publier.
