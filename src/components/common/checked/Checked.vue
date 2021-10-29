<!--  -->
<template>
  <div :class="{'Active':isChecked}">
     <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'Checked',
  data () {
    return {
    }
  },
  props:{
    isChecked:{
      type:Boolean,
      defalut:true,
    }
  }
}
</script>

<style  scoped>
.Active{
 background-color: red;
}

</style>
