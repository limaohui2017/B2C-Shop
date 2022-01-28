<template>
  <div id="shortnav">
    <div class="topbac">
      <div class="shortcut w">
        <div class="w">
          <div class="fr" v-if="isShow">
            <ul>
              <li>欢迎光临Onion3商城</li>
              <li>
                <a class="style-red" @click="login">登录</a>
                <a class="style-red register" @click="register">免费注册</a>
              </li>
            </ul>
          </div>
          <div class="fr" v-if="!isShow">
            <ul>
              <li>您好，{{ userName }},欢迎您回来！</li>
              <a class="style-red" @click="login">【查看订单】</a>
              <a class="style-red" @click="register">【用户中心】</a>
              <a class="style-red" @click="logout">退出</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lmh: 123,
    };
  },

  computed: {
    isShow() {
      return this.$store.state.isShow;
    },
    userName() {
      return this.$store.state.user.data.username;
    },
  },
  methods: {
    login() {
      console.log(this.$store.state);
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    logout() {
      window.localStorage.clear();
      window.sessionStorage.clear();
      this.$store.state.user = {};
      this.$store.state.isShow = true;
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
/*快捷导航栏开始*/
.fr {
  float: right;
}
.fl {
  float: left;
}
.topbac {
  background-color: #333;
}
/*版心*/
.w {
  width: 1200px;
  margin: auto;
}

.style-red {
  color: #f10793;
  margin: 0 3px;
  cursor: pointer;
}
.register {
  margin: 0 3px;
}
.shortcut {
  position: relative;
  height: 31px;
  line-height: 31px;
  background-color: #333;
}
.shortcut li {
  float: left;
}
.spacer {
  width: 1px;
  height: 12px;
  background-color: #666666;
  margin: 10px 14px 0;
}
</style>