<template>
  <div class="component-text-scroll">
    <transition-group tag="ul" :name="scrollType">
      <li
        v-for="(item, index) in datalist"
        :key="index"
        v-show="index === count"
      >
        <p>{{item.text}}</p>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'TextScroll',
  props: {
    datalist: {
      type: Array,
      default: []
    },
    scrollType: {
      type: String,
      default: 'scroll-up'
    }
  },
  data () {
    return {
      count: 0, // 当前索引
      intervalId: null, // 定时器ID
      playTime: 2000  // 定时器执行间隔
    }
  },
  methods: {
    getText () {
      // 获得当前数组长度
      let dataLength = this.datalist.length
      // 当数组为空时，直接返回
      if (dataLength === 0) {
        return
      }

      if (this.count === dataLength - 1) {
        this.count = 0
      } else {
        this.count ++
      }
    }
  },
  created () {
    switch (this.scrollType) {
      case 'scroll-up':
        this.playTime = 2000
        break
      case 'scroll-up-linear':
        this.playTime = 1000
        break
      case 'scroll-left':
        this.playTime = 2000
        break
      case 'scroll-left-linear':
        this.playTime = 4000
        break
      default:
        this.playTime = 2000
        break
    }
    this.intervalId = setInterval(() => {
      this.getText()
    }, this.playTime);
  },
  destroyed () {
    clearInterval(this.intervalId)
  }
}
</script>

<style lang="less" scoped>
@import '../../common/styles/mixins.less';
  .component-text-scroll{
    background-color: #eee;
    width: 100%;
    ul{
      position: relative;
      width: 100%;
      .px2rem(height, 30);
      .px2rem(line-height, 30);
      overflow: hidden;
      li{
        position: absolute;
        width: 100%;
        overflow: hidden;
        p{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    // 向左滚动
    .scroll-left-enter-active,
    .scroll-left-leave-active{
      transition: all 2s ease;
    }
    .scroll-left-enter{
      transform: translate3d(100%, 0, 0);
    }
    .scroll-left-leave-to{
      transform: translate3d(-100%, 0, 0);
    }
    // 向左匀速滚动
    .scroll-left-linear-enter-active,
    .scroll-left-linear-leave-active{
      transition: all 4s linear;
    }
    .scroll-left-linear-enter{
      transform: translate3d(100%, 0, 0);
    }
    .scroll-left-linear-leave-to{
      transform: translate3d(-100%, 0, 0);
    }
    // 向上滚动
    .scroll-up-enter-active,
    .scroll-up-leave-active{
      transition: all .5s ease;
    }
    .scroll-up-enter{
      transform: translate3d(0, 100%, 0);
    }
    .scroll-up-leave-to{
      transform: translate3d(0, -100%, 0);
    }
    // 向上匀速滚动
    .scroll-up-linear-enter-active,
    .scroll-up-linear-leave-active{
      transition: all 1s linear;
    }
    .scroll-up-linear-enter{
      transform: translate3d(0, 100%, 0);
    }
    .scroll-up-linear-leave-to{
      transform: translate3d(0, -100%, 0);
    }
  }
</style>
