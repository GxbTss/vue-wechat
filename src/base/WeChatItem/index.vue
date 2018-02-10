<template>
  <div class="wechat-item before-solid after-solid">
    <ul class="wechat-lists">
      <router-link :to="{ name: item.name}" v-for="(item, index) in list" :key="index" tag="li">
        <img :src="item.icon" alt="" class="item-img" :style="sizeObj" v-if="item.icon">
        <span class="item-text" v-if="item.text">{{item.text}}</span>
        <span class="item-text item-info" v-if="item.info">
          <span>{{item.info.name}}</span>
          <span>微信号：{{item.info.wxNo}}</span>
        </span>
        <span class="item-log" v-if="item.img">
          <img :src="item.img" alt="">
        </span>
        <span class="item-value" v-else>
          {{item.textValue}}
        </span>
        <span class="item-avatar" v-if="item.avatar">
          <img :src="item.avatar" alt="">
        </span>
      </router-link>
      <!-- <li v-for="(item, index) in list" :key="index">
        <img :src="item.icon" alt="" class="item-img" ref="iconImg" :style="sizeObj">
        <span class="item-text" v-if="item.text">{{item.text}}</span>
        <span class="item-text item-info" v-else>
          <span>{{item.info.name}}</span>
          <span>微信号：{{item.info.wxNo}}</span>
        </span>
        <span class="item-log" v-if="item.img">
          <img :src="item.img" alt="">
        </span>
      </li> -->
    </ul>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  props: {
    list: {
      type: Array
    },
    size: {
      type: Number,
      default: 20
    },
    autoSize: {
      type: Boolean,
      default:false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    sizeObj () {
      if (this.autoSize) {
        return {
            width: this.size + 'px',
            height: this.size + 'px'
        }
}
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .wechat-item{
      position: relative;
      margin-top: 18px;
      width: 100%;
      background-color: #fff;
      .wechat-lists{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        li{
          display: flex;
          align-items: center;
          width: 100%;
          margin-left: 20px;
          padding: 10px 15px 10px 5px;
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          &:last-child{
            border: 0;
          }
          .item-img{
            width: 20px;
            height: 20px;
            margin-right: 20px;
            border-radius: 5px;
          }
          .item-text{
            flex: 1;
            font-size: 16px;
            color: #333;
            /* padding-left: 20px; */
            line-height: 28px;
          }
          .item-info{
            display: flex;
            flex-direction: column;
            span{
              &:first-child{

              }
              &:last-child{
                font-size: 13px;
              }
            }
          }
          .item-log{
            position: relative;
            margin-right: 10px;
            width: 39px;
            height: 25px;
            img{
              width: 25px;
              height: 25px;
            }
            &::after{
              content: '';
              display: inline-block;
              width: 6px;
              height: 6px;
              position: absolute;
              top: 10px;
              right: 0;
              border-width: 2px 2px 0 0;
              border-color: #c8c8cd;
              border-style: solid;
              transform: rotateZ(45deg);
            }
          }
          .item-value{
            margin-right: 16px;
            font-size: 14px;
            color: #999;
          }
          .item-avatar{
            margin-right: 16px;
            width: 60px;
            height: 60px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 5px;
            }
          }
        }
      }
    }
</style>
