<template>
 <div class="products">
      <h1 class="heading-main"
      > {{ title }}</h1>

       <div class="row sm-gutter product__list">
           <div class="col l-2-4 c-6 m-4 l-3 product__item"
                v-for="product  in products"
                    :key= "product.id"
           >
            <product-item ref="product" :product= "product"></product-item> 
           </div>
        </div> 
 </div>
</template>

<script>
import { mapState } from "vuex"
import ProductItem from '@/components/Products/ProductItem.vue'

export default {
    data(){
        return {
            title: "Product Lists", 
            products:[],
        }
    },

    computed: {
       ...mapState(["product"]),
    },
  
    mounted(){
       this.products = this.product.products;

    },

    methods:{
       /*  handleRef(){
            var ref = this.$refs.product;
            console.log(ref.product);
        } */
    },

    components:{
        ProductItem,
    }

}
</script>
