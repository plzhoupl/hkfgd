<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .text{
    position: absolute;
    z-index: 9999;
    font: "Microsoft YaHei";
    color: white;
    margin-left: 10%;
    margin-top: 250px;
    text-align: start;
  }
  .text .cn{
    line-height: 70px;
    font-size: 50px;
  }
  .text .en{
    line-height: 50px;
    font-size: 30px;
  }

</style>
<template>
  <el-carousel :interval="5000" arrow="always" height="600px">
    <el-carousel-item >
      <img style="float: left;" src="../../assets/ic_bg_1.jpg" height="600px" width="100%"/>
      <div class="text">
        <span class="cn">亨凯丰精密工业 · 科技成就完美未来</span><br/>
        <span class="en">HENGKAIDING PRECISION INDUSTRY</span><br/>
        <span class="en">QUALIT UACHIEVEMENTS</span>
      </div>
    </el-carousel-item>
    <el-carousel-item >
      <img style="float: left;" src="../../assets/ic_bg_2.png" height="600px" />
      <div class="text">
        <span class="cn">行业领先 · 质量第一 价格优惠 服务至上</span><br/>
        <span class="en">HENGKAIDING PRECISION INDUSTRY</span><br/>
        <span class="en">QUALIT UACHIEVEMENTS</span>
      </div>
    </el-carousel-item>
    <el-carousel-item >
      <img style="float: left;" src="../../assets/ic_bg_3.jpg" height="600px"/>
      <div class="text">
        <span class="cn">合作共赢 · 为客户创造价值</span><br/>
        <span class="en">HENGKAIDING PRECISION INDUSTRY</span><br/>
        <span class="en">QUALIT UACHIEVEMENTS</span>
      </div>
    </el-carousel-item>

  </el-carousel>
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
