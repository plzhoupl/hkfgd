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
  .layout-ceiling a{
    color: #ffffff;
  }
</style>
<template>
  <div id="top" class="clearfix">
    <Row>
    <ul class="layout-ceiling">
      <Col span="6" offset="4">
        <li class="left">您好，欢迎光临深圳市亨凯丰精密工业有限公司！</li>
      </Col>
      <Col span="6" offset="">
      <li class="right">联系电话：0755-29722733</li>
      </Col>
    </ul>
    </Row>
    <Row>
    <Menu mode="horizontal" theme="primary" active-name="1">
      <Col span="4" offset="2">
      <div class="layout-logo">
        <img src="../../assets/logo.png" alt="">
      </div>
      </Col>
      <Col span="16">
      <div class="layout-nav">
        <MenuItem name="1">
          首页
        </MenuItem>
        <MenuItem name="2">
          关于我们
        </MenuItem>
        <MenuItem name="3">
          产品中心
        </MenuItem>
        <MenuItem name="4">
          设备中心
        </MenuItem>
        <MenuItem name="5">
          人才招聘
        </MenuItem>
        <MenuItem name="6">
          在线留言
        </MenuItem>
        <MenuItem name="7">
          联系我们
        </MenuItem>
      </div>
      </Col>
    </Menu>
    </Row>
  </div>
</template>
