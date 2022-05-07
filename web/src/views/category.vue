<template>
<div>
<h1 class="p-t-1 p-b-2">{{categoryname}}</h1>
<div class="items d-flex ai-center p-x-5">
    <card v-for="item in items" :key="item._id" :cardinfo="item" class="m-2" style="border-radius: 2px;"></card>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            categoryid:'',
            items:[],
            categoryname:''
        }
    },
    methods: {
        async fetchitems()
        {
            const rep=await this.$http.get(`getitemsofcategory?id=${this.categoryid}`)
            this.categoryname=rep.data.name
            this.items=rep.data.items
        }
    },

created() {
    this.categoryid=this.$route.query.id
    this.fetchitems()
},
}
</script>

<style lang="scss">
.item{
    width: 100vh;
    
}
</style>