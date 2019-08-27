
// 包含n个间接更新数据的方法

import {
    DENGLU_SHOUYE,
    DENGLU_SHOUJI,
    DENGLU_YOUXIANG,
    RECEIVE_KEYWORLD,
    RECEIVE_KEYWORLDLIST,
    RECEIVE_HOMEDATA,
    RECEIVE_TOKEN,
} from './mutations-type'

import {
    reqKeyWord,
    reqSousuoLIst,
    reqHomeData
} from '../api'

export default{

    /* 
    获取搜索关键字的异步action
    */ 
   async getAddress ({commit, state},value) {
    // 1. 调用接口请求函数发请求
    const result = await reqKeyWord(value)
    // 2. 有了结果, 提交mutation
    if (result.code==200) {
      const keyword = result.data
    //   console.log(result.data)
      commit(RECEIVE_KEYWORLD, keyword)
    }
  },
  //获取搜索关键字列表的异步action
  async getAddress1 ({commit, state},value) {
    // 1. 调用接口请求函数发请求
    const result1 = await reqSousuoLIst(value)
    console.log(result1.data)
    // 2. 有了结果, 提交mutation
    if (result1.code==200) {
      const keywords = result1.data
    //   console.log(result1.data)
      commit(RECEIVE_KEYWORLDLIST, keywords)
    }
  },


    /* 
  记录user: 
    持久化保存token
    在state中保存user
  */
 userToken ({commit}, user) {
  // 将user的token保存到localStorage中
  localStorage.setItem('token_key', user.token)
  setTimeout(function(){
    localStorage.setItem('token_key', '')
  },20000)
  // console.log(localStorage)
  // 将token保存到state中
  commit(RECEIVE_TOKEN, { token: user.token })
  // 将user保存到state中
  // commit(RECEIVE_USER, { user })
},




    /* 
    获取首页的异步action
    */
   async getHomeData ({commit, state}) {
    // 1. 调用接口请求函数发请求
    const result2 = await reqHomeData()
    // 2. 有了结果, 提交mutation
    if (result2.code==200) {
      const homeData = result2.data.kingKongModule.kingKongList
      // console.log(homeData[0].text)
      commit(RECEIVE_HOMEDATA, homeData)
    }
  },


    fanhuishouye({commit,state}){
        // console.log(state)
        let  state0 = state.isDenglu
        state0=0
        commit(DENGLU_SHOUYE,state0)
    },
    
    shoujidenglu({commit,state}){
        let  state1 = state.isDenglu
        state1=1
        // console.log(state.isDenglu)//登陆方式
        commit(DENGLU_SHOUJI,state1)
    },
    youxiangdenglu({commit,state}){
        // console.log(state)
        let  state2 = state.isDenglu
        state2=2
        commit(DENGLU_YOUXIANG,state2)
    },

}