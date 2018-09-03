<template>
  <div class="sub-nav">
    <div class="container clearfix">
      <div class="left">
        <router-link :to="subNavData[0].to" class="active">- {{ subNavData[0].name }}</router-link>
        <router-link :to="subNavData[1].to">- {{ subNavData[1].name }}</router-link>
      </div>
      <div class="right">
        你的位置：<router-link to="/">首页</router-link> &rsaquo; <router-link :to="currentPosition.to">{{ currentPosition.name }}</router-link> &rsaquo;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPosition: {
      type: Object,
      required: true
    },
    subNavData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.sub-nav {
  width: 100%;
  height: 50px;
  background: #b8b6b6;
}

.container {
  width: 90%;
  margin: 0 auto;
}

.left {
  float: left;
  line-height: 50px;
  vertical-align: middle;
}

.left a {
  display: inline-block;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  line-height: 30px;
  font-size: 13px;
  color: #ffffff;
}

.left a.active {
  color: #b8b6b6;
  background: #ffffff;
}

.right {
  float: right;
  line-height: 50px;
  font-size: 13px;
  color: #ffffff;
}

.right a {
  color: #ffffff;
}
</style>
