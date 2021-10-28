<!--  -->
<template>
  <div class="goods">
     <goods-item v-for="item in goods" :key="item.id" :goodsItem='item'>

     </goods-item>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'
export default {
  name:"Goods",
  components:{
   GoodsItem,
  },
  data () {
    return {
    }
  },
  props:{
    goods:{
      type:Array,
    }
  }
}
</script>

<style  scoped>
.goods{
  width: 100%;
 display: flex;
 padding: 5px ; 
 flex-flow: row wrap;
 font-size: 12px;
 justify-content: space-around;
 
}
</style>
