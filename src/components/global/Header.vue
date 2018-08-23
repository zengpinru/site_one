<template>
  <header>
    <nav class="clearfix">
      <!-- PC端 -->
      <ul class="pc-nav">
        <li>
          <a href="#"> 首页</a>
        </li>
        <li>
          <a href="#" class="drop-down">关于</a>
          <ul class="drop-down-menu">
            <li>
              <a href="#">公司简介</a>
            </li>
            <li>
              <a href="#">古筝文化</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">产品</a>
        </li>
        <li>
          <a href="#">工艺</a>
        </li>
        <li>
          <a href="#">新闻</a>
        </li>
        <li>
          <a href="#">联系</a>
        </li>
      </ul>
      <!-- PC端/ -->
      <!-- 菜单图标 -->
      <div class="menu-icon" @click="switchMenu" :class="{'open-menu':openMenu}">
        <span></span>
      </div>
      <!-- 菜单图标/ -->
      <!-- 移动端 -->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave">
        <ul class="mobile-nav" v-show="showMobileMenu" ref="mobileNav">
          <li>
            <a href="#"> 首页</a>
          </li>
          <li>
            <a href="#" class="drop-down">关于</a>
            <ul class="drop-down-menu">
              <li>
                <a href="#">公司简介</a>
              </li>
              <li>
                <a href="#">古筝文化</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">产品</a>
          </li>
          <li>
            <a href="#">工艺</a>
          </li>
          <li>
            <a href="#">新闻</a>
          </li>
          <li>
            <a href="#">联系</a>
          </li>
        </ul>
      </transition>
      <!-- 移动端/ -->
    </nav>
  </header>
</template>

<script>
import Velocity from 'velocity-animate'
export default {
  data () {
    return {
      openMenu: false,
      showMobileMenu: false,
      mobileNavHeight: '0px'
    }
  },

  mounted () {
    this.computeMenuHeight()
  },

  methods: {
    // 切换菜单状态
    switchMenu () {
      if (this.openMenu) { // 关闭移动端菜单
        this.openMenu = false
        this.showMobileMenu = false
      } else { // 打开移动端菜单
        this.openMenu = true
        this.showMobileMenu = true
      }
    },

    // 打开或关闭菜单动画
    beforeEnter (el) {
      el.style.height = '0px'
    },
    enter (el) {
      Velocity(el, { height: this.mobileNavHeight }, { duration: 600 })
    },
    beforeLeave (el) {
      el.style.height = this.mobileNavHeight
    },
    leave (el, done) {
      Velocity(el, { height: '0px' }, { duration: 600, complete: done })
    },

    // 计算移动端菜单的高度
    computeMenuHeight () {
      let height = 0
      let lis = this.$refs.mobileNav.childNodes
      lis.forEach(element => {
        if (element.nodeType === 1) {
          height += parseInt(window.getComputedStyle(element).height)
        }
      })
      this.mobileNavHeight = height + 'px'
    }
  }
}
</script>

<style scoped>
nav {
  position: relative;
  width: 90%;
  margin: 0 auto;
}

/*------------------------------- PC端导航 ---------------------------------*/
.pc-nav {
  float: right;
}

.pc-nav>li {
  position: relative;
  float: left;
  padding: 0 15px;
  line-height: 60px;
}

.pc-nav>li>a {
  position: relative;
  display: block;
  height: 100%;
  font-size: 14px;
  color: #292929;
}

.pc-nav>li>a:hover,
.drop-down-menu>li>a:hover {
  color: #b8b6b6;
}

.pc-nav>li>a:hover.drop-down::after {
  border-top: 3px solid #b8b6b6;
}

.pc-nav>li:hover .drop-down-menu {
  display: block;
}

.drop-down::after {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
  vertical-align: middle;
  border-top: 3px solid #292929;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
}

.drop-down-menu {
  position: absolute;
  right: 0;
  top: 60px;
  display: none;
  width: 180%;
  padding: 10px 0;
  background: #cccccc;
}

.drop-down-menu::before {
  position: absolute;
  top: -8px;
  right: 10%;
  content: '';
  border-bottom: 8px solid #cccccc;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.drop-down-menu>li {
  padding-left: 15px;
  line-height: 30px;
}

.drop-down-menu>li>a {
  display: block;
  height: 100%;
  font-size: 14px;
  color: #292929;
}

/*------------------------------- 菜单图标 ---------------------------------*/
.menu-icon {
  position: relative;
  float: right;
  display: none;
  width: 35px;
  height: 60px;
  margin-right: 20px;
}

.menu-icon span::before,
.menu-icon span::after {
  position: absolute;
  top: 23px;
  content: '';
  width: 100%;
  height: 2px;
  background: #cccccc;
  transition: all .2s linear;
}

.menu-icon span::before {
  top: 23px;
}

.menu-icon span::after {
  top: 35px;
}

.menu-icon.open-menu span::before {
  top: 29px;
  transform: rotate(-45deg);
}

.menu-icon.open-menu span::after {
  top: 29px;
  transform: rotate(45deg);
}
/*------------------------------- 移动端导航 ---------------------------------*/
.mobile-nav {
  position: absolute;
  top: 60px;
  z-index: 2;
  overflow: hidden;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
  background: yellow;
}

.mobile-nav>li {
  padding: 0 10px;
  height: 35px;
  line-height: 35px;
}

.mobile-nav>li>a {
  display: block;
  height: 100%;
}

/*------------------------------- 响应式代码 ---------------------------------*/
@media screen and (max-width: 768px) {
  nav {
    width: 100%;
  }

  .pc-nav {
    display: none;
  }

  .menu-icon {
    display: block;
  }
}
</style>
