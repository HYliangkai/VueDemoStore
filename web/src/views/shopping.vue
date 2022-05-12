<template>
<div class="d-flex column ai-center">
    <h1 class="p-t-2">购物车</h1>

<div style="width:80%" class="p-x-3">
    <el-table :data="userinfo.shopping" stripe style="width: 100%" class="f-center">
        <el-table-column prop="itemsid.itemname" label=" 名字 " width="width">
        </el-table-column>
        <el-table-column label=" 商品图片 " width="width">
        <template slot-scope="scope">
            <img :src="scope.row.itemsid.picture" style="height: 6rem" />
        </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="125">    
        <template slot-scope="scope">
            <el-button type="text" size="small" @click="deleterow(scope.row)"
            >取消购物车</el-button
            >
            <el-button type="text" size="small" @click="deleterow(scope.row)"
            >购买</el-button
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
            userinfo:{},
        }
    },
    methods: {
        async deleterow(e){
            // console.log(e)
            for(let x in this.userinfo.shopping)
            {
                if(this.userinfo.shopping[x]._id==e._id)
                {
                    this.userinfo.shopping.splice(x,1)        //用splice方法删除数据比delete彻底
                    console.log(this.userinfo)
                    const rep=await this.$http.put('/user',this.userinfo)
                    
                }   
            }
            this.$message.success('成功')

        }
    },

async created(){
    const id=this.$route.params.id
    // console.log(id)
    const rep=await this.$http.get(`shoppinp?id=${id}`)
    this.userinfo=rep.data

},
}
</script>

<style>

</style>