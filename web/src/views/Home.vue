<template>
<div class="diji ">
<div class="head ">
<div class="nav d-flex ai-center jc-end p-r-4" style="background-color:rgb(102, 102, 102)">
    <router-link tag="a" to="/info" style="color:rgba(255, 255, 255, 0.7);text-decoration:none" >我的</router-link >
</div>

<div class="footnav d-flex ai-center p-l-2">
    <router-link tag="a" to="/home" class="p-x-4 fs-2" style="color:rgb(51, 51, 51);font-weight:800;text-decoration:none">首页</router-link>
    <a class="p-x-4 fs-2" style="color:rgb(51, 51, 51);font-weight:800;text-decoration:none">
    <el-dropdown  @command="getcategoryid">
<span class="el-dropdown-link fs-2">
    分类<i class="el-icon-arrow-down el-icon--right"></i>
</span>
<el-dropdown-menu slot="dropdown">
    <el-dropdown-item v-for="item in categorise" :key="item._id" class="fs-2" :command="item._id" >{{item.name}}</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
    </a>
    <router-link tag="a" :to="`/shopping/${userinfo._id}`" class="p-x-4 fs-2" style="color:rgb(51, 51, 51);font-weight:800;text-decoration:none">购物车</router-link>
    <router-link tag="a" to="/" class="p-x-4 fs-2" style="color:rgb(51, 51, 51);font-weight:800;text-decoration:none">退出</router-link></router-link></router-link>
</div>
</div>


<router-view @addshopping="add" :key="$route.query.id" />


</div>
</template>

<script>

export default {

data() {
    return {
        categorise:[],
        userinfo:{}
    }
},
methods: {
    async fetchcategory(){
        const rep=await this.$http.get('caregory')
        this.categorise=rep.data
    },
    getcategoryid(e){
        this.$router.push(`/category?id=${e}`)
    },
    async add(e){
        var kee=true
        for(let x of this.userinfo.shopping){
            if(x.itemsid==e)
            {
            kee=false
            }
        }
        if(kee){
        this.userinfo.shopping.push({itemsid:e})
        const rep=await this.$http.put('userinfo',this.userinfo)
        // this.userinfo=rep.data
        console.log(e)
        }
        
    },
    async fetchuserinfo(){
        const rep=await this.$http.get(`userinfo?id=${sessionStorage.userid}`)
        this.userinfo=rep.data
    }
},
computed:{
    
},
created() {
    this.fetchcategory(),
    this.fetchuserinfo()
},
}
</script>

<style lang="scss">
.head{
    .nav{
        height: 3.4615rem /* 45px -> 3.4615rem */;
    }
    .footnav{
        height: 5.6923rem /* 74px -> 5.6923rem */;
        box-shadow: 0px 4px .8462rem /* 11px -> .8462rem */ -0.7692rem /* -10px -> -0.7692rem */ black;
    }
}
</style>