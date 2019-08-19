<template>
<!--    登陆主页-->
    <div class="qiehuanDenglu" >
      <div class="LoginMid">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" class="LoginMidImg">
      </div>
      <div class="LoginDengluDiv">
        <div class="LoginDengluShouji" @click="toShoujiDenglu">
          <img src="../../../../components/images/home2.png" alt="" class="LoginDengluShoujiImg">
          <span class="LoginDengluShoujiTxt">手机号快捷登录</span>
        </div>
        <div class="LoginDengluYouxiang" @click="toYouxiangDenglu">
          <img src="../../../../components/images/home2.png" alt="" class="LoginDengluYouxiangImg">
          <span class="LoginDengluYouxiangTxt">邮箱账号登录</span>
        </div>
      </div>
      <!--    <div class="footer"></div>-->
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 自定义事件
    //     data(){
    //   return{
    //     isDenglu:0
    //   }
    // },
    methods:{
      toShoujiDenglu(){
        // this.isDenglu= 1
        // this.$emit('qq')
        console.log(111)
        this.$store.dispatch('shoujidenglu')
      },
      toYouxiangDenglu(){
        // this.isDenglu= 2
        console.log(222)
      }
    },





    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

    .LoginMid
      display block
      width 750px
      height 482px
      position relative
      .LoginMidImg
        display: block
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        width 268px
        height 90px
        margin:auto;

    .LoginDengluDiv
      width 670px
      height 202px
      padding 0 40px 203px 40px
      .LoginDengluShouji
        width 670px
        height 92px
        background #DD1A21
        border 1px solid #DD1A21
        margin-bottom 32px
        position relative
        .LoginDengluShoujiImg
          display inline-block
          width 40px
          height 40px
          padding-right 170px
          position absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          margin auto
        .LoginDengluShoujiTxt
          width 200px
          height 32px
          display inline-block
          position absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          margin auto
          font-size 28px
          padding-left 100px
          color white
      .LoginDengluYouxiang
        width 670px
        height 84px
        background-color: transparent;
        border 1px solid #DD1A21
        margin-bottom  32px
        position relative
        .LoginDengluYouxiangImg
          display inline-block
          width 40px
          height 40px
          padding-right 170px
          position absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          margin auto
        .LoginDengluYouxiangTxt
          width 200px
          height 32px
          display inline-block
          position absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          margin auto
          font-size 28px
          padding-left 100px
          color #DD1A21

</style>
