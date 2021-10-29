<!--  -->
<template>
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{getCartLength}}）</div>
    </nav-bar>
    <!-- 购物车的内容 -->
    <scroll :observeDOM='true' class="content">
      <cart-list :cart-list='getCartList'></cart-list>
     
    </scroll>
    <!-- 购物车信息操作 -->
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {mapGetters} from 'vuex'
import CartList from './childrenCart/CartList.vue'
import Scroll from 'components/common/scroll/Scroll'
export default {
  name:'Cart',
  components: { 
    NavBar,
    CartList,
    Scroll,
     },
  data () {
    return {
    }
  },
  
  computed:{
    ...mapGetters(['getCartList','getCartLength'])
  }
}
</script>

<style  scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
  font-size: 13px;
}
.content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
