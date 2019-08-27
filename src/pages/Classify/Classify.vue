<template>

    <div class="headerBottom">
      <LoginHeader/>
      <div class="classifyHeaderDiv">
        <span class="classifyHeaderTxt">发现</span>
        <span class="classifyHeaderTxt">甄选家</span>
      </div>

      <div class="headerBottomLeft">
        
        <ly-tab 
           @change="sthTodo()"
          class="headerUl"
          v-model="selectedId"
          :items="items"
          :options="options">
        </ly-tab>
      </div>
      <router-link to="/classify/one/1" class="toOne">{{items[0].label}}1</router-link>
      <router-link :to="{path:'/classify/one',query:{id:2}}"  class="toOne">{{items[0].label}}2</router-link>
      <router-link to="/classify/two/2" class="toTwo">{{items[1].label}}</router-link>
      <router-link :to="{path:'/classify/two',params:{name:2}}" class="toTwo">{{items[1].label}}</router-link>
      <router-view></router-view>
      <div class="classifyTab1" v-if="tabIndex===1"></div>
      <div class="classifyTab2" v-if="tabIndex===2"></div>
      <div class="classifyTab3" v-if="tabIndex===3"></div>
      <Footer/>
    </div>
</template>

<script>
import Footer from '../../components/Footer/Footer'
  import LoginHeader from  '../User/Login/LoginHeader/LoginHeader'

  export default {
mounted(){
},
    data () {
      return {
        current :0,
        selectedId: 0,
        tabIndex:0,
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
      onItemClicked(){
        console.log(111)
      },
      sthTodo(item,index){
        this.tabIndex =this.$data.selectedId
      // console.log(this.$data.selectedId)
    }
    },
    watch:{
      tabIndex(){
        this.tabIndex =this.$data.selectedId
      }
    },
    components:{
      Footer,
      LoginHeader
    }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus" >

  .headerBottom
    .headerBottomLeft
      height 60px
      widht 100%
      /*overflow hidden*/
      .headerUl
        height 100%
        width 650px
        padding 30px 0 0 30px
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
              width  200px
              font-size 30px
              z-index 999
         
    .toOne
      display inline-block
      text-align center
      line-height 60px
      font-size 60px
      height 60px
      width 50%
      background pink
      margin-top 100px
    .toTwo
      float right
      text-align center
      line-height 60px
      display inline-block
      font-size 60px
      height 60px
      width 50%
      background pink
      margin-top 100px
    .classifyTab1
      width 600px
      height 600px
      background green
      margin 70px
    .classifyTab2
      width 600px
      height 600px
      background yellow
      margin 70px
    .classifyTab3
      width 600px
      height 600px
      background yellowgreen
      margin 70px
    .classifyHeaderDiv
      height 80px
      width 320px
      background green
      position absolute
      top 0
      left 0
      margin-left 200px
      .classifyHeaderTxt
        float left 
        margin-top 15px
        width   150px
        height 48px
        font-size 50px
        text-align center
        line-height 48px
</style>