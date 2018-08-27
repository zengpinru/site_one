<template>
  <main>
    <!-- 轮播图 -->
    <sowing-map/>
    <!-- 轮播图/ -->

    <!-- 大道古筝介绍 -->
    <div class="introduce">
      <div class="introduce-top">
        <h2>大道古筝</h2>
        <hr>
      </div>
      <div class="introduce-content clearfix">
        <div class="content-left">
          <div class="content-box">
            <div class="content-header clearfix">
              <p class="title">关于我们</p>
              <p class="sub-title">ABOUT US</p>
            </div>
            <div class="content-descript">公司主要生产二胡、扬琴、古筝、琵琶、阮等200多种民族乐器，产品畅销全国30多个省市、自治区以及美国、英国、日本、马来西亚、新加坡、加拿大、香港、台湾等国家和地区。</div>
            <div class="more-btn"><a href="#">更多</a></div>
          </div>
        </div>
        <div class="content-right">
          <img src="../../assets/image/home/home1.jpg" alt="img">
          <div class="img-bg"></div>
        </div>
      </div>
    </div>
    <!-- 大道古筝介绍/ -->
    <!-- 产品展示 -->
    <div class="product-play">
      <div class="product-play-h">
        <h2>产品展示</h2>
        <p>Product</p>
        <p>用科技手段传播古筝文化公益</p>
      </div>
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(items,index) in page" :key="index">
          <div class="product-box">
            <product v-for="(item,index1) in items" class="product"
              :key="index1"
              :img-src="item.imgSrc"
              :product-name="item.productName"
              :to="item.to"
            />
          </div>
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 产品展示/ -->
    <!-- 横幅 -->
    <div class="banner">
      <h2>调整搁弦点</h2>
      <p>筝弦与搁弦点的匹配度，对使用时滑音的音色、手感起着关键的作用，所以调整搁弦点精密度堪比“刺绣”</p>
      <p><a href="#">工艺掠影</a></p>
    </div>
    <!-- 横幅/ -->
  </main>
</template>

<script>
import SowingMap from '@/components/global/SowingMap'
import Product from '@/components/global/Product'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  data () {
    return {
      productList: [
        {
          imgSrc: '/static/image/home/product1.png',
          productName: '仿胡桃/黑檀色/心若莲开图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product2.png',
          productName: '仿胡桃/黑檀色/心若莲开图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product3.png',
          productName: '仿胡桃/黑檀色/心若莲开图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product4.png',
          productName: '仿胡桃/黑檀色/心若莲开图案/古筝',
          to: '#'
        }
      ],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },

  computed: {
    // 产品分页
    page () {
      let num = 3
      let width = document.documentElement.clientWidth || document.body.clientWidth
      if (width > 1000) {
        num = 3
      } else if (width <= 1000 && width > 768) {
        num = 2
      } else {
        num = 1
      }
      let pages = []
      this.productList.forEach((item, index) => {
        let idx = Math.floor(index / num)
        if (!pages[idx]) {
          pages[idx] = []
        }
        pages[idx].push(item)
      })
      return pages
    }
  },

  components: {
    SowingMap,
    Product,
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
/*------------------------------- 古筝文化介绍 ---------------------------------*/
.introduce {
  width: 90%;
  padding: 30px 0;
  margin: 0 auto;
}

.introduce-top h2 {
  position: relative;
  display: inline-block;
  padding: 20px 0;
  margin: 0;
  border-bottom: 2px solid #7d7c7c;
  font-size: 24px;
  font-weight: 400;
}

.introduce-top hr {
  height: 1px;
  margin: 0;
  border: none;
  background: #cccccc;
}

.introduce-content {
  padding-top: 30px;
}

.content-left {
  float: left;
  width: 49%;
  margin-right: 2%;
  border-radius: 2px;
  background: #cccccc;
}

.content-box {
  padding: 10%;
}

.content-header {
  display: flex;
}

.content-header .title {
  margin-right: 20px;
  font-size: 18px;
}

.content-header .sub-title {
  font-size: 12px;
  align-self: flex-end;
  color: rgba(73,73,73,0.65);
}

.content-descript {
  padding: 30px 0;
  line-height: 2;
  text-indent: 2em;
  font-size: 12px;
  color: rgba(73,73,73,0.65);
}

.more-btn {
  width: 18%;
  height: 30px;
  border-radius: 15px;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  background: #ffffff;
  cursor: pointer;
}

.more-btn a {
  display: block;
  height: 100%;
  color: rgba(73,73,73,0.65);
}

.content-right {
  position: relative;
  float: left;
  width: 49%;
}

.content-right img {
  width: 90%;
  height: 15vw;
  box-shadow: 0 13px 21px rgba(20,7,10,0.31);
}

.img-bg {
  position: absolute;
  left: 10%;
  top: 11vw;
  z-index: -1;
  width: 90%;
  height: 6vw;
  background: #cccccc;
  opacity: .6;
}

/*-------------------------------- 产品展示 ----------------------------------*/
.product-play {
  position: relative;
  width: 90%;
  padding: 30px 0;
  margin: 0 auto;
}

.product-play-h {
  margin-bottom: 20px;
}

.product-play-h h2 {
  margin-bottom: 5px;
  text-align: center;
  font-weight: normal;
  color: #292929;
}

.product-play-h p {
  text-align: center;
}

.product-play-h p:nth-of-type(1) {
  margin-bottom: 15px;
  font-size: 12px;
  color: #7d7c7c;
}

.product-play-h p:nth-of-type(2) {
  font-size: 14px;
  color: #7d7c7c;
}

.product-box {
  display: flex;
  justify-content: space-between;
}

.product {
  width: 33%;
}

.swiper-pagination {
  width: 100%;
  text-align: center;
}

.swiper-pagination >>> .swiper-pagination-bullet {
  margin-right: 10px;
}

/*-------------------------------- 横幅 ----------------------------------*/
.banner {
  overflow: hidden;
  height: 200px;
  background: url(../../assets/image/home/swipe2.jpg);
}

.banner h2 {
  margin-top: 30px;
}

.banner h2,
.banner p {
  text-align: center;
  color: #ffffff;
}

.banner a {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 3px;
  line-height: 30px;
  color: #000000;
  background: #ffffff;
}

.banner a:hover {
  background: #cccccc;
}

/*------------------------------- 响应式代码 ---------------------------------*/
@media screen and (max-width: 768px) {
  .content-left {
    width: 100%;
    margin: 0 auto 15px;
  }

  .content-right {
    width: 100%;
  }

  .introduce {
    padding-top: 0;
  }

  .product {
    width: 100%
  }
}
</style>
