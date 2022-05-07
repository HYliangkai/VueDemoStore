<template>
<div class="about">
    <h1 style="font-size:2rem">{{ id ? "编辑" : "新增" }}商品</h1>
    <el-form @submit.native.prevent="save" :model="model">

    <el-form-item label="名称" >
        <br>
        <el-input v-model="model.itemname" style="width:15%"></el-input>
    </el-form-item>

    <el-form-item label="分类" >
        <br>
        <el-select v-model="model.catagory" placeholder="请选择">
    <el-option
    v-for="item in category"
    :key="item._id"
    :label="item.name"
    :value="item._id">
    </el-option>
</el-select>
    </el-form-item>

    <el-form-item label="商品描述">
        <br>
        <el-input type="textarea" v-model="model.describe" style="width:30%"></el-input>
    </el-form-item>

        <el-form-item label="价格"  prop="price"
    :rules="[
    { required: true, message: '价格不能为空'},
    {type: 'number', message: '价格必须为数字值'}
    ]">
        <br>
        <el-input v-model.number="model.price" style="width:30%"></el-input>
    </el-form-item>

    <el-form-item label='商品图片'>
        <br>
                <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:10086/upload"
            :show-file-list="false"
            :multiple="false"
            :on-success="
            (req) => {
                model.picture = req.url;
            }
            "
        >
            <img v-if="model.picture" :src="model.picture" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </el-form-item>


    <el-form-item>
        <el-button type="success" native-type="submit">提交</el-button>
    </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
name: "CategoriesEdit",
data() {
    return {
        id:'',
    model: {
        picture:''
    },
    category:[]
    };
},
methods: {
    async save() {
        let res
    if (this.id) {
        res = await this.$http.put(`rest/item/${this.id}`, this.model);
    } else {
        res = await this.$http.post("rest/item", this.model);
    }
    this.$router.push("/itemslist");
    this.$message({ type: "success", message: "保存成功" });
    },
    async fetchcategory(){
        const res=await this.$http.get('rest/category')
        this.category=res.data
    },
    async fetchiteminfo(){
        const res=await this.$http.get(`rest/item/${this.id}`)
        this.model=res.data 
    }
},
created() {
    this.fetchcategory()
    this.id=this.$route.query.id
    this.id&&this.fetchiteminfo()
},
};
</script>

<style >
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
  width: 15rem;
  height: 15rem;
  line-height: 15rem;
  text-align: center;
}
.avatar {
  width: 15rem;
  height: 15rem;
  display: block;
}
</style>