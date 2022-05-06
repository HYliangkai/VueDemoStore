<template>
  <div>
      <h1 style="font-size:2rem">分类展示</h1>
      <div>
        <el-table
          :data="model"
          stripe
          
          style="width: 100%"
          class="f-center">

          <el-table-column
            prop="_id"
            label=" id "
            width="width">
          </el-table-column>

          <el-table-column
            prop="name"
            label=" 分类名 "
            width="width">
          </el-table-column>

          <el-table-column
      fixed="right"
      label="操作"
      width="125"
      >
      <!-- 自定义表内容,用插槽 -->
      <!-- 获取当前行的数据: scope.row:只有在scope插槽里面才有效-->
      <template slot-scope="scope">
        <el-button  type="text" size="small" @click="editrow(scope.row)">编辑</el-button>
        &nbsp
        <el-button type="text" size="small" @click="deleterow(scope.row)">删除</el-button>
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
      model:[]
    }
  },
  methods: {
    async fetchdata(){
      const rep=await this.$http.get('/rest/category')
      this.model=rep.data
    },
    deleterow(e){
        this.$confirm('此操作将永久删除该分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        showClose:false,
        center: true
        }).then(async() => {
          //还是那个问题,异步请求要不写成promis形式要么写成async/await形式
          const rep=await this.$http.delete(`/rest/category/${e._id}`)
          this.fetchdata()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      
    },
    editrow(e){
      this.$router.push(`/categories?id=${e._id}`)
    }
  },
  created() {
    this.fetchdata()
  },

}
</script>

<style>

</style>