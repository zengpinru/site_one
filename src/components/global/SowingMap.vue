<template>
  <div class="swipe">
    <swiper :options="swiperOption">
      <swiper-slide><img src="../../assets/image/home/swipe1.jpg" alt="swipe"></swiper-slide>
      <swiper-slide><img src="../../assets/image/home/swipe2.jpg" alt="swipe"></swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style scoped>
.swipe {
  width: 100%;
  height: 30vw;
}
.swipe img {
  width: 100%;
  height: 30vw;
}
</style>
