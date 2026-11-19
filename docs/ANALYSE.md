# Analyse du profil et des sources

Analyse réalisée le 19 novembre 2026. Ce document prépare le README ; il ne constitue pas une vérification indépendante du parcours professionnel.

## Sources et limites

| Source | Lecture effectuée | Limite |
| --- | --- | --- |
| [Portfolio](https://rafstech-portfolio.vercel.app/) | Accueil, compétences, services, catalogue, contact et les dix fiches projet ; HTML public et feuille de styles | Analyse du contenu et du CSS, sans validation visuelle dans un navigateur ni test fonctionnel des applications |
| [LinkedIn](https://www.linkedin.com/in/moucharaf-adeochun/) | Tentative d'accès direct et recherche ciblée | Accès direct bloqué par LinkedIn, code 999 ; aucun contenu détaillé du profil n'a pu être analysé |
| [Profil GitHub public](https://github.com/Raf-is-Tech) | Profil et liste des dépôts via l'API publique GitHub | Les dépôts privés et le compte authentifié ne sont pas accessibles par cette lecture |
| [Documentation GitHub](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme) | Conditions d'affichage d'un README de profil | Le dépôt distant reste à créer ou à connecter |

Les informations de carrière ci-dessous proviennent du portfolio. Ne pas les présenter comme recoupées avec LinkedIn. Pour compléter cette partie ultérieurement, un export ou le texte du profil LinkedIn suffira.

## Positionnement

Le portfolio présente Moucharaf ADEOCHUN, sous la marque **RAF'STECH**, comme ingénieur logiciel à Cotonou. Le profil GitHub emploie le nom Fulgence Moucharaf ADEOCHUN et le pseudonyme **Raf-is-Tech**.

L'angle le plus précis pour le README est la création d'outils métier et de produits e-commerce : WordPress/WooCommerce et Laravel constituent une spécialité professionnelle, avec React, Next.js et Flutter pour les interfaces web et mobiles. Python/OpenCV apporte une dimension d'exploration, illustrée par un projet concret.

La bio GitHub mentionne également Django et les SaaS. Les fiches du portfolio consultées ne les documentent pas suffisamment pour les mettre au premier plan du README initial.

## Parcours présenté

- **2022–2025 — ESM-BENIN** : licence en Systèmes informatiques et logiciels.
- **2025 — FIFACOM** : stage professionnel en développement web backend ; React, Laravel et intégration d'API.
- **Depuis décembre 2025 — Vertim Coders** : développement web et mobile, plugins WordPress et solutions e-commerce.

Le portfolio affiche « +2 ans d'expérience ». Le README initial privilégie les dates et les réalisations plutôt qu'un compteur d'ancienneté à maintenir.

## Lecture des dix projets

| Projet | Éléments concrets à valoriser | Place dans le profil |
| --- | --- | --- |
| [ArboJSON](https://rafstech-portfolio.vercel.app/projects/arbojson) | Édition et validation JSON, arbre et graphe navigables, import par URL, export visuel ; Next.js, TypeScript, Monaco, Reaflow, Zustand | Démonstration d'un outil développeur ; bon candidat pour le premier projet mis en avant |
| [Raflane](https://rafstech-portfolio.vercel.app/projects/raflane) | Listes, cartes, glisser-déposer, sauvegarde locale et thèmes ; React, TypeScript, Vite, Tailwind | Expérience produit et interactions |
| [Playgrid](https://rafstech-portfolio.vercel.app/projects/playgrid) | Quatre jeux, mode hors ligne, sauvegarde des parties ; React, TypeScript, Tailwind, SCSS, PWA | Signature ludique cohérente avec l'identité du portfolio |
| [CovAtlas](https://rafstech-portfolio.vercel.app/projects/covatlas) | Indicateurs, carte, recherche et tri par pays ; React, Material UI, Leaflet, Chart.js, API disease.sh | Intégration de données et cartographie ; ne pas promettre des données médicales actuelles |
| [QuoteFlow](https://rafstech-portfolio.vercel.app/projects/quoteflow) | Formules de prix, règles conditionnelles, options, remises et demandes de devis ; WordPress, WooCommerce, PHP, JavaScript | Produit commercial de Vertim Coders ; contribution au développement, sans revendication de propriété ou de réalisation en solo |
| [ASO — All Sign Customizer](https://rafstech-portfolio.vercel.app/projects/all-sign-customizer) | Personnalisation avec aperçu, tarification et exports ; WordPress, WooCommerce, PHP, JavaScript, REST API | Produit de Vertim Coders ; rôle déclaré : refonte des vues, de la logique applicative et des API |
| [Pointage par reconnaissance faciale](https://rafstech-portfolio.vercel.app/projects/face-recognition) | Application Windows monoposte, détection en temps réel, administration et rapports ; Python, OpenCV, HTML, CSS | Projet personnel de 2025 ; intérêt pour la vision par ordinateur, sans extrapoler une expertise générale en IA |
| [Site e-commerce](https://rafstech-portfolio.vercel.app/projects/e-commerce) | Produits, fournisseurs et stocks ; Laravel, Bootstrap, JavaScript, MySQL | Première expérience fullstack |
| [Mini Chat](https://rafstech-portfolio.vercel.app/projects/mini-chat) | Salons et interactions de messagerie ; PHP, JavaScript, Socket.io, HTML, CSS | Premières réalisations ; le protocole et l'architecture ne sont pas détaillés |
| [Service de facturation](https://rafstech-portfolio.vercel.app/projects/billing-system) | Création de factures et administration commerciale ; Laravel, JavaScript, MySQL | Cas d'usage métier complémentaire |

Les descriptions sont celles du portfolio, pas le résultat d'un audit du code. Les quatre applications récentes donnent une lecture plus actuelle du profil que les seuls projets de 2025 présentés en premier sur l'accueil.

## Identité visuelle existante

Le CSS et le balisage décrivent une interface inspirée des consoles et des jeux : préchargement « BOOT / 01 », grille de fond, lignes de balayage, panneaux encadrés, repères de chapitre, vocabulaire de classe et d'XP, fiches de compétences et dossiers de projets.

Palette relevée dans les variables CSS :

| Usage | Valeur |
| --- | --- |
| Fond | `#090d14` |
| Texte | `#f5f8ff` |
| Cyan principal | `#49dcff` |
| Accent rouge | `#ff3155` |
| Panneau | `#171b22` |
| Texte secondaire | `#9aa5b5` |

Les familles déclarées sont Press Start 2P pour les titres, VT323 pour le texte de console et Rajdhani pour le corps, avec des polices de repli. Le site possède aussi un thème clair et une version anglaise.

La transposition recommandée est une console de missions sobre : identité forte en ouverture, puis preuves concrètes et liens. La lisibilité des projets doit rester prioritaire sur les effets décoratifs.

## Liens et cohérence à surveiller

Les liens de code annoncés pour [ArboJSON](https://github.com/Raf-is-Tech/ArboJSON), [Raflane](https://github.com/Raf-is-Tech/Raflane), [Playgrid](https://github.com/Raf-is-Tech/Playgrid) et [CovAtlas](https://github.com/Raf-is-Tech/CovAtlas) renvoient **404 via l'API GitHub non authentifiée** lors de cette analyse. Cela peut correspondre à des dépôts privés, déplacés ou absents ; leur cause n'est pas établie. Ils ne figurent pas non plus dans la liste publique des dépôts obtenue pendant cette consultation.

Le README initial renvoie donc vers les fiches du portfolio. Les liens de code pourront être ajoutés quand ils seront accessibles au public. Aucun nombre d'étoiles, classement, taux de maîtrise ou résultat commercial n'est inventé.

L'adresse e-mail retenue est celle de la page Contact. Les numéros de téléphone ne sont pas nécessaires dans le README ; portfolio, LinkedIn et e-mail couvrent les prises de contact.

## Mise en ligne du profil

D'après la documentation GitHub, le README doit se trouver à la racine d'un dépôt **public nommé `Raf-is-Tech`**, identique au pseudonyme du compte. Le nom local `Raf-is-Tech(Readme)` n'empêche pas cet usage.

L'initialisation locale ne crée aucun dépôt distant. La configuration d'un remote et la publication seront traitées dans une étape ultérieure.
