<style scoped>
  #detail5{
    width: 1200px;
    box-shadow:0 10px 5px #888888,0 0 5px #888888,0 0 5px #888888;
    background-color: #F1EAEB;
    padding: 80px 0;
    margin: 30px auto 100px;
  }
  img{
    width: 265px;
    padding: 30px;
    border: 2px solid #000;
    background-color: #ffffff;
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
    <div id="detail5">
      <el-row>
        <el-col :span="14" :offset="5">
          <img src="/static/product/product5.jpg" alt="二砂三位磨头2-2">
          <h2>二砂三位磨头2-2</h2>
          <p v-for="detail in details">{{detail}}</p>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              details:[
                '技术参数：',
                '产品品牌：亨凯丰',
                '规格型号：二砂三位',
                '基料材质：钨钢/Y15',
                '磨料材质：人造金刚石',
                '粘合剂：电镀镍层/化学镀',
                '粒度：W150-W1500',
                '形状：多种非标定制',
                '适用范围：手机玻璃钻孔、导边等磨削加工',
                '电镀金刚石砂轮的优点：',
                '天然金刚石的粘结比较牢固，耐磨性高；',
                '加工成型精度极高；',
                '工作速度极快，生产效率高；',
                '工作寿命较高；',
                '对于精度要求较高的滚轮和砂轮，电镀是唯一的制造方法。',
                '产品广泛用于手机玻璃、触摸屏、光学镜头、棱镜、手表玻璃、蓝宝石玻璃等各种工件进行加工,以达到钻孔、磨削、打磨、抛光的效果。'
              ]
            };

        },
      mounted(){
        $(window).scrollTop(0);
      }
    }
</script>
