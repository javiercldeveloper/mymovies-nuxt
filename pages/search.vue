<template>
  <div class="layout">
    <input-search
      @input="onInput"
    />
    <movies-list
      v-if="query"
      :query="query"
      resource="search/movie"
    />
  </div>
</template>
<script>

export default {
  data () {
    return {
      query: null
    }
  },
  head: {
    title: 'Página de búsqueda',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'El lugar para encontrar los mejores resultados en películas.'
      }
    ]
  },
  methods: {
    onInput (value) {
      this.query = value
    }
  }
}
</script>
