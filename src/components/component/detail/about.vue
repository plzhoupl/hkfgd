<style scoped>
  #about{
    width: 1200px;
    box-shadow:0 10px 5px #888888,0 0 5px #888888,0 0 5px #888888;
    background-color: #F1EAEB;
    padding: 80px 0;
    margin: 30px auto 100px;
  }
  p {
    text-align: left;
    line-height: 36px;
    text-indent: 2em;
  }

  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  #foot{
    margin-top: 20px;
  }
</style>

<template>
  <div id="about">
    <h2>关于我们</h2>
    <el-row>
      <el-col :span="16" :offset="4">
        <p v-for="array in arrays">{{array}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 0,
        arrays:[
          '深圳市亨凯丰精密工业有限公司是从事金刚石磨具的专业生产厂家。 亨凯丰始终关注新产品新技术的开发, 以技术为导向，以客户的满意为目标。公司通过不断引进国外先进的生产技术经验，坚持引进高素质、高技能人才，致力于电镀磨具的研究，开发和生产，主要生产的产品有雕刻机磨头，砥石砂轮，砂轮盘等，产品范围横跨手机玻璃、MP3玻璃、眼镜镜片、宝石玻璃、石材电子磁性材料、光学镜头、手表玻璃、蓝宝石玻璃、硬质合金、模具钢、磁性材料、特殊陶瓷、大理花岗石等深加工行业，其主打产品雕刻机磨头已畅销国内外。本着品质第一、诚信为本、客户至上的经营理念，以卓越的产品质量以及合理的价位在同行业和广大客户中得到了广泛好评和肯定。',
          '公司愿景：科技兴厂，不断创新，打造磨具行业标杆。',
          '公司使命：员工满意&客户满意&股东满意。',
          '公司价值观：专注：集中精力首先做好一件事情，然后做下一件事情，不贪不燥。',
          '执着：坚持到底，不放弃。',
          '极致：力争将结果不断地做到极致。',
          '联系人：左先生',
          '联系电话：18928444977 固话号码：0755-36528911',
        ]
      }
    },
    mounted(){
      $(window).scrollTop(0);
    }
  }
</script>
