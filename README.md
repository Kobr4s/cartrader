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

