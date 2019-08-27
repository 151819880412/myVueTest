<template>
    <div class="loginContainerHeader">
      <div class="LoginContainerHeaderLeft">
        <img src="../../../../components/images/home2.png" alt="" class="LoginContainerHeaderLeftHome" @click="backHome">
      </div>
      <div class="LoginContainerHeaderMid">

      </div>
      <div class="LoginContainerHeaderRight">
        <div class="LoginContainerHeaderRight1">
          <img src="../../../../components/images/shop2.png" alt="">
        </div>
        <div class="LoginContainerHeaderRight2">
          <img src="../../../../components/images/shop2.png" alt="">
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      backHome(){
        this.$router.push('/home')
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


    .loginContainerHeader
      background #F2F5F4
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
