<template>
  <div class="nav">
    <div class="w">
      <div class="dropdown fl">
        <div class="dt">全部商品分类</div>
        <div class="dd">
          <ul>
            <li class="menu_item"><a href="#">等级考试器材</a></li>
            <li class="menu_item">
              <a href="#">Zero、One编程小车</a>
            </li>
            <li class="menu_item"><a href="#">Mio</a></li>
            <li></li>
            <li class="menu_item">
              <a href="#">Arduino/micro：bit</a>
            </li>
            <li class="menu_item">
              <a href="#">传感器模块</a>
            </li>
            <li class="menu_item">
              <a href="#">无人机</a>
            </li>
            <li class="menu_item">
              <a href="#">线材/工具/电子元件</a>
            </li>
            <li class="menu_item">
              <a href="#">树莓派</a>
            </li>
            <li class="menu_item">
              <a href="#">创客教育套件</a>
            </li>
            <li class="menu_item">
              <a href="#">3D打印</a>
            </li>
            <li class="menu_item">
              <a href="#">耗材包</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navitems fl">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">新品</a></li>
          <li><a href="#">产品资料库</a></li>
          <li><a href="#">Onion3创客社区</a></li>
          <li><a href="#">造物吧</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="main w">
    <div class="swiper">
      <div class="block">
        <el-carousel height="372px">
          <el-carousel-item v-for="item in this.img" :key="item">
            <img class="swiper-img" :src="item" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        "https://www.waveshare.net/images/i6/10016c935dd21d0d98d3c396d44ed170.jpg",
        "https://www.waveshare.net/images/i6/10016c935dd21d0d98d3c396d44ed170.jpg",
      ],
      goods: [
        "https://ws.dfrobot.com.cn/Fjrf9Z_QLFyM57VtQGqcHU3V0Myc?imageView2/1/w/282/h/282",
      ],
      title: ["新品推荐", "等级考试", "Arduino", "microbit", "Raspberry Pi"],
    };
  },
};
</script>

<style scoped>
.fr {
  float: right;
}
.fl {
  float: left;
}
/*版心*/
.w {
  width: 1200px;
  margin: auto;
}
.nav {
  border-bottom: 2px solid #b10e71;
  height: 45px;
}
.dropdown {
  height: 45px;
  width: 209px;
  background-color: #b10e71;
}
.dropdown .dt {
  margin: 0 55px;
  height: 100%;
  line-height: 45px;
  color: #ffffff;
  font-size: 16px;
  text-align: center;
}
.dropdown .dd {
  margin-top: 2px;
  width: 210px;
  height: 372px;
  background-color: #313131;
}
.menu_item {
  margin-left: 1px;
  height: 31px;
  line-height: 31px;
  padding: 0 10px;
}
.menu_item a {
  font-size: 14px;
  color: #ffffff;
}
.menu_item:hover a {
  color: #b10e71;
}
.menu_item i {
  float: right;
  font-family: "icomoon";
  font-size: 18px;
  color: #ffffff;
}
.navitems {
  margin-left: 10px;
}
.navitems li {
  float: left;
}
.navitems li a {
  display: block;
  padding: 0 25px;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  font-weight: 700;
}
/*nav结束*/
.swiper-img {
  overflow: hidden;
  height: 372px;
  width: 988px;
}
.swiper {
  width: 988px;
  height: 372px;
  margin-left: 208px;
  background-color: #b10e71;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>