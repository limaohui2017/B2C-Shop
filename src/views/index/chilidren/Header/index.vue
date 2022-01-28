<template>
  <div class="header w">
    <div class="logo">
      <span>O</span>
      <span>N</span>
      <span>I</span>
      <span>O</span>
      <span>N</span>
      <span>3</span>
      <p class="welcome">欢 迎 来 到 洋 葱 立 方~</p>
    </div>
    <div class="search">
      <input type="text" value="请搜索内容..." />
      <button>搜索</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/*版心*/
.w {
  width: 1200px;
  margin: auto;
}
/*header*/
.header {
  position: relative;
}
.logo {
  width: 200px;
  text-align: center;
  position: relative;
  top: 0px;
  left: 0px;
  margin-top: 30px;
}
.logo span {
  font-size: 30px;
  color: #b10e71;
  font-weight: 600;
  display: inline-block;
}
.logo .welcome {
  color: #b10e71;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin: 5px;
}
/*search*/
.search {
  position: absolute;
  top: 25px;
  left: 300px;
}
.search input {
  float: left;
  border: 2px solid #b10e71;
  padding-left: 10px;
  width: 453px;
  height: 33px;
  color: #ccc;
}
.search button {
  float: left;
  border: 0;
  background-color: #b10e71;
  height: 37px;
  width: 86px;
  font-size: 16px;
  color: #faf4f4;
}
</style>