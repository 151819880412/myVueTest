<template>
  <div>
    <Header/>
    <router-view></router-view>

<!--    //轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/eda2f4fc108b2c1be7dd4eafe26b2daa.png?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/41206124e95bb06e5493c20c55cf9e63.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

<!--中间小字-->
    <div class="mid">
      <ul class="midUl">
        <li class="midLis">
          <i class="midI" style="background-image:url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>
          <a href="" class="midA1">网易自营品牌</a>
        </li>
        <li class="midLis">
          <i class="midI" style="background-image:url(https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>
          <a href="" class="midA2">30天无忧退货</a>
        </li>
        <li class="midLis">
          <i class="midI" style="background-image:url(https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>
          <a  href="" class="midA3">48小时快速退款</a>
        </li>
      </ul>
    </div>


<!--    主体-->
    <div class="zhuti">
<!--      商品列表分类-->
      <div class="shopping">
          <div class="shoppings">
            <div class="shopingList" v-for="(item,index) in homeData">
              <img class="shopImgs" :src="item.picUrl" alt="">
              <span class="shopSpan" >{{item.text}}</span>
            </div>
            <!-- <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
              <span  class="shopSpan" >居家生活</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="">
              <span  class="shopSpan" >服饰连包</span>
            </div>
            <div class="shopingList">
              <img  class="shopImgs" src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="">
              <span  class="shopSpan" >美食酒水</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
              <span  class="shopSpan" >个护清洁</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
              <span  class="shopSpan" >母婴亲子</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
              <span  class="shopSpan" >运动旅行</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
              <span  class="shopSpan" >数码家电</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
              <span  class="shopSpan" >全球特色</span>
            </div>
            <div class="shopingList">
              <img class="shopImgs"  src="https://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="">
              <span  class="shopSpan" >超级会员</span>
            </div> -->
          </div>
      </div>

<!--      新人-->
      <div class="xinren">
          <div class="xinrenTxt">新人专属礼</div>
          <div class="xinrenTu">
            <div class="xinrenTuLeft">
              <div class="xinrenLibaoTxt">新人专享礼包</div>
              <div class="xinrenLibaoDiv">
                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="" class="xinrenLibaoImg">
              </div>
            </div>
            <div class="xinrenTuRight">
              <div class="xinrenTuRightTop">
                <a href="javascript:" class="xinrenTuRightTopA">
                  <div class="xinrenHuodong1">福利社</div>
                  <div class="xinrenHuodong2">今日特价</div>
                  <div class="xinrenTuRightTopRight">
                    <div class="xinrenZhekous">
                      <div class="xinrenZhekou1">￥28.8</div>
                      <div class="xinrenZhekou2">￥36</div>
                    </div>
                    <img src="https://yanxuan.nosdn.127.net/aa70e70ae9d0f393abba139e67edf8d9.png?imageView&thumbnail=200x200&quality=75" class="xinrenTuRightTopImg">
                  </div>
                </a>
              </div>
              <div class="xinrenTuRightBottom">
                <a href="javascript:" class="xinrenTuRightBottomA">
                  <div class="xinrenTuRightBottomLeft">
                    <div class="xinrenHuodong1">新人拼团</div>
                    <div class="xinrenHuodong2">1元起包邮</div>
                  </div>
                  <div class="xinrenTuRightBottomRight">
                    <div class="xinrenZhekous">
                      <div class="xinrenZhekou1">￥1</div>
                      <div class="xinrenZhekou2">￥19.9</div>
                    </div>
                    <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png?imageView&thumbnail=200x200&quality=75" alt="">
                  </div>
                </a>
              </div>
            </div>
          </div>
      </div>
    </div>
<!--    底部-->
    <footer class="footer">
      <Footer/>
    </footer>


  </div>
</template>

