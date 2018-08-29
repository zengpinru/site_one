<template>
  <footer>
    <div class="footer-link">
     <div class="site-link clearfix">
       <div class="site-link-left clearfix">
         <div class="col">
           <h4><a href="#">关于</a></h4>
           <ul>
             <li><a href="#">公司介绍</a></li>
             <li><a href="#">古筝文化</a></li>
           </ul>
         </div>
         <div class="col">
           <h4><a href="#">工艺</a></h4>
           <ul>
             <li><a href="#">工艺掠影</a></li>
             <li><a href="#">产品图集</a></li>
           </ul>
         </div>
         <div class="col">
           <h4><a href="#">新闻</a></h4>
           <ul>
             <li><a href="#">大道动态</a></li>
             <li><a href="#">乐器知识</a></li>
           </ul>
         </div>
         <div class="col">
           <h4><a href="#">联系</a></h4>
           <ul>
             <li><a href="#">联系</a></li>
             <li><a href="#">留言</a></li>
           </ul>
         </div>
       </div>
       <div class="site-link-right clearfix">
         <h4>联系我们</h4>
         <div class="rq-code"><img src="../../assets/image/home/rq-code.png" alt="rq-code"></div>
         <div class="rq-code"><img src="../../assets/image/home/rq-code.png" alt="rq-code"></div>
       </div>
     </div>
     <div class="friend-link"></div>
    </div>
    <div class="copyright">Design by 曾品儒个人博客 粤ICP备17145241号-1</div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
}

.footer-link {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15px;
}

.site-link-left {
  float: left;
  width: 60%;
}

.col {
  float: left;
  width: 25%;
}

.col h4 {
  position: relative;
  font-weight: 400;
}

.col h4 a {
  position: relative;
  font-size: 16px;
  color: #666666;
}

.col h4 a::after {
  position: absolute;
  top: 25%;
  right: -10px;
  content: '';
  border-left: 6px solid rgb(184, 182, 182);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}

.col li {
  line-height: 2;
}

.col li a {
  font-size: 14px;
  color: rgb(125, 124, 124);
}

.col li a:hover,
.col h4 a:hover {
  color: rgb(184, 182, 182);
}

.site-link-right {
  float: left;
  width: 40%;
}

.site-link-right h4 {
  font-weight: 400;
  font-size: 16px;
  color: #666666;
}

.rq-code {
  float: left;
  overflow: hidden;
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.rq-code:hover img {
  transform: scale(1.1);
}

.rq-code img {
  width: 100%;
  height: 100%;
  transition: all .3s linear;
}

.copyright {
  width: 100%;
  height: 50px;
  border-top: 1px solid #cccccc;
  line-height: 50px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .site-link-left {
    width: 100%;
  }

  .site-link-right {
    width: 100%;
  }
}
</style>
