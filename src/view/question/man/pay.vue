<template>
  <div class="pay">
  	<div class="pay-list">
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>你的薪酬是多少</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		
  	</div>
  </div>
</template>

<script>
export default {
  name: 'pay',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pay-list dl {
	display: flex;
	padding: 10px;
	border-bottom: 1px solid #ccc;
}
.pay-list dl  dt {
	width: 60px;
	border: 1px solid #ccc;
	height: 60px;
	line-height: 60px;
	text-align: center;
}
.pay-list dl  dt  i {
	font-size: 24px;
}
.pay-list dl  dd {
	padding-left: 10px;
	flex: 1;
}
.pay-list dl dd h2{
	font-weight: normal;
	font-size: 16px;
	width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 5px;
	padding-bottom: 5px;
}
.pay-list dl dd p {
	color: #ccc;
}
.pay-list dl dd p span {
	color: #123654;
}
</style>
