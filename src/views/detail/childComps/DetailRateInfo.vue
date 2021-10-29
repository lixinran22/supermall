<!--  -->
<template>
  <div v-if="Object.keys(rateInfo).length!==0 " class="rate-info"> 
    <div class="info-header">
       <div class="header-title">用户评价</div>
       <div class="header-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="rateInfo.user.avatar" alt="">
      <span>{{rateInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{rateInfo.content}}</p>  
      <div class="info-other">
        <span class="date">{{rateInfo.created | showDate}}</span>
        <span>{{rateInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in rateInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import {dateFormat} from '@/common/utils'
export default {

  name:'DetailRateInfo',
  data () {
    return {
    }
  },
  props:{
    rateInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      let date=new Date(value*1000)
      return dateFormat('YYY-MM-dd',date)
    }
  }
}
</script>

<style  scoped>

</style>
