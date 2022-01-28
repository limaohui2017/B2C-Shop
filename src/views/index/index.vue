<template>
  <div id="index">
    <!--快捷导航栏-->
    <Shortnav></Shortnav>
    <!--header-->
    <Header></Header>
    <!--nav-->
    <Nav></Nav>
    <!---main-->
    <Main></Main>
    <!--bottom-->
    <Bottom></Bottom>
  </div>
</template>

<script>
import Shortnav from "./chilidren/ShortNav/shortnav.vue";
import Header from "./chilidren/Header/index.vue";
import Nav from "./chilidren/Nav/index.vue";
import Main from "./chilidren/Main/index.vue";
import Bottom from "./chilidren/Bottom/index.vue";
export default {
  components: {
    Shortnav,
    Header,
    Nav,
    Main,
  },
};
</script>
<style >
</style>
