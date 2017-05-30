<template>
  <div class="skill">
    <div class="ski-nav">
      <router-link v-for="item in navList" :to="item.url" class="ski-slide" active-class="on">{{item.text}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'skill',
  data () {
    return {
      navList: [
        {
          text: '推荐',
          url: '/webApp/question/skill/intro'
        },
        {
          text: 'HTML',
          url: '/webApp/question/skill/html'
        },
        {
          text: 'CSS',
          url: '/webApp/question/skill/css'
        },
        {
          text: 'JavaScript',
          url: '/webApp/question/skill/js'
        },
        {
          text: 'jQuery',
          url: '/webApp/question/skill/jq'
        },
        {
          text: 'node',
          url: '/webApp/question/skill/node'
        },
        {
          text: 'angular',
          url: '/webApp/question/skill/angular'
        },
        {
          text: 'vue',
          url: '/webApp/question/skill/vue'
        },
        {
          text: 'react',
          url: '/webApp/question/skill/react'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill {
  overflow: hidden;
  width: 100%;
  overflow-y: scroll;
}
.ski-nav {
  overflow-y: auto;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.ski-slide {
  padding: 10px;
  display: inline-block;
}
.on {
  color: #20a0ff;
  border-bottom: 1px solid #20a0ff;
}


</style>
