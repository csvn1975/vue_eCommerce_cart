import { createStore } from 'vuex'
import product from './modules/product'
import cart from './modules/cart'

export default createStore({
  
  mutations: {
  },
  actions: {
  },

  modules: {
     product,
     cart,
  }
})
