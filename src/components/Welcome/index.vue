<template>
  <div class="welcome" :class="{hide: hide}">
    <img src="./../../common/images/launchimage.png" alt="">
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  data () {
    return {
      hide: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.hide = true
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .welcome{
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      transition: .3s;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .hide{
      opacity: 0;
      z-index: -10;
      visibility: hidden;
    }
</style>
