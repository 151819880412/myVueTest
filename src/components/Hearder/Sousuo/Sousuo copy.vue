<template class="qqq">
  <div class="sousuoContainer">
    <div class="sousuoHeader">
      <div class="sousuoDiv">
        <input type="text" class="sousuoInp"
               :placeholder="this.keyWords? this.keyWords:''"

               v-model="keyword">

        <div v-for="(item,index) in result">{{item}}</div>
      </div>
      <div class="sousuoQuxiao" @click="toHome">取消</div>
    </div>
    <div class="sousuoLIsts">
      <div class="sousuoList" v-for="(item,index) in sousuoList"
           :style="{width:item.keyword.length*35+'px'}">
        {{item.keyword}}</div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqKeyWord,reqSousuoLIst} from '../../../api'

  export default {
    data(){
      return{
        keyword:'',
        result:'',
        keyWords:'',
        sousuoList:''
      }
    },
    methods:{
      toHome(){
        //跳转到个人中心
        this.$router.replace('/home')
      },
    },
    async beforeCreate(){
      const sousuoLIst = await reqSousuoLIst()
      console.log(sousuoLIst)
      this.keyWords=sousuoLIst.data.defaultKeyword.keyword
      this.sousuoList = sousuoLIst.data.hotKeywordVOList
      console.log(sousuoLIst.data.hotKeywordVOList)
      // console.log(this.sousuoLIst)
      
    },
    watch:{
      // async keyword(value){
      //   const res = await reqKeyWord(value)
      //   console.log(res.data)
      //   this.result=res.data
      // }

      //  keyword(value){
      //    this.$store.dispatch('getAddress',value)
      //   let aaa= this.$store.state.keyworld1
      //   // console.log(111)
      //   console.log(aaa)
        // console.log(this.$store.state)
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
      margin 20px
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
