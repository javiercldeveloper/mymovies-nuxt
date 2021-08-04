<template>
  <div>
    <image-card-list
      v-if="movies.length"
      :results="movies"
    />
    <infinite-loader
      v-if="!$fetchState.pending"
      :key="query"
      @infinite="fetchMovies"
    />
  </div>
</template>

<script>
import { fetchTmdbData, getQueryUrl } from '@/api/tmdbApiService'

export default {
  middleware: ['navigatorLanguage'],
  props: {
    query: {
      type: String,
      default: null
    },
    resource: {
      type: String,
      required: true
    },
    searchPage: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      page: 1,
      movies: []
    }
  },
  async fetch () {
    if (!this.searchPage) {
      const url = getQueryUrl(this.resource, this.params)
      this.movies = await fetch(url)
        .then(res => res.json())
        .then(res => res.results)
      this.page += 1
    }
  },
  computed: {
    moviesIds () {
      return this.movies.map(movie => movie.id)
    },
    params () {
      const params = {
        page: this.page,
        language: this.$store.state.language
      }
      if (this.query) {
        params.query = this.query
      }
      return params
    }
  },
  watch: {
    query (newValue, oldValue) {
      if (oldValue && (newValue !== oldValue)) {
        this.page = 1
        this.movies = []
      }
    }
  },
  methods: {
    fetchMovies ($state) {
      fetchTmdbData(this.resource, this.params)
        .then(({ data }) => {
          if (data.results.length) {
            this.page += 1
            this.movies.push(...data.results.filter(result => !this.moviesIds.includes(result.id)))
            $state.loaded()
          } else {
            $state.complete()
          }
        })
        .catch(() => {
          $state.error()
        })
    }
  }
}
</script>
