<template>
  <div class="webApp">
  	<router-view></router-view>
    <div class="foot">
    	<router-link v-for="item in footList" :to="item.url" class="foot-tab" active-class="on"><i :class="item.icon"></i><br>{{item.text}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webApp',
  data () {
    return {
      footList: [
      	{
      		text: '问答',
      		url: '/webApp/question',
      		icon: 'fa fa-lock'
      	},
      	{
      		text: '教程',
      		url: '/webApp/course',
      		icon: 'fa fa-file'
      	},
      	{
      		text: '面试',
      		url: '/webApp/interview',
      		icon: 'fa fa-male'
      	},
      	{
      		text: '个人',
      		url: '/webApp/person',
      		icon: 'fa fa-user-md'
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot {
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	width: 100%;
	text-align: center;
	height: 44px;
	border-top: 1px solid #ccc;
	background: #fff;
	z-index: 101;
}
.foot-tab {
	flex: 1;
	padding-top: 3px;
	color: #666;
}
.on {
	color: #20a0ff;
}
</style>
