<template>
  <div class="wechat">
    <ul class="infoList">
      <li v-for="(item, index) in infoList" :key="index" class="info-item after-solid">
        <span v-if="item.type === 'friend'" class="info-img">
          <img :src="item.msg[0].headerUrl" alt="">
        </span>
        <ul class="item-content">
          <li>{{item.msg[item.msg.length - 1].name}}</li>
          <li>{{item.msg[item.msg.length - 1].text}}</li>
        </ul>
        <ul class="item-time">
          <li>{{item.msg[item.msg.length - 1].date | fmtDate('hh:ss')}}</li>
          <li class="item-icon-mute" v-if="item.quiet">
            <span class="iconfont icon-mute"></span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { baseMessage } from '../../data/baseMessage'

export default {
  name: '',
  components: {
  },
  data () {
    return {
      infoList: baseMessage.baseMsg
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .infoList{
      display: flex;
      flex-direction: column;
      background-color: #fff;
      width: 100%;
      .info-item{
        position: relative;
        display: flex;
        padding: 10px 10px 10px 0;
        margin-left: 10px;
        box-sizing: border-box;
        .info-img{
          width: 48px;
          height: 48px;
          img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        .item-content{
          flex: 1;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 16px;
          li{
            &:last-child{
              margin-top: 10px;
              font-size: 13px;
              color: #888;
            }
          }
        }
        .item-time{
          width: 50px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #999;
          .item-icon-mute{
            margin-top: 10px;
          }
        }
      }
      img{
        width: 30px;
      }
    }
</style>
