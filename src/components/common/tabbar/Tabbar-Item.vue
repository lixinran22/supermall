<!--  -->
<template>
  <div id="tabbar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
     <div :style=activeStyle><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  props:{
   path:String,
   activeColor:{
     type:String,
     default:'pink',
   }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },

}
</script>

<style  scoped>
#tabbar-item{
  padding: 3px 0;
  font-size: 14px;
  flex: 1;
  border: 1px solid #ccc;
  text-align: center;
  background-color: #F6F6F6;
  box-shadow: 0px -1px 10px rgb(100,100,100,.2);
}
#tabbar-item img{
width: 20px;
height: 20px;
}

</style>
