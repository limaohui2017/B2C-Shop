<template>
  <div>
    <!--新品推荐-->
    <div class="index-new-goods clear-fix">
      <!--标题-->
      <div class="list-title">
        <h3>
          <a href="" class="fl">新品推荐</a>
        </h3>
        <a href="" class="fr clear-fix">更多></a>
      </div>
      <!--新品商品信息-->
      <div class="list-goods">
        <el-row :gutter="10">
          <el-col :span="4.5" v-for="item in NewGoodList" :key="item"
            ><div class="grid-content bg-purple list-goods-item">
              <img class="list-goods-img" :src="item" alt="" />
              <p class="sp-title">6寸AMOLED柔性屏</p>
              <p class="sp-desc">1080*2160、耳机接口</p>
              <p class="good-price">¥ 666.6</p>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NewGoodList: [
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
        "https://www.waveshare.net/thumb/middle/photo/LCD-OLED/6inch-HDMI-AMOLED/6inch-HDMI-AMOLED-1.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.index-new-goods-list {
  background-color: #666666;
}
.list-title {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
}
.list-title h3 {
  font-size: 24px;
}
.list-title h3 a {
  text-decoration: none;
  color: #666666;
  cursor: pointer;
}
.list-goods {
  background-color: #eee;
}
.list-goods-item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}
.list-goods-item {
  text-align: center;
  padding: 16px;
}
.list-goods-item p {
  height: 24px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: text;
  user-select: text;
}
.list-goods-img {
  width: 200px;
  height: 150px;
  cursor: pointer;
}

.sp-title {
  color: #666666;
}
.sp-desc {
  font-size: 12px;
  color: #b0b0b0;
  margin-bottom: 8px;
}
.good-price {
  color: #ff003f;
}
/*elementui-layout布局*/
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  margin: 0 0 10px 0;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #fff;
}
/*elementui-layout布局-end*/
</style>