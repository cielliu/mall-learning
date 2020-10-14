// 引入随机函数
// import { Random } from 'mockjs'
// 引入Mock
// const Mock = require('mockjs')

// 定义数据
// const userMap = {

// }

// export default {
//   loginByName: config => {
//     const { username } = JSON.parse(config.body)
//     return userMap[username]
//   }
// }

export default [
  {
    url: '/api/login',
    type: 'post',
    response: (res) => {
      // res.body就是我们要传入的数据
      console.log('username赋值前')
      console.log('username赋值后')
      return {
        code: 200,
        message: '操作成功',
        data: 'hello'
      }
    }

  }
]

/* 方法一
function login (res) {
  // console.log(res)
  return {
    code: 200,
    data: 'hello',
    message: '请求成功'
  }
}

export default { login }
*/
