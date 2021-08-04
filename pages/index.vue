<template>
  <div class="layout">
    <hero-section
      subtitle="Selecciona una categoría"
      title="La película que buscas está aquí"
      background-image="categories"
    />
    <spinner v-if="loading" />
    <error-message
      v-else-if="error"
      :message="error"
    />
    <image-card-list
      v-else
      is-category-list
      two-items-per-row
      :results="categories"
    />
  </div>
</template>

<script>

import EMovieCategories from '@/model/EMovieCategories'

export default {
  middleware: ['navigatorLanguage'],
  async asyncData ({ language, $axios, env }) {
    function getUrl (category) {
      return `${env.VUE_APP_API_URL}movie/${EMovieCategories[category].resource.toLowerCase()}?api_key=${process.env.VUE_APP_FETCH_API_KEY}&language=${language}`
    }
    function getRandomNumber () {
      return Math.floor(Math.random() * 19)
    }
    function pushImageInResults (results, category) {
      const randomResultNumber = getRandomNumber()
      if (!categories.map(film => film.id).includes(results[randomResultNumber].id)) {
        categories.push({
          resource: EMovieCategories[category].resource,
          title: EMovieCategories[category].title,
          poster_path: results[randomResultNumber].poster_path,
          id: results[randomResultNumber].id
        })
      } else { pushImageInResults(results, category) }
    }
    let loading = true
    const unFilteredResults = []
    const categories = []
    try {
      for await (const category of Object.keys(EMovieCategories)) {
        const categoryResults = await $axios.$get(getUrl(category))
        unFilteredResults.push(categoryResults)
      }
      for await (const [index, result] of unFilteredResults.entries()) {
        pushImageInResults(result.results, Object.keys(EMovieCategories)[index])
      }
      loading = false
      return { categories, loading, error: null }
    } catch (err) {
      let error
      if (error && error.response) {
        error = error.response.data.status_message
      } else { error = 'Lo sentimos, se ha producido un error' }
      loading = false
      return { error, loading, categories: [] }
    }
  }
}
</script>
