<template>
  <div class="login">
   	<form class="el-form">
	   	<h3 class="title">系统登录</h3>
   	    <div class="el-input">
   	        <input type="text" placeholder="账号" class="el-input_inner">
   	    </div>
   	    <div class="el-input">
   	        <input type="text" placeholder="密码" class="el-input_inner">
   	    </div>
	   	<button type="button" class="btn">
	   	 	<span class="submit">登录</span>
	   	</button>
   	</form>
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .login{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    display: -webkit-flex;
    flex-direction: column;
    background:url('../../static/image/5.jpg') no-repeat;
    width:100%;
    background-size: 100% 100%;
    box-sizing:border-box;
  }
  h3{
    width:100%;
    height:40px;
    line-height:40px;
    font-weight:normal;
    text-align:center;
  }
  .el-form{
    width:70%;
    margin:120px auto;
  }
  .el-input{
      margin-top:10px;
    }
    input{
      border:none;
      padding:0.10rem;
      border-radius:6px;
      width:100%;
      height: 25px;
      padding-left: 10px;
      padding-right: 10px;
    }
   .btn{
     width:100%;
     height:40px;
     background:#86c5e4;
     border-radius:8px;
     margin-top:16%;
     margin-left:3%;
   }

</style>
