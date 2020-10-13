<template>
  <div>
    <el-card>
      <el-form>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            type="text"
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onloading(loginForm.username)">登录</el-button>
          <el-button>获取体验账号</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      }

    }
  },
  methods: {
    onloading () {
      this.$axios.post('/api/login').then(res => {
        console.log(res.data.login.data)
        // const { data } = res.data
        // console.log(data)
      }).catch(err => {
        console.log(`调用失败：' ${err}`)
      })
    }

  }

}
</script>
