<!--  -->
<template>
  <div id="detail">
     <detail-nav-bar/>
    <scroll class="content" ref="scroll">
     <detail-swiper :topImages='topImages'></detail-swiper>
     <detail-base-info :getGoods='getGoods'></detail-base-info>
     <detail-shop :shop='shop'></detail-shop>
     <detail-goods-info :detailInfo='detailInfo'
                        @imageLoad='imageLoad'
     ></detail-goods-info>
     <detail-param-info :paramInfo='paramInfo'></detail-param-info>
     
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar';
import {getDetail,getGoods,Shop,GoodsParam} from 'network/detail';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShop from './childComps/DetailShop.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import Scroll from 'components/common/scroll/Scroll';
import DetailParamInfo from './childComps/DetailParamInfo.vue';


export default {
  name:'Detail',
  components: { 
    DetailNavBar ,
    DetailSwiper,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    },
    data () {
    return {
      iid:null,
      topImages:[],
      getGoods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      
    }
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.refresh();
    }
  },
  created() {
    // console.log('是否重新创建')
   this.iid= this.$route.params.iid
   getDetail(this.iid).then(res=>{
     console.log(res)
    const data=res.result;
     this.topImages=data.itemInfo.topImages;
    //  console.log(this.topImages)
    this.getGoods=new getGoods(data.itemInfo,data.columns,data.shopInfo.services);
    this.shop=new Shop(data.shopInfo)
    this.detailInfo=data.detailInfo
    this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)
   })
  },
}
</script>

<style  scoped>
#detail{
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
 .content{
   height:calc(100% - 44px);
   overflow: hidden;
}
 
 </style>
