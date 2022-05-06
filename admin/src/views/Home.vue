<template>
<div >

    <el-container  class="p-0-2" style="height:100vh">
        <!-- 背景色要rgb才有效 -->
<el-aside width="17rem" class="as" style="background-color:rgb(168,216,185)"  >
    
        <el-menu
        router
        unique-opened
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#A8D8B9"
        text-color="black"
        active-text-color="#71361d"
        >
        <!-- 加入route就具有路由跳转属性,跳转到index对应位置 -->
        <el-submenu router index="1">
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span>分类管理</span>
            </template>
            <el-menu-item-group >
            <el-menu-item  index="/categories">分类添加</el-menu-item>
            <el-menu-item  index="/categorieslist">分类展示</el-menu-item>
            </el-menu-item-group>
        </el-submenu>


        <el-submenu router index="2">
            <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>人员管理</span>
            </template>
            <el-menu-item-group title="管理员">
            <el-menu-item  index="/addadmin">添 加</el-menu-item>
            <el-menu-item  index="/peoplelist?u=admin">查 看</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户">
            <el-menu-item index='/peoplelist'>在册用户</el-menu-item>
            </el-menu-item-group>
        </el-submenu>


        <el-submenu router index="3">
            <template slot="title">
            <i class="el-icon-s-comment"></i>
            <span>商品管理</span>
            </template>
            <el-menu-item-group>
            <el-menu-item  index="/items">商品添加</el-menu-item>
            <el-menu-item  index="/itemslist">商品展示</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu router index="4">
            <template slot="title">
            <i class="el-icon-menu"></i>
            <span>首页轮播图</span></span>
            </template>
            <el-menu-item-group >
            <el-menu-item  index="/swiper">添加</el-menu-item>
            <el-menu-item  index="/swiperlist">展示</el-menu-item>
            </el-menu-item-group>
        </el-submenu>


        </el-menu>
    
</el-aside>


<el-container style="background-color:rgb(249,244,230)">

    <el-header style="text-align: right; font-size: 1.25rem; padding-top:1.5rem;background-color:rgb(196,203,207)">
    <el-dropdown @command='handleCommand'>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >注销</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <span>{{this.$store.state.username}}</span>
    </el-header>

    <el-main>
        <router-view :key="$route.path"></router-view>
    </el-main>


</el-container>


</el-container>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed:{
    },
    methods: {
        handleCommand(){
        this.$confirm('此操作将注销当前账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
        }).then(() => {
        sessionStorage.token=''
        this.$message({
            type: 'success',
            message: '注销成功!'
        });
        this.$router.push('/')
        }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消注销'
        });          
        })
    }
    },
    created() {
    },


};
</script>



<style lang="scss" scoped>

</style>