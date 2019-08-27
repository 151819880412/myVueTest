<template>
  <div class="loginContainer">
<!--    登陆头-->
    <LoginHeader/>
            <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
             alt="" class="LoginContainerHeaderMidTxt">


<!--    手机登陆-->
<Login0 ref="qqq"  v-if="this.$store.state.isDenglu===0"/>
<Login1 v-if="this.$store.state.isDenglu===1"/>
<Login2 v-if="this.$store.state.isDenglu===2"/>

  </div>
</template>

<script type="text/ecmascript-6">
  import Login0 from  './Login0/Login0'
  import Login1 from  './Login1/Login1'
  import Login2 from  './Login2/Login2'
  import LoginHeader from  './LoginHeader/LoginHeader'

  export default {
    data(){
      return{
        isDenglu:0
      }
    },


    //自定义事件

    // methods:{
    //   // toShoujiDenglu(){
    //   //   // this.isDenglu= 1
    //   //   console.log(212)
    //   //   this.$store.dispatch('shoujidenglu')

    //   // },
    //   // toYouxiangDenglu(){
    //   //   // this.isDenglu= 2
    //   // },
    // },
    // mounted(){
    //   // this.$refs.qqq.$on('qq',this.toShoujiDenglu)
    // },



    components:{
      Login0,
      Login1,
      Login2,
      LoginHeader
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginContainer
    width 100%
    height 100%
    position relative
    .LoginContainerHeaderMidTxt
      width 172px
      height  54px
      position absolute
      top 10px
      left 270px

</style>
