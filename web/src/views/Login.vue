<template>
  <div class="all">
    <div class="head"></div>
    <div class="body">
      <div class="byd">
        <el-card class="smallcard">
          <h1 class="f-center">Sign {{ log ? "up" : "in" }}</h1>
        </el-card>
        <el-card class="bigcard">
          <div class="fs-2 p-l-0 f-center fft">shopping</div>
          <el-form
            ref="form"
            label-width="80px"
            label-position="left"
            class="p-t-3"
          >
            <el-form-item label="用户名">
              <el-input
                v-model="model.username"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                placeholder="请输入密码"
                v-model="model.password"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item label="验证码" v-if="!log">
              <el-input
                v-model="YZM"
                placeholder="爸爸的爸爸叫什么?"
              ></el-input>
            </el-form-item>
          </el-form>
          <div style="margin-left: 10rem; margin-top: 3rem">
            <div class="d-flex ai-end">
              <el-button
                type="danger"
                @click="btnclick"
                style="margin-right: 0.3rem"
                >{{ log ? "注册" : "登录" }}</el-button
              >
              <el-link type="info" @click="logup" v-if="!log"
                >没注册?点击注册</el-link
              >
            </div>
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
      model: {
        username: "",
        password: "",
      },
      YZM: "",
      log: false,
    };
  },
  methods: {
    logup() {
      this.log = true;
    },
    async btnclick() {
      if (!this.log) {
        if (this.YZM != "爷爷") {
          await  this.$alert("验证码没输对", "好像......", {
            confirmButtonText: "重来",
            callback: () => {
              this.$message({
                type: "info",
                message: `哈哈，整挺好，置顶`,
              });
            },
          });
          this.YZM = "";
          this.model.username = "";
          this.model.password = "";
        } else {
          //注意！！！没有加await是处理不能处理Promise数据的！！!注意异步请求要加这个！！！！
          const key = await this.$http.post("signin", this.model);
          console.log(key.data)
          if (key.data._id) {
            sessionStorage.userid = key.data._id; //token存sesionStorage
            this.$message({
              type: "success",
              message: "欢迎您" + this.model.username,
            });
            await  this.$router.push("/home");
          } else {
            await  this.$alert("没输对", "好像......", {
              confirmButtonText: "重来",
              callback: () => {},
            });
            this.YZM = "" ;
            this.model.username = "";
            this.model.password = "";
          }
        }
      } else {
        if (this.model.username && this.model.password) {
          const rep = await this.$http.post("signup", this.model);
          sessionStorage.userid=rep.data._id
          this.$message.success('注册成功,即将登录...')
          setTimeout(() => {
            this.$router.replace('/home')
          }, 2000);
        } else {
          this.$message.error("用户名密码没输全..");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/main";

.all {
  background-image: url("../assets/login.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  // 单个组件整体居中:jc 和ai 只有多个元素的时候才用ac
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: 42% 42%;
}
.body {
  width: 27.6923rem /* 360px -> 27.6923rem */;
  margin: 6.5rem auto;
}
.byd {
  display: inline-block;
  width: 27.6923rem /* 360px -> 27.6923rem */;
  .smallcard {
    background-color: #ec407a;
    margin: 5px auto;
    width: 85% /* 330px -> 25.3846rem */;
    position: relative;
    z-index: 100;
    height: 11.5385rem; /* 150px -> 11.5385rem */
  }
  .bigcard {
    width: 100% /* 360px -> 27.6923rem */;
    margin-top: -8rem;
    padding-top: 6.5rem;
    height: 38.4615rem /* 500px -> 38.4615rem */;
    .fft {
      font-family: "Segoe Script" !important;
    }
  }
}
</style>