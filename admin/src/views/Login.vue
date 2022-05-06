<template>
  <div class="all">
    <div class="head"></div>
    <div class="body ">
      <div class="byd">
        <el-card class="smallcard  ">
          <h1 class="f-center">Login</h1>
        </el-card>
      <el-card class="bigcard">
        <dir class=" fs-2 p-l-0 f-center fft" >shopping</dir>
        <el-form ref="form"  label-width="80px" label-position="left"  class="p-t-3">
          <el-form-item label="用户名">
            <el-input v-model="model.username"  placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="model.password" show-password></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="YZM" placeholder="一加一等于几?"></el-input>
          </el-form-item>
          </el-form>
          <div class="btn">
            <el-button type="danger"  @click="btnclick">出发</el-button>
          </div>
      </el-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model:{
        username:'',
        password:'',
      },
      YZM:''
    }
  },
  methods: {
    async btnclick(){
      if(this.YZM!='3')
      {
          this.$alert('验证码没输对', '好像......', {
          confirmButtonText: '重来',
          callback: action => {
            this.$message({
              type: 'info',
              message: `哈哈，整挺好，置顶`
            });
          }
        });
        this.YZM='',
        this.model.username=''
        this.model.password=''
      }
      else{
        //注意！！！没有加await是处理不能处理Promise数据的！！!注意异步请求要加这个！！！！
        const key=await this.$http.post('login',this.model)
        if(key.data.token)
        {
          sessionStorage.token=key.data.token  //token存sesionStorage
          this.$message({type:'success' ,message:'欢迎您'+this.model.username})
          this.$store.commit('setusername',this.model.username)  //vuex存username  (function,parmater)
          this.$router.push('/home')
          
        }
        else{
        this.$alert('没输对', '好像......', {
          confirmButtonText: '重来',
          callback: () => {}
        });
        this.YZM='',
        this.model.username=''
        this.model.password=''
        }
      }
    }
  },

};
</script>

<style lang="scss" scoped>
@import '../assets/main';

.all{
  background-image: url('../assets/bimg.jpg');
  background-repeat: no-repeat;
    display: flex;
    // 单个组件整体居中:jc 和ai 只有多个元素的时候才用ac
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.body{
  width: 27.6923rem /* 360px -> 27.6923rem */;
  margin: 6.5rem auto;
}
.byd{
  display: inline-block;
  width: 27.6923rem /* 360px -> 27.6923rem */;
  .smallcard{
    
    background-color: #ec407a;
    margin: 5px auto;
    width: 85% /* 330px -> 25.3846rem */;
    position: relative;
    z-index: 100;
    height: 11.5385rem /* 150px -> 11.5385rem */
  };
.bigcard{
      width: 100% /* 360px -> 27.6923rem */;
      margin-top: -8rem;
      padding-top: 6.5rem;
      height: 38.4615rem /* 500px -> 38.4615rem */;
      .fft{
        font-family: "Segoe Script" !important
      }
  };
.btn{
  margin: 3rem auto;
  display: flex;
  justify-content: center;
}
}
</style>