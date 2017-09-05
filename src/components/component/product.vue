<style scoped>

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<template>
  <div id="product">
    <el-radio-group size="large" v-model="item">
      <el-radio-button label="电镀金刚石磨头"></el-radio-button>
      <el-radio-button label="电镀金刚石砂轮"></el-radio-button>
    </el-radio-group>
    <div class="img">
      <el-row>
        <el-col style="padding: 100px 200px 100px 200px" :span="8" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 0 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img  src="../../assets/product_1.jpg" class="image" width="100px">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        item: '电镀金刚石磨头',
        currentDate: new Date()
      };
    }
  }
</script>
