<style scoped>
  #detail40{
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
    margin-left: 15%;
  }
  h2{
    line-height: 52px;
  }
</style>

<template>
    <div id="detail40">
      <el-row>
        <el-col :span="14" :offset="5">
          <img src="/static/product/product40.jpg" alt="电镀金刚砂磨头25">
          <h2>电镀金刚砂磨头25</h2>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {};

        },
      mounted(){
        $(window).scrollTop(0);
      }
    }
</script>
