<template>
  <!--邮箱注册-->
  <div class="emaileRegFrame">
    <el-form
      ref="ruleForm"
      :rules="rules.email"
      :model="ruleForm.email"
      class="email_form"
    >
      <el-form-item prop="email">
        <el-input
          placeholder="请输入邮箱地址"
          v-model="ruleForm.email.email"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          placeholder="请输入6-16位密码"
          v-model="ruleForm.email.pass"
          type="password"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input
          placeholder="再次输入6-16位密码"
          v-model="ruleForm.email.checkPass"
          type="password"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    // 密码一次验证
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        this.emailtest.pass = false;
        callback(new Error("请输入密码"));
      } else {
        this.emailtest.pass = true;
        callback();
      }
    };
    // 密码二次校对
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        this.emailtest.checkPass = false;
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.email.pass) {
        this.emailtest.checkPass = false;
        callback(new Error("两次输入的密码不一样"));
      } else {
        this.emailtest.checkPass = true;
        callback();
      }
    };
    // 邮箱验证
    const validateEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        this.emailtest.email = false;
        callback(new Error("邮箱不能为空"));
      } else {
        if (mailReg.test(value)) {
          this.emailtest.email = true;
          callback();
        } else {
          this.emailtest.email = false;
          callback(new Error("请输入正确的邮箱格式"));
        }
      }
    };
    return {
      emailtest: {
        email: false,
        pass: false,
        checkPass: false,
      },
      ruleForm: {
        email: { pass: "", checkPass: "", email: "" },
      },
      rules: {
        email: {
          pass: [
            { validator: validatePass, trigger: "blur", require: true },
            {
              min: 6,
              max: 16,
              message: "长度在 6 到 16 个字符",
              trigger: "blur",
            },
          ],
          checkPass: [
            { validator: validatePass2, trigger: "blur", require: true },
          ],
          email: [{ validator: validateEmail, trigger: "blur", require: true }],
        },
      },
    };
  },
  methods: {},
};
</script>

<style  scoped>
.email_form {
  position: absolute;
  top: 80px;
  width: 100%;
  box-sizing: border-box;
}
.el-form-item >>> .el-form-item__error {
  left: 30px;
}
.el-input {
  width: 420px;
  margin: 0 30px;
}
</style>
