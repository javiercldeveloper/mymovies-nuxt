<template>
  <div class="layout">
    <h1>Mis películas favoritas</h1>
    <p v-if="!cartItems.length">
      No tienes películas guardadas en tu listado.
    </p>
    <cart-list
      v-else
      :items="cartItems"
      @removeItem="removeFromCart"
    />
  </div>
</template>

<script>

export default {
  head: {
    title: 'Carrito',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Listado de películas guardadas para ver después.'
      }
    ]
  },
  computed: {
    cartItems () {
      return this.$store.state.cart
    }
  },
  methods: {
    removeFromCart (itemId) {
      this.$store.dispatch('removeFromCart', itemId)
    }
  }
}
</script>
