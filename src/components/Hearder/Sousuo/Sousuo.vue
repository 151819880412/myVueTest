<template class="qqq">
  <div class="sousuoContainer">
    <div class="sousuoHeader">
      <div class="sousuoDiv">
        <input type="text" class="sousuoInp"
               :placeholder="defaultKeyword"

               v-model="keyword11">

        <div v-if="keyword11!=''" v-for="(item,index) in keywords">{{item}}</div>
      </div>
      <div class="sousuoQuxiao" @click="toHome">取消</div>
    </div>
    <div class="sousuoLIsts">
      <div class="sousuoList" v-for="(item,index) in hotKeywordVOList"
           :style="{width:item.keyword.length*35+'px'}">
        {{item.keyword}}</div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqKeyWord,reqSousuoLIst} from '../../../api'
import { mapState, mapGetters } from 'vuex'
import {KER_WORD} from '../../../store/mutations-type'
  export default {
    data(){
      return{
        keyword11:'',
        // result:'',
        // keyWords:'',
        // sousuoList:''
      }
    },
     computed:{
     ...mapState({
        keywords:state => state.keywords,
        // keyword: state => state.keyword,
        hotKeywordVOList: state => state.keyworldList.hotKeywordVOList,
        defaultKeyword:state => state.keyworldList.defaultKeyword.keyword,
        defaultKeywords:state => state.keyworldList.defaultKeywords,
      }),

    },
    methods:{
      toHome(){
        //跳转到个人中心
        this.$router.replace('/home')
      },
    },
     mounted(){
      // console.log(sousuoLIst)
      // this.keyWords=sousuoLIst.data.defaultKeyword.keyword
      // this.sousuoList = sousuoLIst.data.hotKeywordVOList
      // console.log(sousuoLIst.data.hotKeywordVOList)
      // // console.log(this.sousuoLIst)
       this.$store.dispatch('getAddress1')
      // var bbb= this.$store.state.keyworld2.hotKeywordVOList
      // console.log(bbb)
    },
    watch:{
      // async keyword(value){
      //   const res = await reqKeyWord(value)
      //   console.log(res.data)
      //   this.result=res.data
      // }




      async keyword11(value){
        // if(){

        // }
        await this.$store.dispatch('getAddress',value)
        // this.$store.commit(KER_WORD,value)
     
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .sousuoContainer
    display block
    width 750px
    height 491px
    background #ccc
    font-size 30px
    .sousuoHeader
      width 690px
      height 88px
      padding 0 30px
      .sousuoDiv
        width 604px
        height 56px
        float left
        margin-top 20px
        .sousuoInp
          width 564px
          height 56px
          padding 0 20px
      .sousuoQuxiao
        display inline-block
        font-size 28px
        margin-top 30px
        width 56px
        height 41px
        margin-left 30px


    .sousuoLIsts
      width 720px
      height 326px
      margin-top 400px
      .sousuoList
        display inline-block
        width 200px
        height 50px
        float left
        border 1px solid #333
        margin 0 32px 32px 0
        background pink
        text-align center
        line-height 50px





</style>
