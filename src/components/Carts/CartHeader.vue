<template>
<div class="header__cart">
    <div class="header__cart--list-wrap">
        <i class="header__cart--icon fa fa-shopping-cart"></i>
        <span class="header__cart--badge"> {{ carts.length > 0 ? carts.length : 0 }} </span>
        
        <!-- cart-content -->
        <div class="header__cart--list-content"> 
            <!-- Cart empty -->   
            <div class="header__cart--empty" v-if="carts.length < 1">
                <img src="@/assets/image/no-cart.png" alt="keine Bestellung"
                    class="header__cart--empty--img" />
                <span class="header__cart--empty--msg">Warenkorb ist leer</span>
            </div>
            <!-- End Cart empty --> 

            <!-- Cart-Items-show -->
            <div class="header__cart--list" v-else>
                <h3 class="heading-primary"> Warenkorbliste </h3>
                <ul class="header__cart--item-list" 
                    v-for = "(cart, index) in carts"
                    :key = "index"
                >
                    <cart-item
                        :cart = "cart"
                    ></cart-item>
                </ul>
                <span class="header__cart--price">Artikel({{itemCount}}):  {{ $filters.currency(subPriceCart)}}</span>
                <span class="btn btn--active header__cart--view-btn">Details anzeigen</span>
            </div>
            <!-- End Cart-content-show -->
        </div>
        <!-- cart-content -->
    </div>
</div>
</template>

<script>
import CartItem from "@/components/Carts/CartItem.vue";
import {mapState, mapGetters} from 'vuex'
export default {
   
   name: "CartHeader",
    data() {
        return {
        }
    },

    computed: {     
       ...mapState(["cart"]),
       ...mapGetters(["subPriceCart", 'itemCount']),

       carts(){
           return this.cart.carts
       }
    },
    
    components: {
        CartItem,
    },
}
</script>

<style lang='scss' scoped>
@import "../../assets/sass/Abstrast/_variables.scss";

.header__cart {
    width: 50px;
    font-size: 2rem;
    position: relative;
    text-align: center;

    &--list-wrap {
        position: relative;
        display: inline-block;
        padding: 0 8px; // auswahl-Bereich größer

        &:hover .header__cart--list-content {
            display: block;
        }
        --webkit-tap-highlight-color:transparent;
    }

    &--icon {
        width: 26px;
        height: 26px;
        font-size: 2rem;
        color: $color-white;
        cursor: pointer;
    }

    &--badge {
        position: absolute;
        font-size: 1.4rem;
        background-color: white;
        color: $color-primary-dark;
        line-height: 1.2rem;
        padding: 2px 7px;
        margin-left: -10px;

        border-radius: 10px;
        border: 2px solid #ee4d2d;
    }

    &--list-content {
        display: none;
        position: absolute;
        width: 300px;
        text-align: left;
        top: calc(100% + 15px);
        right: -5px;
        border-radius: 2px;
        box-shadow: 1px 1px 2px rgba(0,0,0, 0.5);
        background-color: $color-white;
        transform-origin: calc(100% - 20px) top;
        animation: FadeRightLeft ease-in-out 0.5s;
        z-index: 100;

        &::before {
            content: "";
            position: absolute;
            border-width: 15px 20px;
            border-style: solid;
            border-color: transparent transparent $color-white transparent;
            right: 3px;
            top: -25px;
            cursor: pointer;
            display: inline-block;
        }
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 30px;
            top: -25px;
            cursor: pointer;
            display: inline-block;
            background-color: transparent;
        }
    }

    &--item-list {
        max-height: 30vh;
        overflow-y: scroll;
    }

    &--empty {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &--msg {
            display: block;
            font-size: 1.4rem;
            margin-bottom: 20px;
            margin-top: 20px;
        }

        &--img {
            width: 60%;
            margin: 20px 20px auto;
        }
    }

    &--price {
        display: block;
        font-size: 1.4rem;
        text-align: right;
        line-height: 1.6rem;
        padding: 5px 10px;
    }

    &--view-btn {
        display: block;
        float: right;
        padding: 5px 10px;
        border-radius: 5px;
        margin-right: 10px;
        margin-bottom: 10px;

        color: white;
        font-weight: 600;
        font-size: 1.4rem;
        text-transform: uppercase;
        background-color: crimson;
    }
}

</style>