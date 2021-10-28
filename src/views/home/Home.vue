<!--  -->
<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control :tabControl="['流行','新款','精品']"
                @tabClick="tabClick"
                ref="tabControl1"
                v-show="tabShow"
      />
  <scroll class="content" ref="scroll" 
          :probeType="3"
          @scroll="contentScroll"
          :pullUpLoad='true'
          @pullUpLoad='loadMore'
         >
     <home-swiper :banners='banners'/>
   <recommend :recommends='recommends' 
               @imgLoad='imgLoad'
    />
   <feature></feature>
   <tab-control :tabControl="['流行','新款','精品']"
                @tabClick="tabClick" ref="tabControl2"/>
   <goods :goods="goods[current].list"
           
    ></goods>
 </scroll>

 <back-top class="back-top" @click.native="backClick" v-show="isShow" ></back-top>
</div>

</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Recommend from 'views/home/childComps/Recommend'
import Feature from 'views/home/childComps/Feature'
import HomeSwiper from './childComps/HomeSwiper'

import {getHomeMultidata,getHomeGoodsData} from 'network/home'
import TabControl from 'components/content/tabControl/TabControl'
import Goods from 'components/content/goods/Goods'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'


export default {
  name: "Home",
  components: {
     NavBar,
    Recommend,
    Feature,
    TabControl,
    Goods,
    Scroll,
    BackTop,
    HomeSwiper,
  },
  data() {
    return {
      current:'pop',
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      isShow:false,
      tabOffsetTop:0,
       tabShow:false,
       saveY:0,
    }
  },
  created() {
   getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
     
     this.getHomeGoodsData('pop');
     this.getHomeGoodsData('new');
     this.getHomeGoodsData('sell');
 
  },
  mounted() {
    const refresh=this.debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('itemImageLoad',()=>{
	   refresh();
   
})
  },  

  activated() {
    // console.log('home路由被创建')
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
    // console.log(this.saveY)


  },
  deactivated() {
    // console.log('home路由被切换了')
    this.saveY=this.$refs.scroll.getScrollY();
    
  },
  methods: {
    imgLoad(){
    this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;    
    },

    debounce(func,delay){
       let timer=null
       return function(){
         if(timer) clearTimeout(timer)
         timer=setTimeout(()=>{
        func.apply(this)
         },delay)
       }
    },
    
 //事件的方法
 tabClick(index){
   switch(index){
     case 0: 
     this.current='pop'
     break
     case 1:
      this.current='new'
     break
     case 2:
       this.current='sell'
   }
   this.$refs.tabControl1.current=index;
   this.$refs.tabControl2.current=index;  
 },
 backClick(){
  //  console.log(this.$refs.scroll.message);
  //  console.log('按钮点击');
 this.$refs.scroll.scroll.scrollTo(0,0);
 },
 contentScroll(position){
    this.isShow=(-position.y) > 1000;
    this.tabShow=(-position.y)>(this.tabOffsetTop); 
 },
 loadMore(){
   this.getHomeGoodsData(this.current);
  //  this.$refs.scroll.scroll.refresh();
 },
 // 请求数据时封装的方法
 getHomeGoodsData(type){
   const page=this.goods[type].page+1
    getHomeGoodsData(type,page).then(res=>{
      // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
        this.$refs.scroll.finishPullUp();
    });
      },

    },
  
  computed:{
  }  
};
</script>
<style  scoped>
#home{
 height: 100vh;
 position: relative;
}
.tab-control{
  position: relative;
  z-index: 9;
}
.navbar{
  background-color: var(--color-high-text);
  color: #fff;
}
.content{
 /* height: calc(100% - 93px);
  overflow: hidden;
 */
 position: absolute;
 overflow: hidden;
 top: 44px;
 bottom: 49px;
 left: 0;
 right: 0;

}
.back-top{
  position: fixed;
  bottom: 55px;
  right: 5px;
  z-index: 10;
}

</style>
