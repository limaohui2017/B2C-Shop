<template>
  <div class="btnFrame">
    <div class="tips">
      <div>
        <input
          type="checkbox"
          class="protocolBox"
          @click="select"
          v-model="checked"
        />
        <span>我已看过并接受</span>
        <span class="tips_agreement">用户协议</span>
      </div>
      <!-- <input type="checkbox" class="protocolBox" />
      <el-checkbox v-model="checked">我已看过并接受</el-checkbox>
      <span class="tips_agreement">用户协议</span> -->
    </div>
    <input type="button" value="下一步" class="regBtn" @click="register" />
    <div class="tips">
      已有账号？立即 <span class="tips_login" @click="login">登录</span>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    select() {
      this.checked = !this.checked;
    },
    register() {
      if (!this.checked) {
        ElMessage({ message: "未接受用户协议", type: "warning" });
        return {};
      } else {
        this.$emit("login");
      }
    },
    login() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.btnFrame {
  position: absolute;
  bottom: 60px;
}
.tips {
  margin: 0 30px;
}
.regBtn {
  width: 420px;
  height: 45px;
  background-color: coral;
  color: #fff;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  margin: 0 30px;
}
.tips_agreement {
  font-size: 14px;
  color: coral;
  line-height: 14px;
  white-space: nowrap;
}
.tips_login {
  color: coral;
}
</style>