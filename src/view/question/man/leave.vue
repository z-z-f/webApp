<template>
  <div class="leave">
  	<div class="leave-list">
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>上家公司的离职时间</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		
  	</div>
  </div>
</template>

<script>
export default {
  name: 'leave',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leave-list dl {
	display: flex;
	padding: 10px;
	border-bottom: 1px solid #ccc;
}
.leave-list dl  dt {
	width: 60px;
	border: 1px solid #ccc;
	height: 60px;
	line-height: 60px;
	text-align: center;
}
.leave-list dl  dt  i {
	font-size: 24px;
}
.leave-list dl  dd {
	padding-left: 10px;
	flex: 1;
}
.leave-list dl dd h2{
	font-weight: normal;
	font-size: 16px;
	width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 5px;
	padding-bottom: 5px;
}
.leave-list dl dd p {
	color: #ccc;
}
.leave-list dl dd p span {
	color: #123654;
}
</style>
