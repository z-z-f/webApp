<template>
  <div class="course">
    <h3 class="title">菜鸟学堂</h3>
  	<div class="nav">
      <router-link v-for="item in headList" :to="item.url" class="head-tab" active-class="on">{{item.text}}</router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'course',
  data () {
    return {
      headList: [
        {
          text: 'api教程',
          url: '/webApp/course/school'
        },
        {
          text: '专题',
          url: '/webApp/course/major'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .course{
    overflow: hidden;


  }
  .title{
    font-size: 24px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    padding-left: 10px;
    background: #20a0ff;
    color: #fff;
    box-sizing: border-box;
    padding-top: 7px;
  }
  .nav{
    height: 44px;
    text-align: center;
    font-size: 20px;
  }
  .head-tab{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    margin-top: 8px;
  }
  .on{
    background: blue;
    color: #fff;
  }




</style>
