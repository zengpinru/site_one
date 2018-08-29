<template>
  <main>
    <met-banner/>
    <div class="container">
      <div class="news-list">
        <div class="news-list-item">
          <h2><a href="#">关于琴弦保养的诸多疑问</a></h2>
          <div class="news-descript">
            <p>一、琴弦质量不好引起的音质不佳现象 1、不佳琴弦的相邻两弦音色均较好；2、琴弦表面凹凸不平，或尼龙丝上有明显的松动；3、琴码搁弦点和山口搁弦点均“扎实”、琴码底部吻合面板无松动。4、琴弦振动状态异常、声音异常；5、手感明显偏松或偏紧；6、装弦时弦号对应错误。 二、琴弦的易耗区是怎样的？ 琴弦存在一个易耗区，这和演奏力度及方法有关。一般来讲1～8号弦为易耗琴弦区，9～1</p>
          </div>
          <span class="publish-time"><span>08-06 </span> / 2018</span>
          <a href="#" class="more-link">
              <span>了解更多</span>
            </a>
        </div>
        <div class="news-list-item">
          <h2><a href="#">关于琴弦保养的诸多疑问</a></h2>
          <div class="news-descript">
            <p>一、琴弦质量不好引起的音质不佳现象 1、不佳琴弦的相邻两弦音色均较好；2、琴弦表面凹凸不平，或尼龙丝上有明显的松动；3、琴码搁弦点和山口搁弦点均“扎实”、琴码底部吻合面板无松动。4、琴弦振动状态异常、声音异常；5、手感明显偏松或偏紧；6、装弦时弦号对应错误。 二、琴弦的易耗区是怎样的？ 琴弦存在一个易耗区，这和演奏力度及方法有关。一般来讲1～8号弦为易耗琴弦区，9～1</p>
          </div>
          <span class="publish-time"><span>08-06 </span> / 2018</span>
          <a href="#" class="more-link">
              <span>了解更多</span>
            </a>
        </div>
        <div class="news-list-item">
          <h2><a href="#">关于琴弦保养的诸多疑问</a></h2>
          <div class="news-descript">
            <p>一、琴弦质量不好引起的音质不佳现象 1、不佳琴弦的相邻两弦音色均较好；2、琴弦表面凹凸不平，或尼龙丝上有明显的松动；3、琴码搁弦点和山口搁弦点均“扎实”、琴码底部吻合面板无松动。4、琴弦振动状态异常、声音异常；5、手感明显偏松或偏紧；6、装弦时弦号对应错误。 二、琴弦的易耗区是怎样的？ 琴弦存在一个易耗区，这和演奏力度及方法有关。一般来讲1～8号弦为易耗琴弦区，9～1</p>
          </div>
          <span class="publish-time"><span>08-06 </span> / 2018</span>
          <a href="#" class="more-link">
              <span>了解更多</span>
            </a>
        </div>
      </div>
      <div class="news-sidebar">
        <div class="search">
          <input type="text" placeholder="搜索">
          <button><span class="iconfont">&#xe644;</span></button>
        </div>
        <ul class="news-nav">
          <li><a href="#">新闻</a></li>
          <li><a href="#">大道动态</a></li>
          <li><a href="#">乐器知识</a></li>
        </ul>
        <ul class="news-recommend">
          <li>为你推荐</li>
          <li><a href="#">关于琴弦保养的诸多疑问</a></li>
          <li><a href="#">关于琴弦保养的诸多疑问</a></li>
          <li><a href="#">古筝如何正确的保养</a></li>
          <li><a href="#">古筝如何正确的保养</a></li>
          <li><a href="#">如何鉴别古筝音色</a></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import MetBanner from '@/components/global/MetBanner'
export default {
  components: {
    MetBanner
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  padding: 20px 0 30px;
  margin: 0 auto;
}

.news-list {
  width: 70%;
}

.news-sidebar {
  width: 25%;
  padding-top: 30px;
}

.news-list-item {
  padding-bottom: 25px;
  border-bottom: 1px solid #cccccc;
}

.news-list-item h2 a {
  font-size: 20px;
  color: #37474f;
}

.news-list-item h2 a:hover {
  color: #b8b6b6;
}

.news-descript {
  padding-bottom: 20px;
  color: #7d7c7c;
}

.news-descript p {
  font-size: 13px;
  line-height: 1.5;
}

.news-list-item>a {
  position: relative;
  top: -10px;
  overflow: hidden;
  float: right;
  width: 100px;
  height: 40px;
  border: 1px solid #777;
  border-radius: 3px;
  font-size: 15px;
  color: #7d7c7c;
}

.news-list-item>a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  transition: all .3s linear;
}

.news-list-item>a span::after {
  content: '了解更多';
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 40px;
  background: #37474f;
  transition: all .3s linear;
}

.news-list-item>a:hover span {
  top:-40px;
}

.publish-time {
  color: #7d7c7c;
  font-size: 12px;
}

.publish-time span {
  font-size: 20px;
}
/*------------------------------- 左侧栏 ---------------------------------*/
.search {
  position: relative;
}

.search input {
  width: 100%;
  height: 30px;
  padding-left: 10px;
  box-sizing: border-box;
}

.search button {
  position: absolute;
  top: 0;
  left: 90%;
  outline: none;
  border: none;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
}

.news-nav {
  padding: 20px 0;
  margin: 20px 0;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

.news-nav li {
  line-height: 2;
}

.news-nav li a,
.news-recommend li a {
  color: #7d7c7c;
}

.news-nav li a:hover,
.news-recommend li a:hover {
  color:rgb(41, 41, 41);
}

.news-recommend {
  color: #7d7c7c;
}

.news-recommend li {
  padding: 10px 10px;
  border-bottom: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  line-height: 1.8;
}

.news-recommend li:first-child {
  border-left: none;
  border-right: none;
}

/*------------------------------- 响应式代码 ---------------------------------*/
@media screen and (max-width: 768px) {
  .news-list,
  .news-sidebar {
    width: 100%;
  }
}
</style>
