/*
所有路由配置的数组
*/
import Classify from '../pages/Classify/Classify.vue'
import One from '../pages/Classify/one/one.vue'
import Two from '../pages/Classify/two/two.vue'
import Discern from '../pages/Discern/Discern.vue'
import Home from '../pages/Home/Home.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import User from '../pages/User/User.vue'
import Sousuo from '../components/Hearder/Sousuo/Sousuo.vue'
import Login from '../pages/User/Login/Login.vue'

export default [{
    path: '/classify',
    component: Classify,
    children:[
      {
        path: '/classify/one/:id',
        component: One
      },
      {
        path: '/classify/one/',
        component: One
      },
      {
        path: '/classify/two/:name',
        component: Two
      },
      {
        path: '/classify/two',
        component: Two
      },
    ]
  },
  {
    path: '/discern',
    component: Discern,

  },
  {
    path: '/home',
    component: Home,
    children:[

    ]
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/user',
    component: User,
    children:[

    ]
  },
  {
    path:'/user/login',
    component:Login
  },
  {
    path:'/sousuo',
    component:Sousuo
    },
  {
    path: '/',
    redirect: '/home'
  }
]
