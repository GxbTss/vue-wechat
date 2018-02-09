<template>
  <div class="footer">
    <ul class="footer-items">
      <router-link :to="{ name: 'wechat', params: {} }" tag="li">
        <span class="iconfont icon-wechat"></span>
        <span>微信</span>
      </router-link>
      <router-link :to="{ name: 'contact'}" tag="li">
        <span class="iconfont icon-contact"></span>
        <span>通讯录</span>
      </router-link>
      <router-link :to="{ name: 'find', params: {} }" tag="li">
        <span class="iconfont icon-find"></span>
        <span>发现</span>
      </router-link>
      <router-link :to="{ name: 'me', params: {} }" tag="li">
        <span class="iconfont icon-me"></span>
        <span>我</span>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .footer{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 0;
      background-color: #f9f9f9;
      &::before{
        content: '';
        display: block;
        transform: scaleY(0.5);
        width: 100%;
        height: 1px;
        background-color: #b7b7b7;
      }
      &-items{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #929292;
          flex: 1;
          span{
            &:first-child{
              margin-bottom: 5px;
              width: 28px;
              height: 28px;
              font-size: 28px;
            }
          }
        }
        .router-link-active{
          color: #0bb908;
        }
      }
    }
</style>
