<template>
  <div class="loginContainer">
<!--    登陆头-->
    <div class="loginContainerHeader">
      <div class="LoginContainerHeaderLeft">
        <img src="../../../components/images/home2.png" alt="" class="LoginContainerHeaderLeftHome">
      </div>
      <div class="LoginContainerHeaderMid">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
             alt="" class="LoginContainerHeaderMidTxt">
      </div>
      <div class="LoginContainerHeaderRight">
        <div class="LoginContainerHeaderRight1">
          <img src="../../../components/images/shop2.png" alt="">
        </div>
        <div class="LoginContainerHeaderRight2">
          <img src="../../../components/images/shop2.png" alt="">
        </div>
      </div>
    </div>


<!--    手机登陆-->
<Login0 ref="qqq" v-if="this.isDenglu===0"/>
<Login1 v-if="this.isDenglu===1"/>
<Login2 v-if="this.isDenglu===2"/>

  </div>
</template>

<script type="text/ecmascript-6">
  import Login0 from  './Login0/Login0'
  import Login1 from  './Login1/Login1'
  import Login2 from  './Login2/Login2'
  export default {
    data(){
      return{
        isDenglu:0
      }
    },
    methods:{
      toShoujiDenglu(){
        this.isDenglu= 1
      },
      toYouxiangDenglu(){
        this.isDenglu= 2
      },
    },
    mounted(){
      this.$refs.qqq.$on('qq',this.toShoujiDenglu)
    },
    components:{
      Login0,
      Login1,
      Login2,
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginContainer
    width 100%
    height 100%
    background #F2F5F4
    .loginContainerHeader
      background white
      box-sizing border-box
      height 87px
      width 100%
      padding  0 16px 0 24px
      .LoginContainerHeaderLeft
        display inline-block
        width 54px
        height 50px
        .LoginContainerHeaderLeftHome
          display inline-block
          width 54px
          height 50px
          margin-top 20px
      .LoginContainerHeaderMid
        display inline-block
        width 172px
        height 54px
        margin 0 0 0 220px
      .LoginContainerHeaderRight
        display inline-block
        float right
        width 148px
        height 64px
        margin 10px 0 0 0
        .LoginContainerHeaderRight1
          float left
          width 64px
          height 64px
        .LoginContainerHeaderRight2
          float right
          width 64px
          height 64px



</style>
