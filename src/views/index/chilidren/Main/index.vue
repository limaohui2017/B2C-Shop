<template>
  <div class="goods-list w">
    <NewGoodsList></NewGoodsList>
    <GoodsList></GoodsList>
  </div>
</template>

<script>
import GoodsList from "../../../../components/content/Goodslist/index.vue";
import NewGoodsList from "../../../../components/content/NewGoodsList/index.vue";
export default {
  components: {
    GoodsList,
    NewGoodsList,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/*版心*/
.w {
  width: 1200px;
  margin: auto;
}
</style>