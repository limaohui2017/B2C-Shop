<template>
  <!-- 手机注册 -->
  <div class="mobileRegFrame">
    <el-form
      ref="ruleForm"
      :rules="rules.mobile"
      :model="ruleForm.mobile"
      class="email_form"
    >
      <!-- 手机号表单 -->
      <el-form-item prop="telephone">
        <el-input
          maxlength="11"
          placeholder="请输入手机号"
          v-model="ruleForm.mobile.telephone"
          prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>
      <!-- 验证码表单 -->
      <el-form-item prop="code">
        <el-input
          class="code"
          placeholder="验证码"
          v-model="ruleForm.mobile.code"
          type="password"
          prefix-icon="el-icon-lock"
        ></el-input>
        <input type="button" class="codeBtn" value="获取验证码" />
      </el-form-item>
      <!-- 密码表单 -->
      <el-form-item prop="pass">
        <el-input
          placeholder="请输入6-16位密码"
          v-model="ruleForm.mobile.pass"
          type="password"
          prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>
      <!-- 密码重复输入表单 -->
      <el-form-item prop="checkPass">
        <el-input
          placeholder="再次输入6-16位密码"
          v-model="ruleForm.mobile.checkPass"
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
    // 密码验证
    const validatePass = (rule, value, callback) => {
      console.log(this.ruleForm.mobile.telephone);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    // 再次输入密码验证
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.mobile.pass) {
        callback(new Error("两次输入的密码不一样"));
      } else {
        callback();
      }
    };
    // 手机号验证
    const validatePhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (value === "") {
        callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
        // 所以在前面加了一个+实现隐式转换

        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };
    return {
      // input表单
      ruleForm: {
        mobile: { telephone: "", code: "", pass: "", checkPass: "" },
      },
      // 数据验证
      rules: {
        mobile: {
          telephone: [
            { validator: validatePhone, trigger: "blur", require: true },
          ],
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
        },
      },
    };
  },
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
.code {
  width: 200px;
}
.codeBtn {
  float: right;
  margin-right: 30px;
  background-color: coral;
  height: 40px;
  border: 0px;
  width: 90px;
  border-radius: 6px;
  color: #fff;
}
</style>