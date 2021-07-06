
import { products } from '@/data/products.js'
const state = {
    products,
  }

const mutations = {
    decrementInventory(state, payload){
        for (var product of state.products){
            if (product.id === payload.id) {
            product.inventory -= payload.quantity;
            break;
        } 
        }
    } ,

    incrementInventory(state, payload){
        for (var product of state.products){
            if (product.id === payload.id) {
                product.inventory += payload.quantity;
                break;
            } 
        }
    }, 

}

const actions = {
  decrementInventory({ commit }, payload) {
      commit("decrementInventory", payload);
    },

  incrementInventory({ commit }, payload) {
      commit("incrementInventory", payload);
    },
}

export default {
    state, mutations, actions
}