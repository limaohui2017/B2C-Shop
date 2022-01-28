<template>
  <div>
    <div class="register_box">
      <div class="tagMenu" @click="registerChange">
        <span class="mobile" :class="{ active: status }">手机注册</span>
        <span class="email" :class="{ active: !status }">邮箱注册</span>
      </div>
      <mobile v-if="status" ref="mobileInfo"></mobile>
      <email v-else ref="emailInfo"></email>
      <btnFrame @login="register"></btnFrame>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

import { userRegister } from "../../../../network/user";

import btnFrame from "./children/btnFrame.vue";
import email from "./children/email.vue";
import mobile from "./children/mobile.vue";
export default {
  components: {
    btnFrame,
    email,
    mobile,
  },
  data() {
    return {
      status: true,
    };
  },
  methods: {
    registerChange() {
      this.status = !this.status;
    },
    register() {
      if (this.$refs.emailInfo.emailtest.email) {
        if (this.$refs.emailInfo.emailtest.pass) {
          if (this.$refs.emailInfo.emailtest.checkPass) {
            const { data: res } = userRegister(
              this.$refs.emailInfo.ruleForm.email.email,
              this.$refs.emailInfo.ruleForm.email.pass
            );
          } else {
            ElMessage({ message: "两次密码输入的密码不一致", type: "warning" });
          }
        } else {
          ElMessage({ message: "请输入6-16位密码", type: "warning" });
        }
      } else {
        ElMessage({ message: "请输入正确的邮箱", type: "warning" });
      }
    },
  },
};
</script>

<style scoped>
.register_box {
  width: 480px;
  height: 470px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 20px #ddd;
}
.tagMenu {
  width: 480px;
  height: 55px;
  background-color: #eee;
}
.mobile,
.email {
  width: 50%;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #313131;
  cursor: pointer;
  line-height: 55px;
}
.active {
  background-color: #fff;
}
</style>