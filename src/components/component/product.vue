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

  .img {
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
  }
  .card{
    cursor: pointer;
    transition: all 0.6s;
  }
  .card:hover{
    transform: scale(1.1);
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
        <el-col style="margin: 20px" :span="7" v-for="img in showImg">
          <el-card class="card" >
            <img :src="img.img" class="image" width="100px"height="200PX">
            <div style="padding-top: 14px;">
              <span>{{ img.title }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :page-size="6"
          :total="imgs.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: '电镀金刚石磨头',
        currentDate: new Date(),
        imgs: [
          {img: "/static/product/product1.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product2.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product3.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product4.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product5.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product6.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product7.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product8.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product9.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product10.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product11.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product12.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product13.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product14.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product15.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product16.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product17.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product18.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product19.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product20.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product21.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product22.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product23.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product24.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product25.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product26.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product27.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product28.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product29.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product30.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product32.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product33.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product34.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product35.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product36.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product37.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product38.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product39.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product40.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product41.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product42.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product43.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product44.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product45.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product46.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product47.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product48.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product49.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product50.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product51.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product52.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product53.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product54.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product55.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product56.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product57.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product58.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product59.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product60.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product61.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product62.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product63.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product64.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product65.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product66.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product67.jpg", title: "电镀金刚石磨头"},
          {img: "/static/product/product68.jpg", title: "包装盒"},
          {img: "/static/product/product69.jpg", title: "包装盒"},
          {img: "/static/product/product70.jpg", title: "包装盒"},
          {img: "/static/product/product71.jpg", title: "包装盒"},
        ],
        showImg: [],
      }
    },mounted(){
      this.handleCurrentChange(1);
    }
    , methods: {
      handleCurrentChange(val) {
        this.showImg=[];
        for (let i=0;i<6;i++){
          if (i+(val-1)*6<this.imgs.length){
            this.showImg.push(this.imgs[i+(val-1)*6]);
          }
        }
      }
    },
  }
</script>
