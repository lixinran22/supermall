<!--  -->
<template>
   <swiper class="detail-swiper">
      <swiper-item v-for="item in topImages"
       :key="item">
        <img :src="item" alt="">
      </swiper-item>
   </swiper>
  
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  components: { 
    Swiper,
    SwiperItem 
    },
  name:'DetailSwiper',
  data () {
    return {
    }
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style  scoped>
.detail-swiper{
  height: 160px;
}

</style>
