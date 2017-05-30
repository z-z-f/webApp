<template>
  <div class="intro">
  	<div class="intro-list">
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>行内元素有哪些？块级元素有哪些？</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>行内元素有哪些？块级元素有哪些？</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>行内元素有哪些？块级元素有哪些？</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>行内元素有哪些？块级元素有哪些？</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>行内元素有哪些？块级元素有哪些？</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  		<dl>
  			<dt><i class="fa fa-sitemap"></i></dt>
  			<dd>
  				<h2>行内元素有哪些？块级元素有哪些？</h2>
  				<p><span>20</span>个人回答了这个问题</p>
  			</dd>
  		</dl>
  	</div>	
  </div>
</template>

<script>

export default {
  name: 'intro',
  data () {
    return {}
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
        var Mock = require("mockjs")
    // 
var data = Mock.mock('www.taobao.com',{
  'list|10':[{
    id:'@guid',
    name:'@cname',
    'age|1-100':1,
    date: '@date'
  }]

})



function promise(fn){
  var Result = function(){};
  Result.prototype.then = function(resolve,reject){
    fn.call(this,resolve,reject)
  }
  return new Result;
}

var promise = new promise(function(resolve,reject){
  var url,xhr;
  url = 'www.taobao.com';
  xhr = new XMLHttpRequest();
  xhr.open("get",url,true);
  xhr.onload=function(){
    if(xhr.status == 200){
      resolve(xhr.responseText)
    }else{
      reject('error')
    }
  }
  xhr.send()
})

promise.then(function(Result){
  console.log(Result);
},function(e){
  console.log(e);
})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.intro-list dl {
	display: flex;
	padding: 10px;
	border-bottom: 1px solid #ccc;
}
.intro-list dl  dt {
	width: 60px;
	border: 1px solid #ccc;
	height: 60px;
	line-height: 60px;
	text-align: center;
}
.intro-list dl  dt  i {
	font-size: 24px;
}
.intro-list dl  dd {
	padding-left: 10px;
	flex: 1;
}
.intro-list dl dd h2{
	font-weight: normal;
	font-size: 16px;
	width: 200px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 5px;
	padding-bottom: 5px;
}
.intro-list dl dd p {
	color: #ccc;
}
.intro-list dl dd p span {
	color: #123654;;
}
</style>
