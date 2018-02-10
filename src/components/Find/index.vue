<template>
  <div class="find">
    <we-chat-item :list="circleList"></we-chat-item>
    <we-chat-item :list="shakeList"></we-chat-item>
    <we-chat-item :list="shopList"></we-chat-item>
  </div>
</template>

<script>
import WeChatItem from '../../base/WeChatItem'
export default {
  name: '',
  components: {
    WeChatItem
  },
  data () {
    return {
      circleList: [
        {
          icon: 'src/common/images/find_icon-circle.png',
          text: '朋友圈',
          img: 'src/common/images/header/header02.png'
        }
      ],
      shakeList: [
        {
          icon: 'src/common/images/find_icon-qrcode.png',
          text: '扫一扫',
          img: ''
        },
        {
          icon: 'src/common/images/find_icon-shake.png',
          text: '摇一摇',
          img: ''
        }
      ],
      shopList: [
        {
          icon: 'src/common/images/find_icon-shopping.png',
          text: '购物',
          img: ''
        },
        {
          icon: 'src/common/images/find_icon-moregame.png',
          text: '游戏',
          img: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .find{
    }

</style>
