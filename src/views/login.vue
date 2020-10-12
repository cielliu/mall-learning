<template>
    <div>
        <el-card>
            <el-form autoComplete="on">
                <el-form-item prop="username">
                    <el-input name="username"
                              type="text"
                              autoComplete="on"
                              placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input name="password"
                              :type="pwdType"
                              autoComplete="on"
                              placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button>登录</el-button>
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
      this.$axios.post('/api/ratings/list').then(res => {
        const { code, data } = res.data
        if (code === 200 && data) {
          data.forEach(v => {
            this.list.push(v)
          })
          this.loading = false
        }
        if (this.list.length >= 100) {
          this.finished = true
        }
      }).catch(err => {
        console.log(`调用失败：' ${err}`)
      })
    }

  }

}
</script>
