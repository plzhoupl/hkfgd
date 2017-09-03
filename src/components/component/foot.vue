<style scoped>
  #foot {
    padding: 20px 0;
    font-size: 14px;
  }

  p {
    height: 52px;
    line-height: 52px;
    background-color: #20A0FF;
    color: #ffffff;
  }

  a:hover {
    text-decoration: underline;
  }

  ul li {
    text-align: left;
    line-height: 24px;
    color: #8A837F;
  }
  ul li a{
    color: #8A837F;
  }
  .el-row{
    margin-bottom: 20px;
  }
</style>
<template>
  <div id="foot">
    <div class="clearfix">
      <el-row :gutter="20">
        <el-col :span="5" :offset="5">
          <ul class="left">
            <li><img src="../../assets/logo.png" alt=""></li>
            <li>公司秉承“科技兴厂，不断创新”的愿景，打造磨具行业标杆。</li>
          </ul>
        </el-col>
        <el-col :span="2" :offset="1">
          <ul class="left">
            <li><a href="">首 页</a></li>
            <li><a href="">关于我们</a></li>
            <li><a href="">产品中心</a></li>
            <li><a href="">设备中心</a></li>
          </ul>
        </el-col>
        <el-col :span="2">
          <ul class="left">
            <li><a href="">人才招聘</a></li>
            <li><a href="">在线留言</a></li>
            <li><a href="">联系我们</a></li>
          </ul>
        </el-col>
        <el-col :span="4">
          <ul class="left">
            <li style="color: #007AFF;font-size: 20px;font-weight: bold">0755-29722733</li>
            <li>公司地址：深圳市宝安区福永街道凤凰第一工业区岭北4路2号3楼</li>
            <li>联系人：左先生</li>
            <li>电话：18928444977</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <p>版权所有：深圳市亨凯丰精密工业有限公司 &nbsp;Copyright 2012 hengkaifeng.All Rights Reserved</p>
  </div>
</template>
