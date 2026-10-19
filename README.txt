Description
Une application web interactive permettant d'apprendre les règles du Jeu de Cartes à Collectionner (JCC) Pokémon et de tester ses connaissances sur l'univers de la franchise.
Les données sont stockées dans une base de données XML et injectées dynamiquement dans l'interface via JavaScript.

Fonctionnalités Principales
Affichage Dynamique : Lecture asynchrone d'un fichier XML (XMLHttpRequest) pour générer automatiquement des tableaux de données en HTML.

Système de Filtrage : Une page dédiée (apprendre.html) permettant de trier instantanément les 50 questions par thématique (Eau, Feu, Terre, Air) via JavaScript.

Interface Responsive : Utilisation du framework Bootstrap 5 pour garantir un affichage optimal sur ordinateur et smartphone.

Design Personnalisé : Surcharge graphique en CSS pour recréer l'identité visuelle de Pokémon (couleurs officielles, effet 3D sur les titres, boutons façon Pokéball).

Données: les datas du questionnaire
1 ID: identifiant unique de chaque question
2 Question: la question à repondre
3 Réponses: 3 mauvaises reponses 
4 Bonne réponses: seule bonne reponse à la question
5 Point: nombre de points gagné par la bonne reponse
6 Image(s): illustrant la question
7 Explication: Explication detaillé de la bonne reponse
8 Thématique
Technologies Utilisées
Structure : HTML5

Style : CSS3 & Bootstrap 5

Logique : JavaScript (ES6 Modules)

Base de données : XML

Ressources : PokeAPI & TCGdex API (pour les images en haute définition)

Architecture du Projet
Le code est organisé de manière modulaire :

/data/ : Contient la base de données questionnaire.xml de 50 questions.

/scripts/ : Contient la logique applicative répartie en modules (index.js pour le chargement global, apprendre.js pour les filtres).

/pages/ : Contient les vues secondaires (comme la page d'apprentissage).

/css/ : Contient les styles sur mesure.Identification et Description des attributs de la base données:


