/*
包含n个直接更新状态的方法
*/

import {
    DENGLU_SHOUJI,
    DENGLU_YOUXIANG,
    DENGLU_SHOUYE,
    RECEIVE_KEYWORLD,
    RECEIVE_KEYWORLDLIST,
    KER_WORD,
    RECEIVE_HOMEDATA,
    RECEIVE_TOKEN
}  from './mutations-type'

export default{
    //登陆方式
    [DENGLU_SHOUJI](state,denglufangshi){
        state.isDenglu = denglufangshi
    },
    [DENGLU_YOUXIANG](state,denglufangshi){
        state.isDenglu = denglufangshi
    },
    [DENGLU_SHOUYE](state,denglufangshi){
        state.isDenglu = denglufangshi
    },

    //user的token
    [RECEIVE_TOKEN](state,token){
        state.token = token
    },


    //获取首页数据
    [RECEIVE_HOMEDATA](state,homeData){
        state.homeData = homeData
    },




    //搜索关键字联想
    [RECEIVE_KEYWORLD](state,keywords){
        state.keywords = keywords
    },
    //搜索列表
    [RECEIVE_KEYWORLDLIST](state,keyworldList){
        state.keyworldList = keyworldList
    },




        //更新关键字
        [KER_WORD](state,value) {
            state.keyword = value
          },
    
}