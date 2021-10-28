<!--  -->
<template>
  <div class="recommend">

    <div class="recommend-item" v-for="item in recommends" :key="item.id">
     <img :src="item.image" alt="" @load="imgLoad">
     <p>{{item.title}}</p>
  </div>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  data () {
    return {
    }
  },
  props:{
    recommends:{
      type:Array,
      defualt:[],
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
}
</script>

<style  scoped>
.recommend{
  padding: 15px 0 30px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  text-align: center;
  font-size: 12px;
}
.recommend-item{
  flex: 1;
  width: 50%;
}
.recommend-item img{
 width:100%;
}
 </style>
