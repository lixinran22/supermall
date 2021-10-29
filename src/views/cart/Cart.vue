<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{length}}）</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components: { 
    NavBar,
     },
  data () {
    return {
    }
  },
  
  computed:{
    ...mapGetters({
      length:'getCartLength',
    })
  }
}
</script>

<style  scoped>
.nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 13px;
}
</style>
