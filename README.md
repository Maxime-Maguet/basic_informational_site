# Basic Informational Site

Un site web d'information multi-pages conçu pour explorer et pratiquer les fondamentaux du développement backend avec **Node.js** et **Express**. Ce projet fait partie du cursus **The Odin Project**.

## 🎯 Objectifs du projet

Ce projet permet d'apprendre à concevoir et faire évoluer un serveur web de A à Z :
- Comprendre le cycle requête / réponse HTTP.
- Mettre en place un système de routage (`/`, `/about`, `/contact-me`).
- Servir des fichiers statiques et gérer les erreurs HTTP (pages `404` et `500`).
- Faire évoluer le serveur : passer d'un serveur HTTP Node.js natif à une application structurée avec **Express.js**.

## 🛠️ Tech Stack

- **Environnement :** Node.js
- **Framework Web :** Express.js *(mise en place au fil des étapes)*
- **Frontend :** HTML5 / CSS3
- **Outillage :** Git, GitHub, Nodemon

## 📌 Routes de l'application

| Route | Description | Fichier servi |
|---|---|---|
| `/` | Page d'accueil | `index.html` |
| `/about` | À propos | `about.html` |
| `/contact-me` | Formulaire / Infos de contact | `contact-me.html` |
| `/*` (fallback) | Gestion des routes introuvables (404) | `404.html` |

## 🚀 Lancement du projet en local

1. **Cloner le projet :**
   ```bash
   git clone [https://github.com/Maxime-Maguet/basic_informational_site.git](https://github.com/Maxime-Maguet/basic_informational_site.git)
   cd basic_informational_site
