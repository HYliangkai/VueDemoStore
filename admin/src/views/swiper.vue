<template>
<div>
    <h1 style="font-size: 3rem" class="f-center">
    {{ id ? "修改" : "添加" }}轮播图
    </h1>
    <div>
    <div class="p-x-5">
        <div class="d-flex jc-center m-t-2">
        <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:10086/upload"
            :show-file-list="false"
            :multiple="false"
            :on-success="
            (req) => {
                model.swiperurl = req.url;
            }
            "
        >
            <img v-if="model.swiperurl" :src="model.swiperurl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </div>
    </div>

    <div class="p-t-5 d-flex jc-center">
        <el-button type="success" @click="senddata">确定</el-button>
    </div>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    model: {
        id:'',
        swiperurl:''
    },
    };
},
methods: {
    async senddata() {
    if (this.model.swiperurl) {
        if (this.id) {
        const rep = await this.$http.put(`rest/swiper/${this.id}`, this.model);
        } else {
        const rep = await this.$http.post("rest/swiper", this.model);
        }
        this.$message({
        type: "success ",
        message: `${this.id ? "修改" : "添加"}成功`,
        }); //注意类型是个字符串
        this.model.swiperurl=''
        this.$router.push('/swiperlist')
    }
    },
    async fetchdata() {
    const rep = await this.$http.get(`rest/swiper/${this.id}`);
    this.model = rep.data;
    },
},
created() {
    this.id=this.$route.query.id
    this.id && this.fetchdata();
},
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 40rem;
  height: 17rem;
  line-height: 17rem;
  text-align: center;
}
.avatar {
  width: 40rem;
  height: 17rem;
  display: block;
}
</style>