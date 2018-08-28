<template>
  <header>
    <nav class="clearfix">
      <!-- logo -->
      <div class="logo">
        <img src="../../assets/image/logo.png" alt="logo">
      </div>
      <!-- logo/ -->
      <!-- PC端 -->
      <ul class="pc-nav">
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/about/1" class="drop-down">关于</router-link>
          <ul class="drop-down-menu">
            <li>
              <router-link to="/about/1">公司简介</router-link>
            </li>
            <li>
              <router-link to="/about/2">古筝文化</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/product">产品</router-link>
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
            <router-link to="/">首页</router-link>
          </li>
          <li ref="menu-1">
            <router-link to="/about/1">关于&nbsp;<span class="iconfont" @click.stop="switchChildMenu" data-id="menu-1">&#xe607;</span></router-link>
            <ul class="mobile-child-nav" v-show="showChildMenu">
              <li>
                <router-link to="/about/1">公司简介</router-link>
              </li>
              <li>
                <router-link to="/about/2">古筝文化</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/product">产品</router-link>
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
      openMenu: false, // 控制菜单图标的状态
      showMobileMenu: false, // 是否展示一级菜单
      showChildMenu: false, // 是否展示二级菜单
      mobileNavHeight: '0px' // 一级菜单动画开始时的初始高度
    }
  },

  mounted () {
    this.initMobileNavHeight()
  },

  methods: {
    // 切换一级菜单状态
    switchMenu () {
      if (this.openMenu) { // 关闭一级菜单
        this.openMenu = false
        this.showMobileMenu = false
      } else { // 打开一级菜单
        this.openMenu = true
        this.showMobileMenu = true
      }
    },

    // 初始化mobileNavHeight
    initMobileNavHeight () {
      let lis = this.$refs.mobileNav
      this.mobileNavHeight = this.getMenuHeight(lis) + 'px'
    },

    // 打开或关闭一级菜单动画
    beforeEnter (el) {
      el.style.height = '0px'
    },
    enter (el) {
      Velocity(el, { height: this.mobileNavHeight }, { duration: 300 })
    },
    beforeLeave (el) {
      el.style.height = this.mobileNavHeight
    },
    leave (el, done) {
      Velocity(el, { height: '0px' }, { duration: 300, complete: done })
    },

    // 切换子菜单的状态
    switchChildMenu (e) {
      let id = e.currentTarget.getAttribute('data-id')
      let li = this.$refs[id]
      let ul = li.lastChild
      let height = this.getMenuHeight(ul)
      if (this.showChildMenu) {
        li.style.height = '35px'
        this.showChildMenu = false
      } else {
        li.style.height = height + 35 + 'px'
        this.showChildMenu = true
      }
      // 重新计算一级菜单的高度
      this.initMobileNavHeight()
      this.$refs.mobileNav.style.height = this.mobileNavHeight
    },

    // 获取菜单高度
    getMenuHeight (el) {
      let height = 0
      el.childNodes.forEach(element => {
        if (element.nodeType === 1) {
          height += parseInt(window.getComputedStyle(element).height)
        }
      })
      return height
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
/*--------------------------------- logo -----------------------------------*/
.logo {
  float: left;
  height: 60px;
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
  top: 68px;
  z-index: 10;
  display: none;
  width: 180%;
  padding: 10px 0;
  border: 1px solid #cccccc;
  background: #ffffff;
}

.drop-down-menu::after {
  position: absolute;
  top: -9px;
  right: 10%;
  content: '';
  border-bottom: 8px solid #cccccc;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.drop-down-menu::before {
  position: absolute;
  top: -8px;
  right: 10%;
  content: '';
  z-index: 10;
  border-bottom: 8px solid #ffffff;
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
  background: #ffffff;
}

.mobile-nav>li {
  padding: 0 10px;
  height: 35px;
  line-height: 35px;
}

.mobile-nav>li>a {
  display: block;
  height: 35px;
  line-height: 35px;
}

.mobile-child-nav {
  margin-left: 20px;
}

.mobile-child-nav>li {
  height: 35px;
  line-height: 35px;
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
