<template>
  <div class="layout">
    <div class="error__container">
      <div v-if="error.statusCode === 404">
        <img
          class="error__image"
          src="@/assets/images/not-found.jpg"
          alt="Página no encontrada"
        >
        <h2>
          Página no encontrada
        </h2>
        <p>
          Lo sentimos, parece que la página que buscas no existe.
        </p>
        <nuxt-link
          to="/"
          class="btn"
        >
          Ir a inicio
        </nuxt-link>
      </div>
      <div v-else class="error__container">
        <img
          class="error__image"
          src="@/assets/images/error.jpg"
          alt="Error de sistema"
        >
        <h2>
          Error del servidor
        </h2>
        <p>
          Lo sentimos, se ha producido un error.
        </p>
        <button
          class="btn"
          @click="reloadPage"
        >
          Recargar la página
        </button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    reloadPage () {
      this.$router.go()
    }
  }
}
</script>

<style scoped lang="scss">
.error {
  &__container {
    margin: 30px auto 0 auto;
    max-width: 640px;
    text-align: center;
  }
  &__image{
    width: 100%;
    height: auto;
  }
}

</style>
