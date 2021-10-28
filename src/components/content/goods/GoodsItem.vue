<!--  -->
<template>
  <div class="goods-item">
     <img :src="goodsItem.show.img" alt="" @load="itmeImgLoad" @click="goodsClick">
     <p>{{goodsItem.title}}</p> 
     <p class="info">
       <span class="price">{{goodsItem.price}}</span>
       <span class="collect">{{goodsItem.cfav}}</span>
     </p>
  </div>
</template>

<script>
export default {
  name:"GoodsItem",
  data () {
    return {
      iid:null,
    }
  },
  props:{
  goodsItem :{
    type:Object,
    }
  },
  methods: {
    
    itmeImgLoad(){
      this.$bus.$emit('itemImageLoad')
    },
    goodsClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
}
</script>

<style  scoped>
.goods-item{
  width: 48%;
  justify-content: space-between;
}
.goods-item img{
  border-radius: 3px;
  width: 100%;
}
.goods-item p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  
}
.info{
  margin-bottom: 5px;
}
.price{
  margin-right: 20px;
}
.collect{
  position: relative;
}
.collect::before{
  content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
