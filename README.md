# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Librairie

Quand on ajoute une librairie style Tailwindcss, ajouter le module dans le fichier nuxt config

## Routing

Quand on commence une application NUXT on a un fichier app.vue utile quand on a qu'une seule page.
Afin de faire de multi pages il faut absolument créer un repertoire 'pages'

## Composants

Plus besoin d'importer les composants dans la partie script, et on peut utiliser le nom du repertoire et le nom du fichier voir exemple avec le rep cars dans components 

DefineProps permet de définir des propriétés a un composant

## Path Dynamic et optionnel

pour rendre un chemin dynamique dans nos pages on entoure le nom de cette page de [] et pour rendre ce chemin optionnel on l'entoure d'un double [[]]
Pour rendre un path avec une partie dynamique et statique voir fichier [name]-[id]

## Balise NuxtPAge

Permet d'afficher le reste de ce qu'il y a a afficher en cas de pages imbriquées !! Comprends pas trop l'utilité de ca ! Section 2 video 18 A revoir !

## Composables NUXT

UseHead permet de changer le titre de nos pages ! et en utilisant useRoute() recupérer le parametre dynamique de nos paths
Permet de créer les notres afin de centraliser des fonctions voir useUtilities
useError => permet de récupérer les erreurs

## Layout

permet d'établir une composition de page pour toutes les pages

il est possible de fair eun layout custom et de le redéfénir dans la partie script avec definePageMeta voir car.vue pour exemple

## nuxtErrorBundary

permet de capter une erreur client side

## Module nuxt-imageèedge

utilise une autre balise que la balise img NuxtImg et permet d'optimiser les images

## Emits

Permet de communiquer d'un enfant a un parent => voir Cards et Card

## Universal Rendering

Pourquoi l'etat de notre like n'est pas gardé en compte quand on refresh ?

Le mieux est de save dans une DB

on peut entourer notre code de la balise ClientOnly ou renommer le fichier en mentionnant .client.vue dans notre cas
on a utiliser la balise clientOnly pour le moment

## LOCAL STORAGE

A voir le module Pinia et ajouter un plugin de persistance !

## SUPABASE 

Permet de créer un systeme d'authentification pour notre application
installer le module avec yarn add @nuxtjs/supabase@0.3.0 et l'ajouter dans le nuxt config
une fois le projet créer sur supabase ajouter l'url et l'api dans un fichier .env 

Nous donne access a de nombreux composables => useSupaBaseClient
useSupabaseUser => permet d'obetnir les informatiosn du user connecté 

## Prisma

Supabase nous permet de créer une base de données
Grace a node/TS Prisma ORM on va pouvoir créer la DB dynamiquement dans NUXT

yarn add prisma
npx prisma init

dans supabase settings database /  changer password et copier coller l'url de connection en changeant le password
Creation de nos tables via le fichier "schema.prisma"

Une fois créer on applique notre schema grace a la commande
npx prisma db push

Cascade delete ajouter onDelete: [Cascade] dans le fichier schema.prisma dans la relation de la table concernée

## Google OAuth

Une fois loggé, en allant dans l'inspecteur partie application => cookies , on peut voir notre token 
En se rendant sur jwt.io, on peut voir les informations qui sont contenues dans notre token

## Middleware

les route middleware vont permettre de protegér l'access a certaines routes en fonction de si l'utilisateur est loggé ou a le role requis
Quand l'utilisateur veut accéder a une page, le client envoie une requete au server qui renvoie le fichier html, css et js entierement construite.
Avec les middleware, nous allons d'abord rencontré le middleware qui aura 3 buts:
bloquer la navigation en fonction de certaines conditions (user log in, role, etcc)
nous rediriger si user pas connecté ou 
nous dirigé vers la page adequate

on a ajouté notre code pour sécure sur les pages listings, create et view
=> on a répéter du code seulement la fonction definePageMeta est lancée avant le root donc si on crée une fonction et qu'on appelle cette fonction on va avoir une erreur

Pour régler ce soucis, on va créer un répertoire middleware et nommé le middleware afin de pouvoir l'appeler et d'optimiser notre code et ensuite un fichier js qui sera le nom de notre middleware

Voir la video 48 pour faire un middleware global

## JOI

librairie qui permet de valider des données entrées par l'user

yarn add joi

import joi dans le fichier voulu



$fetch pour les methods post, delete, put HTTP REQUEST
useFetch pour les Get

