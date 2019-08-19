<template>
  <div class="footerContainer">
    <Footer class="footer">
        <i href="javascript:" class="footerLis" @click="home">
          <img v-if="ishome" src="../images/home1.png" class="footerList"></img>
          <img v-else-if="!ishome" src="../images/home2.png" class="footerList"></img>
          <span class="home">首页</span>
        </i>

        <i href="javascript:" class="footerLis" @click="classify">
          <img v-if="isClassify" src="../images/fenlei1.png" class="footerList"></img>
          <img v-else-if="!isClassify" src="../images/fenlei2.png" class="footerList"></img>
          <span class="home">分类</span>
        </i>

        <i href="javascript:" class="footerLis" @click="discern">
          <img v-if="isDiscern" src="../images/shiwu1.png" class="footerList"></img>
          <img v-else-if="!isDiscern" src="../images/shiwu2.png" class="footerList"></img>
          <span class="home">识物</span>
        </i>

        <i href="javascript:" class="footerLis" @click="shopping">
          <img v-if="isShopping" src="../images/shop1.png" class="footerList"></img>
          <img v-else-if="!isShopping" src="../images/shop2.png" class="footerList"></img>
          <span class="home">购物车</span>
        </i>

        <i href="javascript:" class="footerLis" @click="user">
          <img v-if="isUser" src="../images/user1.png" class="footerList"></img>
          <img v-else-if="!isUser" src="../images/user2.png" class="footerList"></img>
          <span class="home">个人</span>
        </i>
    </Footer>
  </div>
</template>

<script type="text/ecmascript-6">
// import 'normalize.css/normalize.css'
  export default {
    data () {
      return {
        ishome: true,
        isClassify:false,
        isDiscern:false,
        isShopping:false,
        isUser:false
      }
    },

    methods:{
      home(){
        if(!this.ishome){
        this.ishome=true
        this.isClassify=false
        this.isDiscern=false
        this.isShopping=false
        this.isUser=false
        }
        //跳转到首页
        console.log(this.$route)
        this.$router.push('/home')
        console.log(this.$route.path)
      },
       classify(){
        if(this.isClassify ===false){
          this.isClassify=true
          this.ishome=false
          this.isDiscern=false
          this.isShopping=false
          this.isUser=false
        }
        //跳转到分类
        this.$router.replace('/classify')
        let a =this.$route.path
         console.log(a.slice(1))  //截取字符串
      },
       discern(){
         if(this.isDiscern===false){
          this.isClassify=false
          this.ishome=false
          this.isDiscern=true
          this.isShopping=false
          this.isUser=false
        }
        //跳转到识物
        this.$router.replace('/discern')
      },
       shopping(){
          if(this.isShopping===false){
          this.isClassify=false
          this.ishome=false
          this.isDiscern=false
          this.isShopping=true
          this.isUser=false
        }
        //跳转到购物车
        this.$router.replace('/shopping')
      },
       user(){
          if(this.isUser===false){
          this.isClassify=false
          this.ishome=false
          this.isDiscern=false
          this.isShopping=false
          this.isUser=true
        }
        //跳转到个人中心
        this.$router.replace('/user')
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    .footerContainer
    position relative
      .footer
        display flex
        position absolute
        bottom 0
        left 0
        width 100%
        height 6rem
        background-color white
        border-top 1px solid #ccc
        .footerLis
          display block
          width 3rem
          height 4.5rem
          margin 1rem 3rem
          flex-direction column
          .footerList
            width 2.5rem
            height 2.5rem
            margin-bottom 5px
          .home
            white-space:nowrap;
            width 3rem
            height 1.5rem
            display: block;
            margin-top: .09333rem;
            font-size: 1.5rem;
            color: #666;
            line-height: 1.2rem





</style>
