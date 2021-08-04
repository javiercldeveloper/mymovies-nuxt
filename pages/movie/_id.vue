<template>
  <main class="layout">
    <nuxt-link
      v-if="previousRoute"
      :to="previousRoute"
      class="returnLink"
    >
      {{ goToPreviousPage.text }}
    </nuxt-link>
    <spinner v-if="loading" />
    <error-message
      v-else-if="error"
      :message="error"
    />
    <div
      v-else
      class="container"
    >
      <div class="img-box">
        <image-from-server
          :item="movie"
          movie-detail-page
        />
      </div>
      <div class="text-box">
        <h1>{{ movie.title }}</h1>
        <h2>{{ movie.tagline }}</h2>
        <p>{{ movie.overview }}</p>
        <p><strong>Géneros:</strong> {{ movieGenres }}</p>
        <p><strong>Año:</strong> {{ movieYear }}</p>
        <button
          class="btn"
          :class="isMovieOnMyList ? 'btn__danger': 'null' "
          @click="cartAction"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.previousRoute = from
    })
  },
  middleware: ['navigatorLanguage'],
  async asyncData ({ params, language, $axios, env }) {
    let loading = true
    try {
      const movie = await $axios.$get(`${env.VUE_APP_API_URL}movie/${params.id}?api_key=${process.env.VUE_APP_FETCH_API_KEY}&language=${language}`)
      loading = false
      return { movie, loading, error: null }
    } catch (err) {
      let error
      if (err.response) {
        if (err.response.status === 404) {
          error = 'No existe una película con este identificador'
        } else { error = error.response.data.status_message }
      } else { error = 'Lo sentimos, se ha producido un error' }
      loading = false
      return { error, loading, movie: {} }
    }
  },
  data () {
    return {
      previousRoute: null
    }
  },
  head () {
    return {
      title: this.movie.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.movie.tagline
        }
      ]
    }
  },
  computed: {
    imageUrl () {
      return process.env.VUE_APP_IMG_BASE_URL + (this.movie.poster_path)
    },
    movieGenres () {
      return this.movie.genres.map(genre => genre.name).join(', ')
    },
    movieYear () {
      const movieReleaseDate = new Date(this.movie.release_date)
      return movieReleaseDate.getFullYear()
    },
    isMovieOnMyList () {
      return this.$store.getters.cartMoviesIds.includes(this.movie.id)
    },
    buttonText () {
      return !this.isMovieOnMyList ? 'Añadir a la colección' : 'Quitar de la colección'
    },
    goToPreviousPage () {
      const hasPreviousPage = this.previousRoute && this.previousRoute.name
      return {
        text: hasPreviousPage ? 'Volver' : 'Ir al listado de categorías',
        to: hasPreviousPage ? { name: 'home' } : { name: this.previousRoute.name, params: this.previousRoute.params }
      }
    }
  },
  methods: {
    cartAction () {
      this.$store.dispatch(this.isMovieOnMyList ? 'removeFromCart' : 'addToCart', this.movie)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/main';

.container {
  align-items: normal;
  display: flex;
}

.img-box img {
  max-height: 50vh;
}

.text-box {
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 600px;
  padding: 20px 30px;
}

.returnLink {
  display: block;
  margin-bottom: 15px;

  &:before {
    content: '\25c4';
    padding-right: 0.2em;
  }
}

@media (max-width: $tab-port-breakpoint) {
  .container {
    align-items: center;
    flex-direction: column;
  }
  .text-box {
    padding: 20px 10px;
  }
}

</style>
