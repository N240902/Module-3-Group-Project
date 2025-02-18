import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    cartCount: 0 // Changed from array to number
  },
  getters: {
    allProducts: state => state.products,
    cartCount: state => state.cartCount
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    ADD_TO_CART(state) {
      state.cartCount++
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const mockProducts = [
        { id: 1, name: 'Product 1', price: 99.99 },
        { id: 2, name: 'Product 2', price: 149.99 }
      ]
      commit('SET_PRODUCTS', mockProducts)
    },
    addToCart({ commit }) {
      commit('ADD_TO_CART')
    }
  },
  modules: {
  }
})
