<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="left"
           @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
      <div slot="center" class="title" >
           <span
           v-for="(item,index) in title"
           :key="item.id"
           :class="{active:index==currentIndex}"
           @click='barClick(index)'
           >{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  components: { 
    NavBar,
     },
  data () {
    return {
      title:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
    methods: {
      barClick(index){
        this.currentIndex=index;
      },
      backClick(){
        this.$router.go(-1);
      }
    }
  
}
</script>

<style  scoped>
.title{
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
  font-size: 13px;
}
.active{
  color: var(--color-high-text);
  }
.back{
  position: relative;
top: 3px;
left: -8px;
font-size: 10px;
width: 16px;
}
</style>