<script type="text/ecmascript-6">
import Header from '../../components/Hearder/Herder.vue'
import Footer from '../../components/Footer/Footer'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import {reqHomeData} from '../../api'
import { mapState, mapGetters } from 'vuex'

  export default {

  async mounted(){
    // 获取当前路由
    // console.log(window.document.location.pathname)
    //console.log(this.$route.path.split('/')[1])

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
    this.$store.dispatch('getHomeData')
    // let homeData = await reqHomeData()
    // console.log(this.$store.state.homeData)
  },
  computed:{
     ...mapState({
      homeData: state => state.homeData
    })
  }, 
    components:{
      Header,
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    padding-top 150px
    width 750px
    height 400px
  .mid
    height 72px
    width 100%
    background white
    .midUl
      height 72px
      width 690px
      padding 0 30px
      .midLis
        width 228px
        height 36px
        float left
        .midI
          display inline-block
          height 32px
          width 32px
        a
          display inline-block
          line-height 32px
          font-size 22px
          margin-left 8px
          color: #333;
        .midA1
          width 144px
          height 32px
        .midA2
          width 146px
          height 32px
        .midA3
          width 170px
          height 32px
  .zhuti
    background #cccccc
    height 100%
    width 100%
    .shopping
      width 100%
      height 372px
      border-top 1px solid #333
      background white
      .shoppings
        width 100%
        height 372px
        padding-bottom 32px
        .shopingList
          float left
          dislay flex
          flex-direction:column
          align-items center
          height 156px
          width 110px
          margin 10px 20px 9px 20px
          .shopImgs
            height 110px
            width 110px
          .shopSpan
            width 110px
            height 36px
            line-height 36px
            text-align center
            font-size  26px
    .xinren
      height 527px
      width 750px
      margin 20px 0
      background white
      .xinrenTxt
        height 90px
        width 690px
        padding 0 30px
        font-size 36px
        text-align center
        line-height 90px
        position relative
        &:before
          content: ''
          position absolute
          top: 42px
          left: 244px
          width: 24px
          height: 3px
          background: #333;
        &:after
          content: ''
          position absolute
          top: 42px
          left: 476px
          width: 24px
          height: 3px
          background: #333;
      .xinrenTu
        height 438px
        width 720px
        padding-left 30px
        .xinrenTuLeft
          float left
          height 434px
          width 343px
          background-color #F9E9CF
          margin-right 4px
          .xinrenLibaoTxt
            height 48px
            width 313px
            padding 30px 0 0 30px
            font-family: PingFangSC-Medium;
            font-size 30px
          .xinrenLibaoDiv
            width 258px
            height 257px
            margin 37px 42.5px 37px 42.5px
            .xinrenLibaoImg
              width 100%
              height 100%
        .xinrenTuRight
          float left
          width 343px
          height 438px
          .xinrenTuRightTop
            width 343px
            height 215px
            margin-bottom 4px
            .xinrenTuRightTopA
              position relative
              display block
              width:313px
              height 195px
              padding 20px 4px 4px 30px
              background-color #FBE2D3
              .xinrenHuodong1
                width 313px
                height 48px
                line-height 48px
                font-size 30px
                color #333
                font-family: PingFangSC-Medium;
              .xinrenHuodong2
                color: #7F7F7F;
                width 313px
                height 36px
                line-height 36px
                font-size 26px
                font-family: PingFangSC-Medium;
              .xinrenTuRightTopRight
                position absolute
                top: 0
                right: 0
                width 200px
                height 200px
                .xinrenZhekous
                  font-size 22px
                  width 80px
                  height 70px
                  padding-top 10px
                  position: absolute;
                  top 10px
                  right 30px
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  color: #fff;
                  text-align: center;
                  .xinrenZhekou1
                    width 80px
                    height 36px
                    font-size 22px
                  .xinrenZhekou2
                    width 80px
                    height 30px
                    font-size 22px
                    margin-top -7px
                    text-decoration: line-through;
          .xinrenTuRightBottom
            width 343px
            height 215px
            background-color #FBE2D3
            position relative
            .xinrenTuRightBottomA
              width 313px
              height 195px
              display block
              position absolute
              right: 0
              bottom: 0
              margin  0 4px 4px 0
              padding 20px 0 0 30px
              .xinrenTuRightBottomLeft
                width 313px
                height 80px
                .xinrenHuodong1
                  width 313px
                  height 48px
                  line-height 48px
                  font-size 30px
                  color #333
                  font-family: PingFangSC-Medium;
                .xinrenHuodong2
                  color: #7F7F7F;
                  width 313px
                  height 36px
                  line-height 36px
                  font-size 26px
                  font-family: PingFangSC-Medium
              .xinrenTuRightBottomRight
                width 200px
                height 200px
                position absolute
                top: 0
                right: 0
                .xinrenZhekous
                  font-size 22px
                  width 80px
                  height 70px
                  padding-top 10px
                  position: absolute;
                  top 10px
                  right 30px
                  opacity: .8;
                  background: #F59524;
                  border-radius: 50%;
                  color: #fff;
                  text-align: center;
                  .xinrenZhekou1
                    width 80px
                    height 36px
                    font-size 22px
                  .xinrenZhekou2
                    width 80px
                    height 30px
                    font-size 22px
                    margin-top -7px
                    text-decoration: line-through;
  .footer
    height 100px

</style>
