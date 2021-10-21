<!--  -->
<template>
  <div class="recomment">
    <div :v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:{
    recommends:{
      type:Array,
      default(){

      }
    }
  }
}
</script>

<style  scoped>
.recomment{
  padding: 15px 0 30px;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
}
.recomment>div{
  flex: 1;
}
.recomment img{
  margin-bottom: 10px;
  width: 70px;
  height: 70px;
}
</style>
