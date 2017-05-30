<template>
  <div class="vue">
    <div class="content">
        <dl class="content-dl" v-for="item in vueList">
          <dt>
            <h3>{{item.h3}}</h3>
          </dt>
          <dd>
            <p>{{item.p}}</p>
            <span class="sp1"><i class="fa fa-hand-o-up"></i><b>{{item.sp1}}</b></span>
            <span class="sp2"><i class="fa fa-envelope-o"></i><b>{{item.sp2}}</b></span>
          </dd>
        </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue',
  data () {
    return {
      vueList: [
        {
          h3: '2017 JQuery迷茫之路 何去何从？',
          p: '两三年的热捧，在前端这个日新月异的行业里实属罕见，但JQuery就是这么的火，甚至延续到现在...',
          sp1: '20',
          sp2: '16'
        },
        {
          h3: '2017 JQuery迷茫之路 何去何从？',
          p: '两三年的热捧，在前端这个日新月异的行业里实属罕见，但JQuery就是这么的火，甚至延续到现在...',
          sp1: '20',
          sp2: '16'
        },
        {
          h3: '2017 JQuery迷茫之路 何去何从？',
          p: '两三年的热捧，在前端这个日新月异的行业里实属罕见，但JQuery就是这么的火，甚至延续到现在...',
          sp1: '20',
          sp2: '16'
        },
        {
          h3: '2017 JQuery迷茫之路 何去何从？',
          p: '两三年的热捧，在前端这个日新月异的行业里实属罕见，但JQuery就是这么的火，甚至延续到现在...',
          sp1: '20',
          sp2: '16'
        },
        {
          h3: '2017 JQuery迷茫之路 何去何从？',
          p: '两三年的热捧，在前端这个日新月异的行业里实属罕见，但JQuery就是这么的火，甚至延续到现在...',
          sp1: '20',
          sp2: '16'
        },
        {
          h3: '2017 JQuery迷茫之路 何去何从？',
          p: '两三年的热捧，在前端这个日新月异的行业里实属罕见，但JQuery就是这么的火，甚至延续到现在...',
          sp1: '20',
          sp2: '16'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
