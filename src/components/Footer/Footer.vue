<template>
  <div class="footerContainer"  ref="qqq" >
    <Footer class="footer">
        <i href="javascript:" class="footerLis" @click="home">
          <img v-if="this.router=='home'" src="../images/home1.png" class="footerList"></img>
          <img v-else src="../images/home2.png" class="footerList"></img>
          <span class="home">首页</span>
        </i>

        <i href="javascript:" class="footerLis" @click="classify">
          <img v-if="this.router=='classify'" src="../images/fenlei1.png" class="footerList"></img>
          <img v-else src="../images/fenlei2.png" class="footerList"></img>
          <span class="home">分类</span>
        </i>

        <i href="javascript:" class="footerLis" @click="discern">
           <img v-if="this.router=='discern'" src="../images/shiwu1.png" class="footerList"></img>
          <img v-else src="../images/shiwu2.png" class="footerList"></img>
          <span class="home">识物</span>
        </i>

        <i href="javascript:" class="footerLis" @click="shopping">
          <img v-if="this.router=='shopping'" src="../images/shop1.png" class="footerList"></img>
          <img v-else src="../images/shop2.png" class="footerList"></img>
          <span class="home">购物车</span>
        </i>

        <i href="javascript:" class="footerLis" @click="user">
          <img v-if="this.router=='user'" src="../images/user1.png" class="footerList"></img>
          <img v-else src="../images/user2.png" class="footerList"></img>
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
        router:'home',
      }
    },
    mounted(){
      this.router=this.$route.path.split('/')[1]
    },
    watch:{
      router(){
        if (this.router==='user'){
          this.$refs.qqq.style.display="none"
        }else{
          this.$refs.qqq.style.display="block"
        }
        this.router=this.$route.path.split('/')[1]
    }
    },
    methods:{
      home(){

        //跳转到首页
        this.$router.push('/home')
        this.router=this.$route.path.split('/')[1]

      },
       classify(){

        //跳转到分类
        this.$router.replace('/classify')
        this.router=this.$route.path.split('/')[1]
        let a =this.$route.path
      },
       discern(){

        //跳转到识物
        this.$router.replace('/discern')
        this.router=this.$route.path.split('/')[1]

       },
       shopping(){

        //跳转到购物车
        this.$router.replace('/shopping')
        this.router=this.$route.path.split('/')[1]

       },
       user(){

        //跳转到个人中心
        this.$router.replace('/user')
        this.router=this.$route.path.split('/')[1]
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
