<template>
  <div class="card d-flex column ai-center bg-white p-y-2">
    <div class="picture">
      <img :src="cardinfo.picture" alt="图片未加载">
    </div>
    <div class="name fs-2 fw p-y-0-2">
      {{cardinfo.itemname}}
    </div>
    <div class="describe p-y-0-2 p-x-3" style="color:#b0b0b0">
      {{cardinfo.describe}}
    </div>
    <div class="price p-t-0-3" style="color:#ff6700">
      {{cardinfo.price}}元起
    </div>
  </div>
</template>
<script>
export default {
props:{
  cardinfo:{}
}
}
</script>

<style lang="scss">
.card{
  height:23.0769rem /* 300px -> 23.0769rem */;
  width: 18.0769rem /* 235px -> 18.0769rem */;


}
.card:hover {
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .2);
    border-color: #eee;
    transition: all .2s ease-in-out;
  }


.picture{
  img{
    width: 12.3077rem /* 160px -> 12.3077rem */;
    height: 12.3077rem /* 160px -> 12.3077rem */;
  }
}
</style>