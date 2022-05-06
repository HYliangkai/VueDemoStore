<template>
<div class="about">
    <h1 style="font-size:2rem">{{ id ? "编辑" : "新建" }}分类</h1>
    <el-form @submit.native.prevent="save">
    <el-form-item label="名称">
        <el-input v-model="model.name"></el-input
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
    let res
    if (this.id) {
        res = await this.$http.put(`rest/category/${this.id}`, this.model);
    } else {
        res = await this.$http.post("rest/category", this.model);
    }
    this.$router.push("/categorieslist");
    this.$message({ type: "success", message: "保存成功" });
    },
    async fech() {
    const res = await this.$http.get(`rest/category/${this.id}`);
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