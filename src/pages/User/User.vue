<template>
  <div class="userContainer">
    <div class="toLogin">
      <router-view>

      </router-view>
      <router-link  to="/user/login" replace>点餐</router-link>
      user
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import  Login from './Login/Login'
  export default {

    components:{
      Login
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
