<template>
<div class="about">
    <h1 style="font-size:2rem">{{ id ? "编辑" : "新增" }}管理员</h1>
    <el-form @submit.native.prevent="save">
    <el-form-item label="用户名">
        <el-input v-model="model.adminname"></el-input
    ></el-form-item>
        <el-form-item label="密码">
        <el-input v-model="model.password"></el-input
    ></el-form-item>
    <el-form-item>
        <el-button type="primary" native-type="submit">提交</el-button>
    </el-form-item>
    </el-form>
</div>
</template>
<script>
export default {
name: "CategoriesEdit",
data() {
    return {
    model: {},
    id:''
    };
},
methods: {
    async save() {


            this.$prompt('请输入二级密码', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        center: true,
        inputValidator:(value)=>{
            if(value=='2333')return true
            else return '密码不正确'
        },
        }).then(async() => {
        let res
    if (this.id) {
        res = await this.$http.put(`rest/admin/${this.id}`, this.model);
    } else {
        res = await this.$http.post("rest/admin", this.model);
    }
    this.$router.push('/peoplelist?u=admin');
    this.$message({ type: "success", message: "保存成功" });
        }).catch(() => {
        this.$message({
            type: 'info',
            message: '取消输入'
        });       
        });
    },
    async fech() {
    const res = await this.$http.get(`rest/admin/${this.id}`);
    this.model = res.data;
    },
},
created() {
    this.id=this.$route.query.id
    this.id && this.fech();
    console.log(this.datt)
},
};
</script>

<style>
</style>