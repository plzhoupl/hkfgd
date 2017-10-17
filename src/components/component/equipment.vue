<style scoped>
  #equ {
    background: #EEF1F6;
  }

  .white {
    text-align: start;
  }

  .content {
    width: 80%;
    margin-left: 10%;
  }
  .card{
    cursor: pointer;
    transition: all 0.6s;
  }
  .card:hover{
    transform: scale(1.1);
  }

</style>


<template>
  <div id="equipment">

    <el-row class="content">
      <el-col :span="4">
        <el-menu default-active="1" class="white el-menu-vertical-demo" @select="handleSelect">
          <el-menu-item class="white" index="1">
            综合办公区
          </el-menu-item>
          <el-menu-item class="white" index="2">
            CNC加工中心
          </el-menu-item>
          <el-menu-item class="white" index="3">
            金刚石上砂中心
          </el-menu-item>
          <el-menu-item class="white" index="4">
            品质检验中心
          </el-menu-item>
          <el-menu-item class="white" index="5">
            测试中心
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-col style="margin: 10px" :span="6" v-for="img in show">
          <el-card class="card">
            <img :src="img.img" class="image" width="180px"height="150px" >
            <div style="padding-top: 14px;">
              <span>{{ img.title }}</span>
            </div>
          </el-card>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: '电镀金刚石磨头',
        currentDate: new Date(),
        classImg: [
          {img: "/static/equ/class/class5.jpeg", title: "公司前台全景"},
          {img: "/static/equ/class/class1.jpg", title: "综合办公室"},
          {img: "/static/equ/class/class2.jpg", title: "会议室"},
          {img: "/static/equ/class/class3.jpg", title: "办公室走道"},
        ],
        cnc: [
          {img: "/static/equ/cnc/cnc1.jpg", title: "机加工车间2"},
          {img: "/static/equ/cnc/cnc2.jpg", title: "机加工车间"},
          {img: "/static/equ/cnc/cnc3.jpg", title: "CNC加工中心"},
          {img: "/static/equ/cnc/cnc4.jpg", title: "CNC加工中心"},
          {img: "/static/equ/cnc/cnc5.jpg", title: "CNC加工中心"},
          {img: "/static/equ/cnc/cnc6.jpg", title: "CNC加工中心"},

        ],
        jinGangShi: [
          {img: "/static/equ/jingangshi/pic1.jpg", title: "金刚砂微粉调配"},
          {img: "/static/equ/jingangshi/pic2.jpg", title: "金刚砂微粉调配"},
          {img: "/static/equ/jingangshi/pic3.jpg", title: "金刚石自动上砂设备"},
          {img: "/static/equ/jingangshi/pic4.jpg", title: "金刚石手动上砂设备"},
          {img: "/static/equ/jingangshi/pic5.jpg", title: "组装工作台"},
          {img: "/static/equ/jingangshi/pic6.jpg", title: "生产车间"},
        ],
        jianCha: [
          {img: "/static/equ/jiancha/pic1.jpg", title: "电子扫描影检测设备"},
          {img: "/static/equ/jiancha/pic2.jpg", title: "成品显微检测"},
          {img: "/static/equ/jiancha/pic3.jpg", title: "品质检验中心"},
          {img: "/static/equ/jiancha/pic4.jpg", title: "品质检验中心"},
          {img: "/static/equ/jiancha/pic5.jpg", title: "品质检验中心"},
          {img: "/static/equ/jiancha/pic6.jpg", title: "品质检验中心"},
        ],
        text: [
          {img: "/static/equ/text/pic1.jpg", title: "耐磨性测试"},
          {img: "/static/equ/text/pic2.jpg", title: "耐磨性测试"},
          {img: "/static/equ/text/pic3.jpg", title: "测试中心"},
          {img: "/static/equ/text/pic4.jpg", title: "测试中心"},
          {img: "/static/equ/text/pic5.jpg", title: "测试中心"},
          {img: "/static/equ/text/pic6.jpg", title: "测试中心"},
        ],
        show: [],
      }
    },
    mounted() {
      this.show = this.classImg;
    }
    ,
    methods: {
      handleSelect(key, keyPath) {
        switch (key){
          case "1":
            this.show = this.classImg;
            break;
          case "2":
            this.show = this.cnc;
            break;
          case "3":
            this.show = this.jinGangShi;
            break;
          case "4":
            this.show = this.jianCha;
            break;
          case "5":
            this.show = this.text;
            break;
        }
      }
    }
  }
</script>
