<template>
  <main>
    <met-banner/>
    <sub-nav :current-position="currentPosition" :sub-nav-data="subNavData"/>
    <div class="contact-info">
      <p>长沙大道文化科技有限公司</p>
      <p>主要生产二胡、扬琴、古筝、琵琶、阮等200多种民族乐器，产品畅销全国30多个省市、自治区以及美国、英国、日本、马来西亚、新加坡、加拿大、香港、台湾等国家和地区。</p>
      <p>公司地址：湖南长沙洋湖总部经济区</p>
      <p>联系方式：0731-00000000</p>
      <p>官方网站：www.@@@.com</p>
      <div class="map"></div>
    </div>
  </main>
</template>

<script>
import MetBanner from '@/components/global/MetBanner'
import SubNav from '@/components/global/SubNav'
export default {
  data () {
    return {
      currentPosition: {
        name: '联系',
        to: '/contact'
      },
      subNavData: [
        {
          id: '1',
          name: '联系',
          to: '/contact'
        },
        {
          id: '2',
          name: '留言',
          to: '#'
        }
      ]
    }
  },
  components: {
    MetBanner,
    SubNav
  }
}
</script>

<style>
.contact-info {
  width: 90%;
  padding: 20px 0;
  margin: 0 auto;
}
.contact-info p {
  text-align: center;
  line-height: 2.5;
  font-size: 14px;
  color: #2a333c;
}
</style>
