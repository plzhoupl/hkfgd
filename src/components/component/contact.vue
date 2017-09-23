<style scoped>
  #contact{
    background: -webkit-linear-gradient(left top, #EFEFEF , #C8C7C5);
    background: -o-linear-gradient(bottom right, #EFEFEF, #C8C7C5);
    background: -moz-linear-gradient(bottom right, #EFEFEF, #C8C7C5);
    background: linear-gradient(to bottom right, #EFEFEF , #C8C7C5);
    padding: 60px 0;
  }
  h2{
    height: 100px;
    line-height: 120px;
    font-size: 22px;
    font-weight: bold;
  }
  p{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 32px;
    margin-bottom: 30px;
  }

</style>

<template>
  <div id="contact">
    <el-row>
      <el-col :span="12" :offset="6">
        <p>深圳市亨凯丰精密工业有限公司是从事金刚石磨具的专业生产厂家。亨凯丰始终关注新产品新技术的开发, 以技术为导向，以客户的满意为目标。公司通过不断引进国外先进的生产技术经验，坚持引进高素质、高技能人才，致力于电镀磨具的研究，开发和生产，主要生产的产品有雕刻机磨头，砥石砂轮，砂轮盘等，产品范围横跨手机玻璃、MP3玻璃、眼镜镜片、宝石玻璃、石材电子磁性材料、光学镜头、手表玻璃、蓝宝石玻璃、硬质合金、模具钢、磁性材料、特殊陶瓷、大理花岗石等深加工行业，其主打产品雕刻机磨头已畅销国内外。本着品质第一、诚信为本、客户至上的经营理念，以卓越的产品质量以及合理的价位在同行业和广大客户中得到了广泛好评和肯定。</p>
      </el-col>
    </el-row>
    <router-link to="/about">
      <el-button type="primary">查看详情</el-button>
    </router-link>
  </div>
</template>

<script>

</script>
