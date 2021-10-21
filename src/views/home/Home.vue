<!--  -->
<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">购物车</div>
    </nav-bar>

    <home-swiper :banners="banners"></home-swiper>

    <recommend-view :recommends="recommends"></recommend-view>

  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import {getHomeMultidata} from '@/netword/home'
export default {
  data () {
    return {
      banners:[],
      recommends:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    
  },
  created() {
    getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.lis;
    })
  },
}
</script>

<style  scoped>
.navbar{
  background-color: pink;
  color: #fff;
}
</style>
