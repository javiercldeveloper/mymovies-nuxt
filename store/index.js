export const state = () => ({
  cart: [],
  language: null
})

export const mutations = {
  addToCart (state, movie) {
    state.cart.push(movie)
  },
  removeFromCart (state, movieId) {
    const index = state.cart.findIndex(stateMovie => stateMovie.id === movieId)
    state.cart.splice(index, 1)
  },
  setLanguage (state, language) {
    state.language = language
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    commit('setLanguage', 'es-ES')
  },
  addToCart ({ commit }, movie) {
    commit('addToCart', movie)
  },
  removeFromCart ({ commit }, movieId) {
    commit('removeFromCart', movieId)
  }
}

export const getters = {
  cartMoviesIds: (state) => {
    return state.cart.map(movie => movie.id)
  }
}
