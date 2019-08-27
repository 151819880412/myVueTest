<template>
  <div class="userContainer">
    <div class="toLogin">
      <router-view>

      </router-view>
      <router-link  to="/user/login" replace>点餐</router-link>
      user
    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import  Login from './Login/Login'
  import Footer from '../../components/Footer/Footer'
  export default {
    mounted(){
        // console.log(localStorage)
        if(localStorage.token_key===''){
           //跳转到搜索
        this.$router.replace('/user/login')
        }
    },
    components:{
      Login,
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.userContainer
  font-size 36px
  height 500px
  width 500px
  background pnik
  .toLogin
    height 100px
    width 100px
    background yellow

</style>
