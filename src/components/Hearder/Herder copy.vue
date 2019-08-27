<template>
<div class="header">

  <div class="headerContainer">
    <div class="headerTop">
      <div class="logo"> </div>
      <input class="inp" type="text" @click="toSousuo">
      <i class="headersousuo"  @click="toSousuo"></i>
      <span class="headerinp"  @click="toSousuo">搜索商品，共享21613款好物</span>
      <button class="btn"> 登陆</button>
    </div>

    <div class="headerBottom">
      <div class="headerBottomLeft">
        <!--          <ul class="headerUl">-->
        <div class="zhezhao" v-show="current===180">
          <div class="quanbupindao">全部频道</div>
          <div class="zhezhao2" v-if="current===180"></div>
          <div class="zhezhaos">
            <div class="zhezhaoDiv">推荐</div>
            <div class="zhezhaoDiv">居家生活</div>
            <div class="zhezhaoDiv">服饰鞋包</div>
            <div class="zhezhaoDiv">美食酒水</div>
            <div class="zhezhaoDiv">个护清洁</div>
            <div class="zhezhaoDiv">母婴亲子</div>
            <div class="zhezhaoDiv">运动旅行</div>
            <div class="zhezhaoDiv">数码家电</div>
            <div class="zhezhaoDiv">全球特色</div>
          </div>

        </div>

        <ly-tab v-if="current===0"
                class="headerUl"
                v-model="selectedId"
                :items="items"
                :options="options">
        </ly-tab>
        <!--                      <li class="headerItem1">推荐</li>-->
        <!--                      <li class="headerItem2">居家生活</li>-->
        <!--                      <li class="headerItem2">服饰鞋包</li>-->
        <!--                      <li class="headerItem2">美食酒水</li>-->
        <!--                      <li class="headerItem">个护清洁</li>-->
        <!--                      <li class="headerItem">母婴亲子</li>-->
        <!--                      <li class="headerItem">运动旅行</li>-->
        <!--                      <li class="headerItem">数码家电</li>-->
        <!--                      <li class="headerItem">全球特色</li>-->
        <!--                  </ul>-->
      </div>
      <div class="headerBottomRight">
        <div class="guodu">
          <transition name="slide-fade">
            <i id="jiantou" @click="btn1"></i>
          </transition>
        </div>
      </div>
    </div>
  </div>

</div>


</template>

<script>

  export default {

    data () {
      return {
        current :0,
        selectedId: 0,
        items: [
          {label: '推荐'},
          {label: '居家'},
          {label: '服饰鞋包'},
          {label: '美食酒水'},
          {label: '个护清洁'},
          {label: '母婴亲子'},
          {label: '运动旅行'},
          {label: '数码家电'},
          {label: '全球特色'}
        ],
        options: {
          activeColor: '#1d98bd'
          // 可在这里指定labelKey为你数据里文字对应的字段
        },
      }
    },
    methods:{
       btn1(){
        let btn1 = document.getElementById('jiantou')
        let current = this.current
        current = (current+180)%360;
        btn1.style.transform = 'rotate('+current+'deg)';
        this.current = current
        console.log(this.current)

// reqKeyWord()
        //  const ss= await reqKeyWord('a')

        //  const searchResult = result.data
        //  console.log('结果'+JSON.stringify(ss))
      },
      toSousuo(){
          //跳转到搜索
        this.$router.replace('/sousuo')
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .header
    z-index 333
    height 148px
    width 100%
    background-color white
    position absolute
  .headerContainer
    width 100%
    height 148px
    position absolute
    .headerTop
      padding 16px 30px 16px 30px
      width  690px
      height 56px
      .logo
        /*position absolute*/
        width 138px
        height 40px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        display inline-block
        margin-right 15px
        background-size cover
        background-position center
      .inp
        /*position absolute*/
        top 15px
        left 190px
        height 56px
        width 440px
        background-color #ededed
        border-radius 10px
        z-index 111
      .headersousuo
        display inline-block
        position absolute
        left  230px
        top  30px
        width 28px
        height 28px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
      .headerinp
        position absolute
        left  275px
        top  30px
        font-size 25px
        display inline-block
        width 330px
        height 40px
        line-height 30px
        color #666
      .btn
        float right
        margin-left 1px
        margin-top 10px
        width 72px
        height 38px
        line-height 38px
        text-align center
        color #b4282d
        border 2px solid #b4282d
        font-size 20px
        background-color white
        border-radius 5px
  .headerBottom
    height 60px
    widht 100%
    .headerBottomLeft
      height 60px
      widht 100%
      /*overflow hidden*/
      .zhezhao
        width 100%
        /*height 312px*/
        padding-top 20px
        .quanbupindao
          height 60px
          line-height 44px
          font-size 30px
          padding-left 30px
          overflow hidden
        .zhezhao2
          /*position absolute*/
          height 1100px
          width 100%
          float left
          z-index -5
          background #ccc
        .zhezhaos
          /*overflow hidden*/
          position absolute
          z-index 111
          top: 148px
          left: 0
          height 288px
          background-color white
          width  100%
          .zhezhaoDiv
            float left
            line-height 54px
            text-align center
            font-size 30px
            height 54px
            width 148px
            border 1px solid #ccc
            margin  0 0 40px 30px
      .headerUl
        height 100%
        width 600px
        padding 0 0 0 30px
        .ly-tabbar
          height 60px
          .ly-tab-list
            height 100%
          .ly-tab-item
            display inline-block
            font-size 20px
            height 60px
            width 200px
            padding 0 16px
            .ly-tab-item-label
              height 50px
              width  120px
              font-size 30px
          li
            float left
            font-size 28px
            display inline-block
            padding 0 16px
            heihgt 60px
          .headerItem1
            width 56px
          .headerItem2
            width 120px

    .headerBottomRight
      position absolute
      top 90px
      right 0
      height 60px
      width 100px
      //background-color pink
      #jiantou
        position absolute
        top 5px
        right 40px
        height 50px
        width 50px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png")
        background-repeat no-repeat
        background-size 100% 100%
        transition  1s

</style>
