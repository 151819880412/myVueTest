
//管理状态的对象

export default {
    isDenglu:0,                 //登陆方式
    keyword:"",                 //搜索关键字
    keywords:'',               //搜索关键字联想
    token: localStorage.getItem('token_key'),
    keyworldList:{              //
        hotKeywordVOList:'',    //搜索列表
        defaultKeyword:''       //搜索默认显示
    },
    homeData:{},
    // defaultKeyword:''           //
}