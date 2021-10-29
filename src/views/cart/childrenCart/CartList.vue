<!--  -->
<template>
  <div>
     <cart-list-item v-for="(item,index) in cartList" :key="index" :cart-info="item"/>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem },
  name:'CartList',
  data () {
    return {
    }
  },
  props:{
    cartList:{
      type:Array,
      defalut(){
        return []
      }
    }
  }
}
</script>

<style  scoped>

</style>
