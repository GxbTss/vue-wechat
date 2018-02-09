<template>
  <transition name='component-modal'>
    <div class="modal" v-show="show">
      <div class="modal-mask" @click="closeOnMask"></div>
      <div class="modal-container" :style="{width:width+'px'}">
        <i class="modal-close iconfont icon-close" @click="emitClose"></i>
        <div class="modal-header">
          <span>{{title}}</span>
        </div>
        <p class="modal-tip" v-if="tip">{{tip}}</p>
        <div class="modal-main">
          <slot></slot>
        </div>
        <footer class="modal-buttons">
          <span v-if="cancleText" class="modal-button cancle" @click="emitClose">{{ cancleText }}</span>
          <span v-if='confirmText' class="modal-button confirm" @click="emitConfirm">{{ confirmText }}</span>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: true
    },
    confirmText:{
      type: String,
      default: '确定'
    },
    cancleText:{
      type: String,
      default: '取消'
    },
    tip:{
      type: String,
      default:''
    },
    width:{
        type: Number,
        default:580
    },
    maskClose:{
      type: Boolean,
      default:true
    },
    title:{
      type: String,
      default:''
    }
  },
  methods: {
    emitClose () {
      this.$emit('close')
    },
    emitConfirm () {
      this.$emit('confirm')
    },
    closeOnMask () {
      if (this.maskClose) {
        this.emitClose()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .component-modal-enter, .component-modal-leave-active{
    opacity: 0;
  }
  .component-modal-enter .modal-container, .component-modal-leave-active .modal-container{
    transform: translate3d(-50%,-50%,0) scale(.95);
  }
  .modal{
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    transition: all 200ms ease;
    background-color: rgba(0, 0, 0, 0.5);
    &-container{
      border-radius:2px;
      position:absolute;
      z-index:2;
      top:50%;
      left:50%;
      width: 90%;
      max-height:90%;
      box-sizing:border-box;
      overflow:auto;
      -webkit-overflow-scrolling:touch;
      transform:translate3d(-50%,-50%,0);
      transition: transform 250ms ease;
      background-color: #fff;
    }
    &-tip{
      padding-top: 16px;
    }
    &-close{
      cursor: pointer;
      position: absolute;
      right: 8px;
      top: 8px;
      font-size: 30px;
      width: 30px;
      height: 30px;
      color: #999;
      transition:color ease .3s;
      &:hover{
          color:#000;
      }
    }
    &-header{
      margin: 0;
      color: rgba(0, 0, 0, 0.870588);
      font-size: 20px;
      line-height: 32px;
      font-weight: 400;
      border-bottom: none;
      padding:24px 24px 20px 24px;
    }
    &-main{
      padding:0 24px 20px 24px;
    }
    &-mask{
      width: 100%;
      height:100%;
    }
    &-buttons{
      display: flex;
      text-align: center;
      justify-content: flex-end;
      padding: 8px;
    }
    &-button{
      border-radius:3px;
      cursor:pointer;
      transition:ease .3s all;
      font-size: 15px;
      display: block;
      color:#00B1B3;
      padding: 10px 20px;
      &:hover{
        background-color: #eee;
      }
    }
  }
</style>
