<template>
  <div class="login-container">
    <el-form
      :model="loginForm"
      :rules="loginRules"
      auto-complete="on"
      class="login-form"
      label-position="left"
      ref="loginForm"
    >
      <div class="title-container">
        <h3 class="title">XXX系统</h3>
        <!-- <lang-select class="set-language" /> -->
      </div>
      <el-form-item prop="username">
        <i>-</i>

        <el-input
          auto-complete="on"
          name="username"
          placeholder="用户名"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>
      <el-form-item prop="password">
        <i>-</i>

        <el-input
          :type="passwordType"
          @keyup.enter.native="handleLogin"
          auto-complete="on"
          name="password"
          placeholder="密码"
          v-model="loginForm.password"
        />
        <span @click="showPwd" class="show-pwd">查看</span>
      </el-form-item>
      <el-button
        :loading="loading"
        @click.native.prevent="handleLogin"
        style="width:100%;margin-bottom:30px;"
        type="primary"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { login } from "@/api/login";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      // if (!isvalidUsername(value)) {
      //   callback(new Error('Please enter the correct user name'))
      // } else {
      callback();
      // }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码至少为6位"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "2222222222222",
        password: "22222222"
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      passwordType: "password",
      loading: false,
      showDialog: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  created() {},
  destroyed() {},
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log(this.loginForm);
          this.loading = false;
          console.log("登陆了");
          this.$store.commit('SET_USERINFO', '数据')
          window.localStorage.setItem("token", "数据");
          // login({
          //   type: 0,
          //   uid: '1000708'
          // }).then(res => {
          //   console.log(res, '成功')
          // }).catch(err => {
          //   console.log(err, '失败')
          // })
          this.$router.push({ path: this.redirect || "/Basics" });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #eee;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    &::first-line {
      color: $light_gray;
    }
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;
      &:-webkit-autofill {
        // -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
