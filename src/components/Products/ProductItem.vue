<template>
  <div class="product__item">
    <div class="product__item--like" v-if = "product.like">
      <i class="product__item--like--check fa fa-check"></i>
      <span class="product__item--like--text">Like</span>
    </div>
    <div class="product__item--sale-off" v-if= "product.percent > 0">
      <span class="product__item--sale-off--percent">{{product.percent}}%</span>
      <span class="product__item--sale-off--name">Save</span>
    </div>

    <img
      :src="product.img"
      alt=""
      class="product__item--img"
    />
    <p class="product__item--description">
        {{ product.description }}
    </p>

    <div class="product__item--price">
      <div class="product__item--price-left">
        <span
          :class="{ 'product__item--price--original': product.percent > 0 }"
        >
          {{ $filters.currency(product.price) }}
        </span>
        <span class="product__item--price--sale">{{
            $filters.currency(salePrice)
        }}</span>
      </div>
      <div class="product__item--price-right">
        <span
          class="product__item--btn"
          :class="{ 'product__item--btn--out-of-stock': product.inventory < 1 }"
          :disabled="product.inventory < 1"
          @click="addToCart(product)"
        >
          ADD TO CART</span
        >
        <span class="product__item--inventoty-stock">
          {{ getStockStatus }}</span
        >
      </div>
    </div>

    <div class="product__item--freeback product__item--freeback-liked">
      <i class="product__item--freeback--heart far fa-heart"></i>
      <i class="product__item--freeback--heart-fill fas fa-heart"></i>
      <div class="product__item--freeback--rating">
        <i :class="typeStar(times)" v-for="times in 5" :key="times"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { salePrice } from '@/utils/product.js'

export default {
  data() {
    return {};
  },

  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    salePrice() {
      return salePrice(this.product);
    },

    getStockStatus() {
      return this.product.inventory > 0
        ? "In Stock: " + this.product.inventory
        : "Out of Stock";
    },
  },

  methods: {
    ...mapActions(["decrementInventory", "addProductToCartList"]),
    addToCart(product) {
      let quantity = 1;
      this.decrementInventory({ id: product.id, quantity});
      this.addProductToCartList({product, quantity})
    },

    typeStar(index) {
      var className = "product__item--freeback--rating--star ";
      if (index <= this.product.rating && this.product.rating > 0)
        return className + "fas fa-star";

      if (index - 1 < this.product.rating && index > this.product.rating)
        return className + "fas fa-star-half-alt";
      else return className + "far fa-star";
    },

    test(){
      alert('ref')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/Abstrast/_variables.scss";

.product {
  &__item {
    position: relative;
    margin-bottom: 10px;
    background-color: #f3f3f3;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

    &--img {
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    &--description {
      font-size: 1.4rem;
      font-weight: 400;
      margin: 10px 10px;

      // Text mit ...
      line-height: 1.8rem;
      height: 3.6rem;
      overflow: hidden;
      display: block;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //punkt an der Zeile
    }

    &--like {
      position: absolute;
      display: flex;

      color: #ef4823;
      background-color: currentColor;
      align-items: center;
      justify-content: space-between;
      width: 70px;
      top: 5px;
      left: 1px;
      padding: 2px 10px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      font-size: 1rem;

      &::after {
        content: "";
        position: absolute;
        border-top: 3px solid currentColor;
        border-right: 4px solid transparent;
        left: 0px;
        bottom: -3px;
        filter: brightness(0.8);
      }

      &--text,
      &--check {
        color: $color-white;
      }
    }

    &--sale-off {
      background-color: #f7c72a;
      position: absolute;
      display: block;
      text-align: center;
      align-items: center;

      width: 60px;
      height: 34px;
      right: 5px;
      top: 0px;
      padding: 3px 5px;

      &--percent {
        display: block;
        padding: 0;
        color: $color-primary-dark;
        font-size: 1.2rem;
        font-weight: 800;
      }

      &--name {
        display: block;
        padding: 0;
        color: $color-white;
        font-size: 1.1rem;
        text-transform: uppercase;
      }

      &::after {
        content: "";
        position: absolute;
        border-width: 0px 30px 6px 30px;
        border-style: solid;
        border-color: transparent #f7c72a transparent #f7c72a;
        left: 0px;
        bottom: -6px;
      }
    }

    &--price {
      font-size: 1.2rem;
      margin: 5px 10px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--original {
        display: inline-block;
        text-decoration: line-through;
      }
      &--sale {
        display: inline-block;
        color: $color-primary-dark;
        padding-left: 10px;
      }
    }

    &--btn {
      display: inline-block;
      padding: 5px 5px;
      margin-left: 15px;
      border-radius: 3px;
      color: white;
      text-transform: uppercase;
      background-color: #ef4823;
      cursor: pointer;

      &--out-of-stock {
        cursor: unset;
        filter: grayscale(1);
      }
    }

    &--inventoty-stock {
      display: block;
      text-align: right;
      font-size: 1.2rem;
      color: #ef4823;
    }

    &--freeback-liked &--freeback--heart {
      display: none;
    }

    &--freeback-liked &--freeback--heart-fill {
      display: inline-block;
    }

    &--freeback {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 10px;

      &--heart,
      &--heart-fill {
        font-size: 1.4rem;
      }
      &--heart-fill {
        //display: none;
        color: $color-primary-dark;
      }

      &--rating--star {
        color: coral;
        transform: scale(0.7);
        transform-origin: right;
      }
    }
  }
}


</style>
