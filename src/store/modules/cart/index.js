class Cart {

}

const state = {
    carts : []
}

const getters = {    
    
    subPriceCart : state => {
        return state.carts.reduce((acc, cart) => {
           var price =  cart.product.percent > 0 ? (100 - cart.product.percent) * cart.product.price / 100 : cart.product.price;
           acc += price * cart.quantity
           return acc;
        }, 0) 
    },
    
    itemCount : state => {
        return state.carts.reduce((acc, cart) => {
           acc += cart.quantity
           return acc;
        }, 0) 
    },   
}

const mutations = {
    
    /* add a product to cart */
    addProductToCartList(state, cartData){

        let product = cartData.product;
        let quantity = cartData.quantity;

        if  (state.carts.length < 1) {
            state.carts.push({ product, quantity})
            return;
        } 

        for (var cart of state.carts) {
            if (cart.product.id == product.id) {
                cart.quantity += quantity;
                return
            } 
        } 
        state.carts.push({product, quantity})
    }, 

    /* remove  products from cart */
    removeProductFromCart(state, productId){
        for (var cartIndex in state.carts) {
            if (state.carts[cartIndex].product.id === productId) {
                state.carts.splice(cartIndex, 1)
                return
            } 
        } 
    }


}

const actions = {
    subPrice({commit} ){
        commit("subPrice");
    }, 

    addProductToCartList({commit}, cartData){
        commit("addProductToCartList", cartData);
    }, 

    removeProductFromCart({commit}, productId){
        commit("removeProductFromCart", productId);
    }
   
}

export default {
    state, mutations, actions, getters
}