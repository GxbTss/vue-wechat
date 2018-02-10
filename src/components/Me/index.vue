<template>
  <div class="me">
    <we-chat-item :list="titleList" :autoSize='true' :size='60'></we-chat-item>
    <we-chat-item :list="moreList"></we-chat-item>
    <we-chat-item :list="faceList"></we-chat-item>
    <we-chat-item :list="setList"></we-chat-item>
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
      titleList: [
        {
          icon: 'src/common/images/header/header02.png',
          name: 'info',
          info: {
            name: 'Async',
            wxNo: 'guobo'
          },
          img: 'src/common/images/chat-info-qr.png'
        }
      ],
      moreList: [
        {
          icon: 'src/common/images/me_more-my-album.png',
          text: '相册',
          img: ''
        },
        {
          icon: 'src/common/images/me_more-my-favorites.png',
          text: '收藏',
          img: ''
        },
        {
          icon: 'src/common/images/me_more-my-bank-card.png',
          text: '钱包',
          img: ''
        },
        {
          icon: 'src/common/images/me_my-card-package-icon.png',
          text: '卡券',
          img: ''
        }
      ],
      faceList: [
        {
          icon: 'src/common/images/me_more-expression.png',
          text: '表情',
          img: ''
        }
      ],
      setList: [
        {
          icon: 'src/common/images/me_more-setting.png',
          text: '设置',
          img: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";

</style>
