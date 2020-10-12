// 引入随机函数
// import { Random } from 'mockjs'
// 引入Mock
// const Mock = require('mockjs')

// 定义数据
const userMap = {
  admin: {
    username: 'admin',
    password: 'macro123'
  }
}

// export default{
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
      const { username } = JSON.parse(res.body)
      return{
          code: 200,
          message: "操作成功",
          data: userMap[username]

      } 
    }

    }
  }
]
