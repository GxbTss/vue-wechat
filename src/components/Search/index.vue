<template>
  <div class="search-content">
    <div class="search-title after-solid">
        <label for="search" @click="goBack">取消</label>
        <div class="search-info">
          <span class="weui-icon-search"></span>
          <input type="text" name="search" placeholder="搜索" v-model="search">
          <span class="weui-icon-clear" @click="clearInfo"></span>
        </div>
    </div>
    <div class="search-items">
      <h4>搜索指定内容</h4>
      <div class="search-tag">
        <span>文章</span><span>公众号</span><span>小说</span><span>朋友圈</span><span>音乐</span><span>表情</span>
      </div>
      <div class="search-hot after-solid before-solid">
        <span class="search-hot-info">
          朋友圈热文
        </span>
        <span class="weui-cell__ft"></span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    // 清空搜索框
    clearInfo () {
      this.search = ''
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
    @import "./../../common/styles/index.less";
    .search-content{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: #eee;
      .search-title{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row-reverse;
        padding: 5px 10px;
        width: 100%;
        height: 28px;
        background-color: #efeff4;
        label{
          display: inline-block;
          margin-left: 10px;
          width: 50px;
          font-size: 14px;
          color: #09bb07;
          white-space: nowrap;
        }
        .search-info{
          flex: 1;
          position: relative;
          .weui-icon-search{
            position: absolute;
            top: -1px;
            left: 10px;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
          }
          .weui-icon-clear{
            position: absolute;
            right: 10px;
            top: -1px;
            display: inline-block;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
          }
          input{
            padding: 5px 0 5px 33px;
            box-sizing: border-box;
            border-radius: 3px;
            width: 100%;
          }
        }
      }
      .search-items{
        margin-top: 30px;
        text-align: center;
        padding: 0 30px;
        box-sizing: border-box;
        h4{
          font-size: 13px;
          color: #999;
        }
        .search-tag{
          margin-top: 20px;
          font-size: 14px;
          color: #09bb07;
          display: flex;
          flex-wrap: wrap;
          span{
            flex: 33.33%;
            margin-bottom: 20px;
            border-right: 1px solid hsla(0,0%,86%,.67);
            box-sizing: border-box;
            &:nth-child(3n){
              border: 0;
            }
          }
        }
        .search-hot{
          margin-top: 20px;
          position: relative;
          padding: 16px;
          display: flex;
          color: #999;
          font-size: 13px;
          .search-hot-info{
            flex: 1;
            text-align: left;
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding-left: 30px;
            background: url('./../../common/images/book.png') no-repeat;
            background-size: 20px 20px;
          }
          .weui-cell__ft{
            display: inline-block;
            &::after{
              content: " ";
              display: inline-block;
              margin-right: 20px;
              height: 6px;
              width: 6px;
              border-width: 2px 2px 0 0;
              border-color: #c8c8cd;
              border-style: solid;
              /* transform: matrix(.71,.71,-.71,.71,0,0); */
              transform: rotateZ(45deg);
              position: absolute;
              top: 50%;
              margin-top: -4px;
              right: 2px;
            }
          }
        }
      }
    }

</style>
