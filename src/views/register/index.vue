<template>
  <div>
    <wrapper class="register"></wrapper>
  </div>
</template>

<script>
import wrapper from "./children/wrapper/index.vue";
export default {
  components: {
    wrapper,
  },
};
</script>

<style  scoped>
.register {
  position: relative;
  width: 100%;
  height: 775px;
  background-color: #eee;
}
</style>