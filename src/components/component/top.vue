<style scoped>
  .layout-logo{
    float: left;
    position: relative;
    margin-top: 10px;
  }
  .layout-nav{
    float: right;
  }
  .ivu-menu-horizontal {
    height: 101px;
    line-height: 101px;
    padding: 0 60px;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
    color: #ffffff;
    font-size: 14px;
  }
</style>
<template>
  <div id="top" class="clearfix">
    <!--<Row>-->
    <!--<ul class="layout-ceiling">-->
      <!--<Col span="6" offset="4">-->
        <!--<li class="left">您好，欢迎光临深圳市亨凯丰精密工业有限公司！</li>-->
      <!--</Col>-->
      <!--<Col span="6" offset="">-->
      <!--<li class="right">联系电话：0755-29722733</li>-->
      <!--</Col>-->
    <!--</ul>-->
    <!--</Row>-->
    <!--<Row>-->
    <!--<Menu mode="horizontal" theme="primary" active-name="1">-->
      <!--<Col span="4" offset="2">-->
      <!--<div class="layout-logo">-->
        <!--<img src="../../assets/logo.png" alt="">-->
      <!--</div>-->
      <!--</Col>-->
      <!--<Col span="16">-->
      <!--<div class="layout-nav">-->
        <!--<MenuItem name="1">-->
          <!--首页-->
        <!--</MenuItem>-->
        <!--<MenuItem name="2">-->
          <!--关于我们-->
        <!--</MenuItem>-->
        <!--<MenuItem name="3">-->
          <!--产品中心-->
        <!--</MenuItem>-->
        <!--<MenuItem name="4">-->
          <!--设备中心-->
        <!--</MenuItem>-->
        <!--<MenuItem name="5">-->
          <!--人才招聘-->
        <!--</MenuItem>-->
        <!--<MenuItem name="6">-->
          <!--在线留言-->
        <!--</MenuItem>-->
        <!--<MenuItem name="7">-->
          <!--联系我们-->
        <!--</MenuItem>-->
      <!--</div>-->
      <!--</Col>-->
    <!--</Menu>-->
    <!--</Row>-->
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
