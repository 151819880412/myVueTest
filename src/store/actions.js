
// 包含n个间接更新数据的方法

import {
    DENGLU_SHOUJI
} from './mutations-type'

export default{
    shoujidenglu({commit}){
        commit(DENGLU_SHOUJI)
    }
}