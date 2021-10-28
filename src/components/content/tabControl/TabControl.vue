<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in tabControl" :key="index" 
    class="tab-control-item"
    :class="{active:current==index}"
    @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TbaControl',
  data () {
    return {
      current:0,
    }
  },
  props:{
    tabControl:{
      type:Array,
    }
  },
  methods: {
    tabClick(index){
     this.current=index;
     this.$emit('tabClick',index)
    }
  },
}
</script>

<style  scoped>
.tab-control{
  display: flex;
  justify-content: space-around;
  padding: 10px 0 10px;
  background-color: #fff;
}
.active{
  border-bottom:2px solid var(--color-high-text);
  color: var(--color-high-text);
}
.tab-control-item{
  padding: 0 5px 5px;
}
</style>
