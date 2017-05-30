<template>
  <div class="question">
    <div class="que-head">
      <div class="que-tab">
        <router-link v-for="item in headList" :to="item.url" class="que-tab-con" active-class="on">{{item.text}}</router-link>
      </div>
    </div>
    <router-view class="que-main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'question',
  data () {
    return {
      headList: [
        {
          text: '技术问题',
          url: '/webApp/question/skill'
        },
        {
          text: '人资问题',
          url: '/webApp/question/man'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.que-head {
  background: #20a0ff;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
}
.que-tab {
  width: 200px;
  margin: 8px auto;
  display: flex;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.que-tab .que-tab-con {
  border: 1px solid #eee;
  display: inline-block;
  flex: 1;
}
.que-tab  .on {
  background: #fff;
}
.que-main {
  position: absolute;
  left: 0;
  top: 40px;
  bottom: 44px;
}
</style>
