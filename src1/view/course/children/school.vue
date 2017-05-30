<template>
  <div class="school">
    <div class="list">
      <ul class="ul-list">
        <li>
          <router-link v-for="item in schoolList" :to="item.url" class="list-li" active-class="on">{{item.text}}</router-link>
        </li>
      </ul>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'school',
  data () {
    return {
      schoolList: [
        {
          text: 'Vue',
          url: '/webApp/course/school/vue'
        },
        {
          text: 'React',
          url: '/webApp/course/school/react'
        },
        {
          text: 'Angular',
          url: '/webApp/course/school/angular'

        },
        {
          text: 'H5',
          url: '/webApp/course/school/h5'
        },
        {
          text: 'Css3',
          url: '/webApp/course/school/css3'
        },
        {
          text: 'Node',
          url: '/webApp/course/school/node'
        },
        {
          text: 'Model',
          url: '/webApp/course/school/model'
        },
        {
          text: 'JavaScript',
          url: '/webApp/course/school/javascript'
        },
        {
          text: 'JQuery',
          url: '/webApp/course/school/jquery'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list{
    height: 40px;
    border-bottom: 1px solid #ccc;
    overflow-x: auto;
  }
  .ul-list{
    display: -webkit-flex;
    width: 100%;
  }
  .ul-list li .list-li{
    flex: 1;
    line-height: 40px;
    font-size: 18px;
    padding: 4px;
    padding-left: 10px;
    padding-right: 10px;
    color: #000;
  }
  .on{
    color: #f00;
  }


  .content{
    width: 92%;
    margin-left: 4%;

  }
  .content-dl{
    padding-left: 4%;
    position: relative;
    border-bottom: 1px solid #ccc;

  }
  .content-dl h3{
    font-size: 16px;
    line-height: 35px;
  }
  .content-dl p{
    font-size: 14px;
    line-height: 20px;
  }
  .content-dl .sp1{
    display: inline-block;
    padding-left: 70%;

  }
  .content-dl .sp2{
    display: inline-block;
    padding-left: 5%;

  }
</style>
