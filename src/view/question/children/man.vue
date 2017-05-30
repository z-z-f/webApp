<template>
  <div class="man">
    <div class="man-nav">
      <router-link v-for="item in navList" :to="item.url" class="man-slide" active-class="on">{{item.text}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'man',
  data () {
    return {
      navList: [
        {
          text: '自我介绍',
          url: '/webApp/question/man/self'
        },
        {
          text: '工作经验',
          url: '/webApp/question/man/work'
        },
        {
          text: '薪资期望',
          url: '/webApp/question/man/pay'
        },
        {
          text: '离职原因',
          url: '/webApp/question/man/leave'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.man {
  overflow: hidden;
  width: 100%;
  overflow-y: scroll;
}
.man-nav {
  overflow-y: auto;
  white-space: nowrap;
  border-bottom: 1px solid #ccc;
}
.man-slide {
  padding: 10px;
  display: inline-block;
}
.on {
  color: #20a0ff;
  border-bottom: 1px solid #20a0ff;
}
</style>
