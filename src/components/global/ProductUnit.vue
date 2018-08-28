<template>
  <div class="product-c">
    <div class="product-img">
      <img :src="imgSrc" alt="product">
      <div class="img-cover"></div>
      <a :href="to"><span class="iconfont">&#xe644;</span></a>
    </div>
    <h2 class="product-name"><a :href="to" class="text-overflow">{{ productName }}</a></h2>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
.product-c {
  border-bottom: 1px solid #cccccc;
}

.product-img {
  position: relative;
  width: 100%;
}

.product-img img {
  width: 100%;
}

.product-img:hover .img-cover,
.product-img:hover a {
  display: block;
}

.product-img .img-cover {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  background:rgba(0,0,0,.5);
}

.product-img a {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  margin-left: -15px;
  display: none;
}

.product-img a span {
  display: inline-block;
  width: 30px;
  height: 30px;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
}

.product-name a {
  display: block;
  height: 100%;
  text-align: center;
  font-size: 16px;
  color: rgba(0,0,0,.5);
}
</style>
