<template>
<div class="body m-t-5 ">
    <div>
    <swiper ref="mySwiper" :options="swiperOptions" style="height:56vh">
    <swiper-slide v-for="item in swiper" :key="item._id" >
        <img :src="item.swiperurl" style="width:90% ;border-radius:0.2rem"  alt="未加载">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
    <div class="card p-x-3  d-flex jc-around  p-t-4 wrap " style="width:100%;">
    <card :cardinfo="item" v-for="(item,index) in items" :key="index" class="m-2" style="border-radius: 2px;" @addshopping='add'></card>
    </div>
</div>
</template>

<script>

export default {

    data(){
        return{
        swiper:[],
        swiperOptions:{
        pagination:'.swiper-pagination',
        autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        },},
        items:[],
        }
    },

    methods: {
            async fetchswiper(){
        const rep=await this.$http.get('swiper')
        this.swiper=rep.data
    },
    async fetchitems(){
        const rep=await this.$http.get('items')
        this.items=rep.data
    },
    add(e){
        this.$emit('addshopping',e)
        
    }
    },
    created() {
    this.fetchswiper()
    this.fetchitems()
    },
}
</script>

<style>

</style>