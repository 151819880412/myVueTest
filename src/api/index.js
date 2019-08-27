import ajax from './ajax'

const  BASE = '/api'
// 2http://m.you.163.com/xhr/search/searchAutoComplete.json
// const aaa ='http://m.you.163.com'
export  const reqKeyWord =(keywordPrefix)=>ajax(`api/xhr/search/searchAutoComplete.json`,{keywordPrefix})
export const reqSousuoLIst =()=>ajax('/api//xhr/search/init.json')

//识物--评价
export const reqShiwuPingjia =(page,size,type=1)=>ajax('api/topic/v1/look/getList.json',{
  page,
  size,
  type
})
// 识物--轮播图
export const reqShiwuLunbo =(id=6)=>ajax('api/topic/v1/look/getCollection.json',{
  id
})



// mock
export const reqHomeData = () => ajax('/home')



// 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + `/sendcode`,
{
//     method: 'GET',
//     // url: BASE + '/sendcode',
    // params: { phone }
    phone
  }
  )


  // 用户名密码登陆
export const reqPwdLogin = ({ name, pwd }) => ajax({
  method: 'POST',
  url: BASE + '/login_pwd',
  data: {
    name,
    pwd,
  }
})


// 手机号/短信登陆
export const reqSmsLogin = (phone, code) => ajax(BASE + `/login_sms`,
{
  // url: BASE + '/login_sms',
  // data: {
    phone,
    code
  // }
},
'POST',

)