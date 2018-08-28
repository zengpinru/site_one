<template>
  <main>
    <met-banner/>
    <div class="product-list">
      <product-unit v-for="(item,index) in productList" class="product-item"
        :key="index"
        :img-src="item.imgSrc"
        :product-name="item.productName"
        :to="item.to"
      />
    </div>
  </main>
</template>

<script>
import MetBanner from '@/components/global/MetBanner'
import ProductUnit from '@/components/global/ProductUnit'
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
          productName: '非洲紫檀木/原木色/刻兰蕙幽香字/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product3.png',
          productName: '奥氏黄檀/原木色/鹿逐兰舍图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product4.png',
          productName: '非洲紫檀/原木色/丝柳芊芊图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product1.png',
          productName: '仿胡桃/黑檀色/心若莲开图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product2.png',
          productName: '非洲紫檀木/原木色/刻兰蕙幽香字/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product3.png',
          productName: '奥氏黄檀/原木色/鹿逐兰舍图案/古筝',
          to: '#'
        },
        {
          imgSrc: '/static/image/home/product4.png',
          productName: '非洲紫檀/原木色/丝柳芊芊图案/古筝',
          to: '#'
        }
      ]
    }
  },

  components: {
    ProductUnit,
    MetBanner
  }
}
</script>

<style>
.product-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
}

.product-item {
  width: 22%;
}

/*------------------------------- 响应式代码 ---------------------------------*/
@media screen and (max-width: 768px) {
  .product-item {
    width: 45%;
  }
}
</style>
