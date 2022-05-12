<template>
<div>
    <h1  class="sh">购物车</h1>
    <div>
        <el-button type="danger" icon="el-icon-delete" circle ></el-button>
        <div class="box">
            <div class="head">
    <el-checkbox  v-model="checked">复选</el-checkbox>
    
            </div>
            <div class="img">
                <img :src="this.info.src" alt="加载不出来" style="height:70%">
            </div>
            <div class="jies">
                <div class="title">{{this.info.title}}</div>
                <div class="price">{{this.info.price}}</div>
            </div>
            <div class="number">
                <button @click="sub">-</button>
                <div>{{number}}</div>
                <button @click="add">+</button>
            </div>
            <div class="ztai">
                <div>{{checked}}</div> 
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    data(){
        return{
            checked:true,
            info:{
                price:998,
                title:'什么什么香水',
                src:'http://chzkysxj.oss-cn-nanjing.aliyuncs.com/e85ee464b7e0355b38670dfa79629ed6.webp'
            },
            
            number:1,
            ztai:false,
            // checked:Boolean
        }
    },
    methods:{
        changee(e){
            console.log(e)
            // if(this.ztai===false)
            // this.ztai=true
            // else
            // this.ztai=false
            // console.log(this.ztai)
            // this.ztai=e
        },
        sub(){
            console.log('yes')
        },
        add(){
            console.log('no')
        }
    },
    created(){
        // console.log(this.$route.query)
        // this.info=this.$route.query
    }

}
</script>

<style lang="scss">
.box{
    width: 50%;
    height: 20vh;
    background-color: grey;
    display: flex;
    justify-content: space-around;
}
.head{
    display: flex;
    align-items: center;
}

</style>