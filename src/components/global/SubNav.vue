<template>
  <div class="sub-nav">
    <div class="container clearfix">
      <div class="left">
        <a href="#" class="active">- 公司简介</a>
        <a href="#">- 古筝文化</a>
      </div>
      <div class="right">
        你的位置：<a href="#">首页</a> &rsaquo; <a href="#">关于</a> &rsaquo;
      </div>
    </div>
  </div>
</template>

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
