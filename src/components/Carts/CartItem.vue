<template>
  <div>
    <li class="cart__item">
      <img
        class="cart__item--img"
        :src= "cart.product.img"
      />
      <div class="cart__item--details">
        <div class="cart__item--details-head">
          <span class="cart__item--details-name"> {{ cart.product.name }} </span>
          <div class="cart__item--details-price-wrap">
            <span class="cart__item--details-price"> {{ getSoldPrice }} </span>
            <span class="cart__item--details-multy">x</span>
            <span class="cart__item--details-qnt"> {{ cart.quantity }} </span>
          </div>
        </div>

        <div class="cart__item--details-body">
          <span class="cart__item--details-description"
            > {{ cart.product.description }}</span
          >
          <span class="cart__item--details-remove"
            @click = "removeCart(cart.product.id, cart.quantity)"
          >
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {soldPrice} from '@/utils/product.js'

export default {    
    props:{
        cart: {
            type: Object,
            default: () => {}
        }
    },

    computed:{
         getSoldPrice() {
           return soldPrice(this.cart.product);
         }
    },

    methods: {
      ...mapActions(["removeProductFromCart", "incrementInventory"]),

      removeCart(productId, quantity) {
        this.incrementInventory({id:productId, quantity});
        this.removeProductFromCart(productId)
      }

    }



};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/Abstrast/_variables.scss";

.cart__item {
  display: flex;
  padding-right: 10px;

  &--img {
    width: 42px;
    margin: 2px 12px 2px 12px;
    border: 1px solid $color-boder;
  }

  &:hover {
    background-color: $color-hover;
  }

  &--details {
    flex: 1;
    font-size: 1rem;
    padding: 0px;
    line-height: 1rem;
  }

  &--details-head,
  &--details-body {
    margin: 10px 5px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &--details-name {
    font-size: 1.4rem;
    font-weight: 400;
    display: inline-block;
  }

  &--details-description {
     font-size: 1.2rem;
      overflow: hidden;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //punkt an der Zeile
  }

  &--details-price-wrap {
    font-size: 1.2rem;
  }

  &--details-multy {
    margin-right: 5px;
  }

  &--details-price {
    color: $color-primary-dark;
    margin-right: 5px;
  }

  &--details-remove {
    font-size: 1.2rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      color: $color-primary-dark;
    }
  }
}
</style>
