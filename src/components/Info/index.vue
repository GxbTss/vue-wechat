<template>
  <div class="info">
    <we-chat-item :list="infoList"></we-chat-item>
    <we-chat-item :list="baseInfoList"></we-chat-item>
    <we-chat-item :list="linkList"></we-chat-item>
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
      infoList: [
        {
          text: '头像',
          avatar: 'src/common/images/header/header02.png',
        },
        {
          text: '名字',
          textValue: 'Async'
        },
        {
          text: '微信号',
          textValue: 'guobo'
        },
        {
          text: '我的二维码',
          img: 'src/common/images/contact_add-friend-my-qr.png'
        },
        {
          text: '我的地址',
          textValue: '未设置'
        }
      ],
      baseInfoList: [
        {
          text: '性别',
          textValue: '男'
        },
        {
          text: '地区',
          textValue: '浙江杭州'
        },
        {
          text: '个性签名',
          textValue: '未设置'
        }
      ],
      linkList: [
        {
          text: 'LinkedIn帐号',
          textValue: '未设置'
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
