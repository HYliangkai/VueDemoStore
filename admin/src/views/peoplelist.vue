<template >
<div>
    <h1 style="font-size: 2rem">{{u?'管理员':'在册人员'}}展示</h1>
    <div>
    <el-table :data="model" stripe style="width: 100%" class="f-center">
        <el-table-column prop="_id" label=" id " width="width">
        </el-table-column>
        <el-table-column label="姓名" width="width" prop="adminname" v-if="u">
        </el-table-column>
        <el-table-column label="姓名" width="width" prop="username" v-else>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="125">
        <!-- 自定义表内容,用插槽 -->
        <!-- 获取当前行的数据: scope.row:只有在scope插槽里面才有效-->
        <template slot-scope="scope">
            <el-button type="text" v-if="u" size="small" @click="editrow(scope.row)"
            >编辑</el-button
            >
            &nbsp
            <el-button type="text" size="small" @click="deleterow(scope.row)"
            >删除</el-button
            >
        </template>
        </el-table-column>
    </el-table>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    model: [],
    u:''
    };
},
methods: {
    async fetchdata() {
    if(this.u=='admin')
    var rep = await this.$http.get("rest/admin");
    else var rep=await this.$http.get("rest/user");
    this.model = rep.data;
    },
    deleterow(e) {
    this.$prompt("请输入二级密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        showClose: false,
        center: true,
        inputValidator:(value)=>{
            if(value=='2333')return true
            else return '密码不正确'
        },
    })
        .then(async () => {
          //还是那个问题,异步请求要不写成promis形式要么写成async/await形式
        if(this.u)
        var rep = await this.$http.delete(`rest/admin/${e._id}`);
        else
        var rep = await this.$http.delete(`rest/user/${e._id}`);
        this.fetchdata();
        this.$message({
            type: "success",
            message: "删除成功!",
        });
        })
        .catch(() => {
        this.$message({
            type: "info",
            message: "已取消删除",
        });
        });
    },
    editrow(e) {
    this.$router.push(`/addadmin?id=${e._id}`);
    },
},
created() {
    this.u=this.$route.query.u
    this.fetchdata();
},
};
</script>

<style>
</style>