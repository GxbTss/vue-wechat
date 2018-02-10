<template>
  <div id="app">
      <div class="app-box">
        <header-box></header-box>
        <div class="search" v-show="searchShow">
            <div class="search-box" @click="search">
              <i class="weui-icon-search"></i>
              <span>搜索</span>
            </div>

        </div>
        <footer-box></footer-box>
        <transition name="fade-in">
            <router-view></router-view>
        </transition>
      </div>
  </div>
</template>

<script>
import FooterBox from './components/Footer'
import HeaderBox from './components/Header'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    FooterBox,
    HeaderBox,
    Search
  },
  data () {
    return {
    }
  },
  computed: {
    searchShow () {
      if (this.$route.name === 'wechat' || this.$route.name === 'contact') {
        return true
      }
    }
  },
  methods: {
    search () {
      this.$router.push({
        name: 'search'
      })
    }
  }
}
</script>

<style lang="less">
    @import "./common/styles/index.less";
    #app{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        .fade-in-enter-active, .fade-in-leave-active {
            transition: opacity .3s ease-in;
        }
        .fade-in-enter, .fade-in-leave-to {
            opacity: 0
        }
        &-box{
          position: absolute;
          left: 0;
          top: 0;
        }
        .search{
          padding: 8px 10px;
          background-color: #efeff4;
          &-box{
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            color: #b2b2b2;
            background-color: #fff;
            border-radius: 3px;
            text-align: center;
          }
        }
    }
</style>
