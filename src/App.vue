<template>
  <div>
    <Menu />
    <div class="container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Navigations/Menu.vue";
export default {
  setup() {},

  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.container{
  max-width : 1028px;
  margin: 10px auto;
 
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
