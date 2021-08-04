# MyMovies SSR Project

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This app contains:
- A page listing different categories of movies. Each category shows a random movie from the list of results of requesting the first page of movies in that category. These movies are filtered to avoid repeating them in the following categories
- A category page (with infinite scroll pagination) to show its movies
- A detail page of a movie with detailed information
- An "Add to cart" button in movie's detail page
- A cart section to manage the movies already added
- A live search page

This is project is based on [MyMovies Project](https://github.com/javiercldeveloper/mymovies) but using server side rendering.

#### Api Note

There is a reported [bug](https://www.themoviedb.org/talk/5ee3abd1590086001f50b3c1) that some endpoints return duplicate items. Because of this, the results received in the requests are filtered before adding them to the items array.

#### TODOS

- There is an issue regarding dynamic style imports which makes the HeroSection test fail
- E2E testing

### Built With

* [NuxtJs](https://nuxtjs.org/)

### Deployment

The project has been deployed with Netlify: [Live demo](https://javiercl-mymovies-nuxt.netlify.app/)

## Getting Started

### Prerequisites

* node (12.22.1 or higher)
  ```sh
  sudo apt update
  sudo apt install nodejs
  ```

* npm (7.19.0 or higher)
  ```sh
  npm install npm@latest -g
  ```

* yarn (1.22.5 or higher)
  ```sh
  npm install yarn -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/javiercldeveloper/my-movies-project
   ```
2. Install NPM packages
   ```sh
   yarn
   ```

## Usage

- serve with hot reload at localhost:3000
   ```sh
   yarn dev
   ```

- build for production and launch server
   ```sh
   yarn build
   yarn start
   ```
  
- generate static project
    ```sh
    yarn generate
   ```
  
- Compiles and hot-reloads for development
   ```sh
   yarn serve
   ```
  
- Compiles and minifies for production
   ```sh
   yarn build
   ```
  
- Run unit tests
   ```sh
   yarn test:unit
   ```

- Lints and fixes files
   ```sh
   yarn lint
   ```

## Acknowledgements

### Npm packages

* [Axios](https://www.npmjs.com/package/axios)
* [Vue Infinite Loading](https://www.npmjs.com/package/vue-infinite-loading)
* [Jest](https://www.npmjs.com/package/jest)
* [Sass Loader](https://www.npmjs.com/package/sass-loader)

### Resources

* [The movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
* [Free Images from pexels](https://www.pexels.com/)
* [Free Icons from Iconmonstr](https://iconmonstr.com/)
