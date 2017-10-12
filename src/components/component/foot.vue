<style scoped>
  #foot {
    color: #ffffff;
    padding: 20px 0;
    font-size: 16px;
    background: -webkit-linear-gradient(left top, #315181 , #2A245D);
    background: -o-linear-gradient(bottom right, #315181, #2A245D);
    background: -moz-linear-gradient(bottom right, #315181, #2A245D);
    background: linear-gradient(to bottom right, #315181 , #2A245D);
  }

  p {
    height: 52px;
    line-height: 80px;
  }

  a:hover {
    text-decoration: underline;
  }

  ul li {
    text-align: left;
    line-height: 24px;
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
        <el-col :span="5" :offset="4">
          <ul class="left">
            <li><img src="../../assets/logo.png" alt=""></li>
            <li>公司秉承“科技兴厂，不断创新”的愿景，打造磨具行业标杆。</li>
          </ul>
        </el-col>
        <el-col :span="9" :offset="2">
          <ul class="left">
            <li style="font-size: 22px;letter-spacing: 3px">深圳市亨凯丰精密工业有限公司</li>
            <li style="font-size: 14px;">SHENZHEN CITY HENGKAIFENG PRECISION INDUSTRY CO.,LTD.</li>
            <li>电话：0755-36528911 &nbsp; 0755-32920289</li>
            <li>网址：www.szshkf.com</li>
            <li>邮箱：szhkf20170726@163.com</li>
            <li>地址：深圳市宝安区福永街道凤凰第一工业区岭北4路2号3楼301号</li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <p>版权所有：深圳市亨凯丰精密工业有限公司 &nbsp;Copyright 2017 hengkaifeng.All Rights Reserved</p>
  </div>
</template>
<script>
  export default {
    mounted() {
      $(window).scrollTop(0);
    }
  }
</script>
