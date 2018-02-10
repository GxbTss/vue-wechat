<template>
  <div class="contact">
    <we-chat-item :list="contactList" :autoSize="true" :size="33"></we-chat-item>
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
      contactList: [
        {
          icon: 'src/common/images/contact_top-friend-notify.png',
          text: '新朋友',
          img: ''
        },
        {
          icon: 'src/common/images/contact_top-addgroup.png',
          text: '群聊',
          img: ''
        },
        {
          icon: 'src/common/images/contact_top-tag.png',
          text: '标签',
          img: ''
        },
        {
          icon: 'src/common/images/contact_top-offical.png',
          text: '公众号',
          img: ''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .contact{
      margin-top: -20px;
    }

</style>
