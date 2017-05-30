

var Mock = require("mockjs");

export default Mock.mock('www.taobao.com',{
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