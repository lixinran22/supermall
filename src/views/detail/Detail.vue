<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar @tabClick='tabClick'  ref="navbar"/>
    
    <scroll class="content" ref="scroll" 
           :probe-type="3"
           @scroll='contentScroll'>

      <ul>
        <li v-for="item in $store.state.carList" :key="item.iid" >{{item}}</li>
      </ul>
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :get-goods="getGoods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info ref="param"  :param-info="paramInfo"></detail-param-info>
      <detail-rate-info  ref="rate" :rate-info="rateInfo" />
      <goods ref="goods" :goods="goods"></goods>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
    <back-top class="back-top" @click.native="backClick" v-show="isShowBackTop" ></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import {
  getDetail,
  getGoods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backTop/BackTop";
import {BACK_TOP} from 'common/const'
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailRateInfo from "./childComps/DetailRateInfo";
import DetailBottomBar from './childComps/DetailBottomBar';

import Goods from "components/content/goods/Goods";

import { itemImgListener, backTopListener} from "common/mixins";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    DetailRateInfo,
    Goods,
    DetailBottomBar,
    BackTop
  },
  data() {
    return {
      iid: null,
      topImages: [],
      getGoods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      rateInfo: {},
      goods: [],
      themeYs:[],
      currentIndex:0,
    };
  },
   mixins: [itemImgListener,backTopListener],
  methods: {
    imageLoad() {
      // this.newRefresh();
      this.$refs.scroll.refresh();
      // 获取主题的Y值
    this.themeYs=[]
    this.themeYs.push(0);
    this.themeYs.push(this.$refs.param.$el.offsetTop-44)
    this.themeYs.push(this.$refs.rate.$el.offsetTop-44)
    this.themeYs.push(this.$refs.goods.$el.offsetTop-44)
    this.themeYs.push(Number.MAX_VALUE)
    console.log(this.themeYs)
    },
    tabClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeYs[index],100);
    },
    contentScroll(position){
      // 如果滚动的高度>指定常量的高度时，isshow为true，否则为false
      this.isShowBackTop=(-position.y) > BACK_TOP;
      // 监听滚动的高度，让滚动的高度在商品，参数，评论，推荐的高度中匹配到响应的index
      const scrollY=-position.y
      let length=this.themeYs.length
     for (let i=0;i<length-1;i++) {
      if(this.currentIndex!==i &&scrollY > this.themeYs[i] && scrollY<this.themeYs[i+1]){
         console.log(i)
         this.currentIndex=i;
        this.$refs.navbar.currentIndex=i;
      }
     }
    },
    addToCart(){
      const product=new Object();
      product.image=this.topImages[0]
      product.title=this.getGoods.title
      product.desc=this.getGoods.desc
      product.iid=this.iid

      this.$store.dispatch('addToCart',product);
    },
  },
 
  created() {
    // console.log('是否重新创建')
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //  console.log(this.topImages)
      this.getGoods = new getGoods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.rateInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      //  console.log(res)

      this.goods = res.data.list;
    })

     },
     
  destroyed() {
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
};
</script>

<style  scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px - 2.09rem);
  overflow: hidden;
}
.back-top{
  position: fixed;
  bottom: 55px;
  right: 5px;
  z-index: 10;
}
</style>
