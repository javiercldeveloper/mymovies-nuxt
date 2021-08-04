<template>
  <div class="layout">
    <hero-section
      subtitle="Selecciona tu favorita"
      :title="title"
      background-image="listado"
    />
    <movies-list
      :resource="resource"
    />
  </div>
</template>

<script>

import EMovieCategories from '@/model/EMovieCategories'

export default {
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Listado de películas de la categoría ${this.title}`
        }
      ]
    }
  },
  computed: {
    title () {
      return EMovieCategories[this.$route.params.id.toUpperCase()].title
    },
    resource () {
      return `movie/${EMovieCategories[this.$route.params.id.toUpperCase()].resource}`
    }
  }
}
</script>
