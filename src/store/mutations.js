/*
包含n个直接更新状态的方法
*/

import {
    DENGLU_SHOUJI,
    DENGLU_YOUXIANG
}  from './mutations-type'

export default{
    [DENGLU_SHOUJI](state,denglufangshi){
        state.isDenglu = denglufangshi
    }
}