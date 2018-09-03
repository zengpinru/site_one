<template>
  <main>
    <met-banner/>
    <sub-nav :current-position="currentPosition" :sub-nav-data="subNavData"/>
    <div class="about-content">
      <img src="../../assets/image/home/about.jpg" alt="about">
      <div class="paragraph">
        <h3>大道文化科技有限公司</h3>
        <p>是中国民族乐器制造行业生产规模最大、技术力量和综合实力最强的企业之一，专业生产各种民族乐器。</p>
      </div>
      <div class="paragraph">
        <h3>基础Basics</h3>
        <p>公司主要生产二胡、扬琴、古筝、琵琶、阮等200多种民族乐器，产品畅销全国30多个省市、自治区以及美国、英国、日本、马来西亚、新加坡、加拿大、香港、台湾等国家和地区。多年来，公司不断追求产品品质的提升，相继邀请到原北京民族乐器厂的老制作专家和苏州、上海等地民族乐器厂的著名专家担任技术顾问，并与中央音乐学院、中国音乐学院、北京乐器研究所等科研院所的专家、教授展开多项合作，共同研究、制作和完善乐器产品。累计获得70余项国家专利，并获得专家及市场的认可。如今公司制作的各类乐器已遍布大江南北，深受广大顾客的赞许。</p>
      </div>
      <div class="paragraph">
        <h3>技术Technology</h3>
        <p>公司在继承中国民族乐器制作优良传统的基础上，既保留手工特色，同时寻求技术的现代化升级，实施标准化战略，着重在制作工艺上完成标准化、模具化、机械化，规避人工的随意性和不规范性；同时在原材料的处理上研发多项技术，并获得国家专利，解决了因南北地域气候差异导致的乐器质量和工艺问题，提升了乐器的品质，延长了乐器的使用寿命。</p>
        <p>2010年5月位于湖南省长沙市的大道乐器新生产基地投入使用，大道乐器也迈入了企业发展战略的新时期。新制作基地将重点打造乐器精品，建成集生产、科研、教学为一体的综合性民族乐器基地，同时新的五年规划逐步实施，形成湖南省标志性文化产业基地，打造乐器行业全国性的产业聚集地，完成品牌飞跃。</p>
        <p>大道乐器，融合于时代，以顽强的生命力，历经数年风雨历程，传承、创新，追求卓越，谱写出一曲深厚、激昂的华彩乐章。以中国文化厚重的历史和悠远的底蕴为基因，传承几千年的古老艺术，重新在现代工业文明中，焕发出卓尔不凡的魅力。</p>
        <p>大道乐器，将民族乐器的特质精彩呈现，你能感受到那些或圆润、或低沉、或高亢、或悠扬的音色音质，在你耳边划过，从你的心尖雕刻。从80年代的民族乐器配套加工作坊，到标准化、信息化的企业管理变革，到民族乐器现代化之路的探索，再到今天的中国北方大型民族乐器综合制造基地，公司始终勇立潮头，卓尔不群，稳定又快速的发展。</p>
      </div>
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
        name: '关于',
        to: '/about/1'
      },
      subNavData: [
        {
          id: '1',
          name: '公司简介',
          to: '/about/1'
        },
        {
          id: '2',
          name: '古筝文化',
          to: '/about/2'
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

<style scoped>
.about-content {
  overflow: hidden;
  width: 90%;
  margin: 20px auto 0;
  padding-bottom: 20px;
  color: rgb(127, 127, 127);
}

.about-content div:nth-of-type(1) h3 {
  margin-top: 0;
  padding-top: 0;
}

.about-content img {
  float: left;
  padding: 0;
  margin: 0 15px 10px 0;
}

.paragraph p {
  font-size: 13px;
  line-height: 2;
}

/*------------------------------- 响应式代码 ---------------------------------*/
@media screen and (max-width: 768px) {
  .about-content img {
    width: 100%;
  }
}
</style>
