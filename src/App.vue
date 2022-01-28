<template>
  <div>
    <router-view v-slot="{ Component }">
      <!-- 缓存页面 -->
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
export default {
  created() {
    if (window.sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(window.sessionStorage.getItem("store"))
        )
      );
      console.log(this.$store.state);
    }
    window.addEventListener("beforeunload", () => {
      window.sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
};
</script>
<style>
/* * {
  background-color: #e8e8e8;
} */
@import url("assets/css/base.css");
</style>
