<template>
  <div class="nav-menu" id="nav">
    <div class="nav__list">
      <router-link class="nav-menu__item nav-menu__item--home " to="/">Home</router-link>
      <router-link class="nav-menu__item" :to="{ name: 'Product' }"
        >Products</router-link
      >
    <router-link class="nav-menu__item nav-menu__item--about" to="/about">About</router-link>
    </div>
    <div class="nav-menu__right">
      <!-- <a class="nav-menu__item" href="#">Register</a>
      <a class="nav-menu__item" href="#">Login</a> -->
      <span class="nav-menu__item--cart">
        <CartHeader></CartHeader>
      </span>
    </div>
  </div>
</template>

<script>
import CartHeader from "@/components/Carts/CartHeader.vue";

export default {
  components: {
    CartHeader,
  },
};
</script>

<style lang="scss" scpoed>
@import "@/assets/sass/Abstrast/_variables.scss";
@import "@/assets/sass/Abstrast/_mixins.scss";

.nav-menu {  
  display: grid;
  grid-template-columns: repeat(2, auto);
  background-color: crimson;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;

  &__item {
    display: inline-block;
    font-weight: bold;
    font-size: 2rem;
    color: white;
    padding: 5px 30px;
    transition: all 1s;

    & ~ .nav-menu__item {
      border-left: 1px solid $border-color;
    }

    &:last-child{
      border-right: 1px solid $border-color;
    }
    
    &.router-link-exact-active,
    &:hover {
      background-color: $color-primary-dark;
    }

    &--cart {
      display: flex;
      justify-content:space-between;
      padding: 10px 10px;
    }
  }

  &__right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

@include respond('tablet') {

   .nav-menu__item--about {
     display: none;
   }
   .nav-menu__item--home {
     display: none;
   }

  .nav-menu {  
    &__item {
      font-size: 1.6rem;
      color: white;
      padding: 5px 20px;
      transition: all 1s;
    }

  } 
}

</style>
