<template>
<div class="p-t-5">
    <h1 v-if="uid">用户id:{{uid}}</h1>
    <h1 v-else>你还没有登录</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            uid:sessionStorage.userid
        }
    },
    created() {
    },
}
</script>

<style>

</style>