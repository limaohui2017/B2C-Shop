<template>
  <div>
    <el-container
      v-for="(item, index) in goodslist"
      :key="index"
      class="clear-fix"
    >
      <!--Head-->
      <el-header>
        <!--head左侧title-->
        <div class="good-title fl">{{ item.name }}</div>
        <!--head右侧分类-->
        <div class="good-category fr">
          <span
            v-on:mouseover="mousemove(index, childrenindex)"
            v-for="(category, childrenindex) in item.category"
            :class="{
              active: childrenindex === currentIndex && index === categoryIndex,
            }"
            :key="childrenindex"
            href=""
          >
            <a href="">{{ category }}</a>
          </span>
        </div>
      </el-header>
      <el-container class="clear-fix">
        <!--Aside-->
        <el-aside width="232px" class="clear-fix">
          <a href=""><img :src="item.asideImg" alt="" /></a>
        </el-aside>
        <!--Main-->
        <el-main>
          <el-row :gutter="20">
            <el-col :span="6" v-for="good in item.maininfo" :key="good"
              ><div class="grid-content bg-purple">
                <img :src="good.img" alt="" /></div
            ></el-col>
            ></el-row
          ></el-main
        >
      </el-container>
    </el-container>
    <div v-for="item in title" :key="item">
      <div class="list-title clear-fix">
        <h3>
          <a href="" class="fl">{{ item }}</a>
        </h3>
        <a href="" class="fr">更多></a>
      </div>
      <div>
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ["等级考试", "Arduino", "microbit", "Raspberry Pi"],
      goodslist: {
        Arduino: {
          name: "Arduino",
          category: ["主板/套件", "显示屏", "摄像头", "扩展版", "笔记本"],
          list: {
            zhuban: {},
          },
          asideImg:
            "https://www.waveshare.net/images/i5/ffcf266c2c395696e3d8c9dc75e3974a.jpg?v=210906",
          maininfo: [
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
          ],
        },
        RaspberryPi: {
          name: "RaspberryPi",
          category: ["主板/套件", "显示屏", "摄像头", "扩展版", "笔记本"],
          asideImg:
            "https://www.waveshare.net/images/i5/ffcf266c2c395696e3d8c9dc75e3974a.jpg?v=210906",
          maininfo: [
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
          ],
        },
        Microbit: {
          name: "Microbit",
          category: ["主板/套件", "显示屏", "摄像头", "扩展版", "笔记本"],
          asideImg:
            "https://www.waveshare.net/images/i5/ffcf266c2c395696e3d8c9dc75e3974a.jpg?v=210906",
          maininfo: [
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
          ],
        },
        IOT: {
          name: "IOT",
          category: ["主板/套件", "显示屏", "摄像头", "扩展版", "笔记本"],
          asideImg:
            "https://www.waveshare.net/images/i5/ffcf266c2c395696e3d8c9dc75e3974a.jpg?v=210906",
          maininfo: [
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
          ],
        },
        rengongzhineng: {
          name: "人工智能",
          category: ["主板/套件", "显示屏", "摄像头", "扩展版", "笔记本"],
          asideImg:
            "https://www.waveshare.net/images/i5/ffcf266c2c395696e3d8c9dc75e3974a.jpg?v=210906",
          maininfo: [
            {
              img: "https://www.waveshare.net/thumb/middle/photo/development-board/Raspberry-Pi-Zero-2-W/Raspberry-Pi-Zero-2-W-1.jpg",
              price: "¥ 365.6",
              title: "Raspberry Pi Zero 2 W",
              description: "树莓派 Zero 2 代",
            },
          ],
        },
      },
      //产品分类中的第几个
      categoryIndex: 0,
      //产品标题分类的第几个
      currentIndex: 0,
    };
  },
  methods: {
    mousemove(index, childrenindex) {
      this.currentIndex = childrenindex;
      this.categoryIndex = index;
    },
  },
};
</script>

<style scped>
.fl {
  float: left;
}
.fr {
  float: right;
}

.good-category span {
  margin-left: 30px;
  padding-bottom: 5px;
}

.active {
  border-bottom: 2px solid #e71fc6;
}
.active a {
  color: #e71fc6;
}
.el-header {
  background-color: #eee;
  color: var(--el-text-color-primary);
  line-height: 64px;
  font-size: 16px;
}

.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  height: 542px;
  overflow: hidden !important ;
}

.el-aside::-webkit-scrollbar {
  display: none;
}
.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
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
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
/*elementui-layout布局-end*/
</style>