<!--  -->
<template>
  <div>
    
    <tabbar id="tabbar"> 
       <tabbar-item path="/home" >
         <img slot="item-icon" src="~@/assets/img/tabbar/home.svg" alt="">
         <img slot="item-icon-active" src="~@/assets/img/tabbar/home_active.svg" alt="">
          <span slot="item-text">首页</span>
       </tabbar-item>
       <tabbar-item path="/category">
         <img slot="item-icon" src="~@/assets/img/tabbar/category.svg" alt="">
         <img slot="item-icon-active" src="~@/assets/img/tabbar/category_active.svg" alt="">
          <span slot="item-text">分类</span>
       </tabbar-item>
       <tabbar-item path="/cart">
         <img slot="item-icon" src="~@/assets/img/tabbar/shopcart.svg" alt="">
         <img slot="item-icon-active" src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
          <span slot="item-text">购物车</span>
       </tabbar-item>
       <tabbar-item path="/profile">
         <img slot="item-icon" src="~@/assets/img/tabbar/profile.svg" alt="">
         <img slot="item-icon-active" src="~@/assets/img/tabbar/profile_active.svg" alt="">
          <span slot="item-text">我的</span>
       </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import TabbarItem from '../../common/tabbar/Tabbar-Item'
import Tabbar from '../../common/tabbar/Tabbar.vue'

export default {
  data () {
    return {
    }
  },
  components:{
    TabbarItem,
    Tabbar
  }
}
</script>

<style  scoped>
@import '../../../assets/css/normalize.css';
@import '../../../assets/css/base.css';

#tabbar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: row  nowrap;
  justify-content: space-around;
}

</style>
