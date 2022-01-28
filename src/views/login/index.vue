<template>
  <div>{{ person }}</div>
  <div id="shortNav">
    <div class="login_container">
      <div class="login_box">
        <!--头像区域-->
        <div class="avator_box">
          <img src="../../assets/logo.png" alt="" />
        </div>
        <!--登录表单区域-->
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginFormRules"
          label-width="0px"
          class="login_form"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.email"
              prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="lmh">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { userLogin } from "../../network/user";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        email: "Lmh@Xn.com",
        password: "Lmh@Xn.com",
      },
      loginFormRules: {
        email: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //登录
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return;
        const { data: res } = await userLogin(
          this.loginForm.email,
          this.loginForm.password
        );
        console.log(res);
        if (res.meta.status !== 200) {
          this.$message.error("登录失败");
        }
        window.sessionStorage.setItem("token", res.data.token);
        window.sessionStorage.setItem("userInfo", res.data.username);
        this.$message.success("登录成功");
        this.$store.state.user = res;
        if (res.data.show) {
          this.$store.dispatch("isShow");
        }
        console.log(this.$store.state.isShow);
        this.$router.push("/home");
      });
    },
    register() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped>
.login_container {
  background-color: #2b4b6b;
  width: 100%;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: blue;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avator_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0 0 10px #ddd;
}
.avator_box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  text-align: right;
}
</style>