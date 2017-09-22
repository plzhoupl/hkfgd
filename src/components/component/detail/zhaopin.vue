<style scoped>
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
  <div id="zhaopin">
    <h2>人才招聘</h2>
    <el-row>
      <el-col :span="12" :offset="8">
        <p v-for="item in items">{{item}}</p>
      </el-col>
    </el-row>
    <foot></foot>
  </div>
</template>

<script>
  import Foot from '../../component/foot.vue'

  export default {
    data() {
      return {
        value: 0,
        items:[
          '本公司为了业务发展需要，现特招聘以下职位：',
          '一. 化学分析师 1名',
          '岗位职责：',
          '1.负责化学实验室的化工材料化学成分分析，日常测试工作以及数据分析；',
          '2.参与或负责配制运营和生产所需要的试剂，对配方进行合理修正；',
          '3.承担研发部化学分析工作，为研发工程师提供依据。',
          '岗位要求：',
          '1.化学类相关专业专科以上学历；',
          '2.吃苦耐劳、责任心强，有较强的学习能力和团队合作精神；',
          '3.有从事化学分析相关工作经验优先。',
          '待遇：面议',
          '联系地址：深圳市宝安区福永街道凤凰第一工业区岭北4路2号3楼',
          '联系电话：18928444977/0755-29722733 联系人：左先生',
        ]
      }

    },
    components: {
      Foot,
    },
  }
</script>
