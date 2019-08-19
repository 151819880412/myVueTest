import ajax from './ajax'

// const  BASE = '/api'
// 2http://m.you.163.com/xhr/search/searchAutoComplete.json
// const aaa ='http://m.you.163.com'
export  const reqKeyWord =(keywordPrefix)=>ajax(`api/xhr/search/searchAutoComplete.json`,{keywordPrefix})
export const reqSousuoLIst =()=>ajax('/api//xhr/search/init.json')
