<template>
  <div  class="discernContainer">
    <div class="discernHeader ">
      <LoginHeader/>
      <div class="discernHeaderTxt">
        <span class="discernHeaderTxt1">发现</span>
        <span class="discernHeaderTxt2">甄选家</span>
      </div>
      <ul class="discernHeaderUl"></ul>
    </div>

    <div class="discrenMid">
        <div class="discrenMidCotainer">
          <div class="discrenMidCotainerHeader">
            <div class="discrenMidCotainerHeaderTxt1">让生活更好的N种生活方式</div>
            <div class="discrenMidCotainerHeaderTxt2">可爱值max的严选萌物</div>
            <!-- <div class="discrenMidCotainerHeaderDiv" >
              <div class="discrenMidCotainerHeaderDiv1"v-for="(item,index) in this.lunbo" ></div>
                <img src="../../components/images/lunbo.jpg" alt="" class="discrenMidCotainerHeaderImg"
                 >
            </div> -->

          </div>
        </div>


    </div>
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  import LoginHeader from  '../User/Login/LoginHeader/LoginHeader'
  import Footer from '../../components/Footer/Footer'
  import {reqShiwuPingjia,reqShiwuLunbo} from '../../api'

  export default {
    name: "ReserveInfo",
    data() {
      return {
        page:1,
        size:5,
        lunbo:{}
      }
    },
    mounted(){
        

  },
  methods: {

  },

    async beforeMount(){
      const result1 =await reqShiwuPingjia(this.page,this.size)
      const result2 =await reqShiwuLunbo()
      console.log(result1.data); 
      this.lunbo= result2.data.lookList
      console.log(result2.data.lookList)
      
    },

    components:{
      LoginHeader,
      Footer
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
.discernContainer
  width 750px
  height 100%
  background #ccc
  .discernHeader
    width 100%
    height 100px
    position relative
    .discernHeaderTxt
      position absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      margin auto
      width 320px
      height 100px
      .discernHeaderTxt1
        margin-top 15px
        float left
        width   120px
        height 48px
        font-size 50px
        text-align center
        line-height 48px
      .discernHeaderTxt2
        float left
        margin-top 15px
        width   200px
        height 48px
        font-size 50px
        text-align center
        line-height 48px
    .discernHeaderUl
      width 100%
      height 74.5px
  .discrenMid
    height 100%
    .discrenMidCotainer
      width 100%
      padding-top 30px    
      .discrenMidCotainerHeader
        height 438px
        font-size 30px
        text-align center
        .discrenMidCotainerHeaderTxt2
          margin-top 30px
        .discrenMidCotainerHeaderDiv
        //   display flex
        //   // flex-direction column
        //   height 240px
        //   width 2000px
          .discrenMidCotainerHeaderDiv1
            height 240px
            width 240px
        //   .discrenMidCotainerHeaderImg
        //     display inline-block
        //     width 240px
        //     height 240px



</style>
