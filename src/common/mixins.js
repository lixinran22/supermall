import {debounce} from 'common/utils'
// 监听banner图片加载完后执行防抖函数，然后退出页面时取消总事件监听
export const itemImgListener={
 data() {
   return {
     itemImgListener:null,
   }
 },
 mounted() {
  const refresh=debounce(this.$refs.scroll.refresh,500)
  this.itemImgListener=()=>{
    refresh()}
  this.$bus.$on('itemImageLoad',this.itemImgListener)
 },
 
}

export const  backTopListener={
  data() {
    return {
      isShowBackTop:false,
    }
  },
  methods: {
    backClick(){
      //  console.log(this.$refs.scroll.message);
      //  console.log('按钮点击');
     this.$refs.scroll.scroll.scrollTo(0,0,50);
     },
  },

}