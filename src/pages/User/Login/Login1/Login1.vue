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
            <input type="tel" maxlength="11" placeholder="手机号" 
                name="phone" v-model="phone" v-validate="'required|mobile'" class="LoginDenglufangshi">
            <span style="color:red; font-size:30px" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
          </div>
          <div class="LoginDengluMimaDiv">
            <input class="LoginDengluMima"  placeholder="请输入验证码"
            name="code" v-model="code" v-validate="'required'"
            >
            <span style="color:red; font-size:30px">{{ errors.first('code') }}</span>
            <!-- <a href="javascript:" class="LoginDengluMimaBtn" @click="yanzhengma">获取验证码</a> -->

              <button :disabled="!isRightPhone || computeTime>0"class="LoginDengluMimaBtn"
                :class="{right_phone_number: isRightPhone}" @click.prevent="yanzhengma">
                {{computeTime>0 ? `已发送验证码(${computeTime}s)` : '获取验证码'}}
              </button>

          </div>
          <div class="LoginDengluWentiDiv">
            <input class="LoginDengluWenti"  placeholder="遇到问题" 
            >
            <a style="color:black" href="javascript:" class="LoginDengluWentiBtn">使用密码验证登陆</a>
          </div>
          <button class="LoginDengluBtn" @click.prevent="login">
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
import {reqSendCode,reqSmsLogin} from '../../../../api'
import ajax from '../../../../api/ajax';
  export default {
    data() {
      return {
        phone:'',
        code:'',
        code1:'',
        computeTime: 0, // 计时剩余的时间, 为0时没有计时了
      }
    },
        computed: {
      /* 
      是否是正确手机号
      */
      isRightPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      backLogin(){
        this.$store.dispatch('fanhuishouye')
      },
      async yanzhengma(){
        // alert('----')
        // 设置最大时间
        this.computeTime = 10
        // 启动循环定时器进行计时
        const intervalId = setInterval(() => {
          this.computeTime--
          // 一旦到了0, 清除定时器
          if (this.computeTime===0) {
            clearInterval(intervalId)
          }
        }, 1000)


      //  console.log( typeof this.phone)
        // 发送ajax请求: 发送短信验证码
        const result = await reqSendCode(this.phone)
        // console.log(result)
        if (result.code===0) {
          alert('短信已成功发送')
        } else {
          alert(result)
        }

      },
      async login(){
        var  names
        names = ['phone','code']
        const success =  this.$validator.validateAll(names)
        // this.$validator.localize('zh_CN', validateDict)
        const result = await reqSmsLogin(this.phone,this.code)
         if (result.code===0) {
          // 将user信息保存到state中
          const user = result.data
          // console.log(result.data)
          this.$store.dispatch('userToken', user)
          // 跳转到个人中心
          this.$router.replace('/home')
        } else { // 登陆失败
          alert(result.msg)
        }
        // console.log(this.phone,this.code,result)
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
          width 270px
          height 54px
          position absolute
          top: 20px
          right: 0
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
