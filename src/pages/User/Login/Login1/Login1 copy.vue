<template>
  <div class="Login1Container">
    <div class="Login1ContainerHeader">
      <div class="Login1ContainerHeaderDiv">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="" class="Login1ContainerHeaderImg">
      </div>
    </div>
    <div class="Login1ContainerWarp">
      <div class="Login1ContainerWarpWarp">
        <form >
          <div class="LoginDenglufangshiDiv">
            <input class="LoginDenglufangshi" placeholder="请输入手机号" v-model="shoujihao"
              type="tel" maxlength="11" name="phone" v-validate="required|mobile"
            >
            <span>{{shoujihao}}</span>
          </div>
          <div class="LoginDengluMimaDiv">
            <input class="LoginDengluMima"  placeholder="请输入验证码">
            <a href="javascript:" class="LoginDengluMimaBtn">获取验证码</a>
          </div>
          <div class="LoginDengluWentiDiv">
            <input class="LoginDengluWenti"  placeholder="请输入短信验证码">
            <a href="javascript:" class="LoginDengluWentiBtn">使用验证码登陆</a>
          </div>
          <button class="LoginDengluBtn">
            登陆
          </button>
        </form>

        <div class="LoginDengluTongyi">
          <span class="LoginDengluTongyiSpan1"></span>
          <span class="LoginDengluTongyiSpan2"> 我同意《服务条款》和《网易隐私政策》</span>
        </div>
      </div>

    </div>
    <div class="Login1ContainerFooter" @click="backLogin">
      其他登录方式>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        shoujihao:''
      }
    },
    methods:{
      backLogin(){
        this.$store.dispatch('fanhuishouye')
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.Login1Container
  box-sizing border-box
  margin-top 56px
  height:866px
  width 100%
  .Login1ContainerHeader
    width 100%
    height 64px
    .Login1ContainerHeaderDiv
      display flex
      justify-content center
      .Login1ContainerHeaderImg
        width 192px
        height 64px
  .Login1ContainerWarp
    width 100%
    height 622px
    margin-top 40px
    .Login1ContainerWarpWarp
      display flex
      flex-direction column
      width 672px
      padding 0 40px
      .LoginDenglufangshiDiv
        width: 672px;
        height: 92px;
        .LoginDenglufangshi
          font-size 30px
          width 672px
          height 92px
          border-bottom 1px solid #333
      .LoginDengluMimaDiv
        position relative
        width: 672px;
        height: 92px;
        margin-top 40px
        .LoginDengluMima
          font-size 30px
          width 672px
          height 92px
          border-bottom 1px solid #333
        .LoginDengluMimaBtn
          width 164px
          height 54px
          border 1px solid #333
          position absolute
          top: 20px
          right: 0
          font-size 30px
          text-align center
          line-height 54px
      .LoginDengluWentiDiv
        position relative
        width: 672px;
        height: 92px;
        margin-top 40px
        .LoginDengluWenti
          font-size 30px
          width 672px
          height 92px
          border-bottom 1px solid #333
        .LoginDengluWentiBtn
          height 54px
          position absolute
          top: 20px
          right: -200px
          font-size 30px
          text-align center
          line-height 54px
      .LoginDengluBtn
        width 672px
        height 92px
        margin-top 40px
        font-size 30px
        text-align center
        line-height 92px
        border-radius: 3px;
        background: #DD1A21;
      .LoginDengluTongyi
        .LoginDengluTongyiSpan1
          display inline-block
          width 36px
          height 36px
          background: url("//yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png")
          //background:  url("//yanxuan.nosdn.127.net/8019540df709c25d3a056630b327195f.png")
          background-size: 100%;
          background-repeat: no-repeat
        .LoginDengluTongyiSpan2
          font-size 30px
  .Login1ContainerFooter
    height 39px
    font-size 30px
    text-align center
    line-height:39px
</style>
