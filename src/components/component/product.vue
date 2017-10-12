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
        <el-col style="margin: 20px" :span="5" v-for="img in showImg">
          <router-link :to="'/detail/' + img.id">
          <el-card class="card">
            <img :src="img.img" class="image" width="100px" height="200px">
            <div style="padding-top: 14px;color: #000">
              <span>{{ img.title }}</span>
            </div>
          </el-card>
        </router-link>
        </el-col>
      </el-row>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :page-size="8"
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
          {id:1,img: "/static/product/product1.jpg", title: "二砂二位磨头1-1"},
          {id:2,img: "/static/product/product2.jpg", title: "二砂二位磨头1-2"},
          {id:3,img: "/static/product/product3.jpg", title: "二砂二位磨头1-3"},
          {id:4,img: "/static/product/product4.jpg", title: "二砂三位磨头2-1"},
          {id:5,img: "/static/product/product5.jpg", title: "二砂三位磨头2-2"},
          {id:6,img: "/static/product/product6.jpg", title: "二砂三位磨头2-3"},
          {id:7,img: "/static/product/product7.jpg", title: "二砂四位磨头3-1"},
          {id:8,img: "/static/product/product8.jpg", title: "二砂四位磨头3-2"},
          {id:9,img: "/static/product/product9.jpg", title: "二砂四位磨头3-3"},
          {id:10,img: "/static/product/product10.jpg", title: "三砂三位磨头4-1"},
          {id:11,img: "/static/product/product11.jpg", title: "三砂三位磨头4-2"},
          {id:12,img: "/static/product/product12.jpg", title: "三砂三位磨头4-3"},
          {id:13,img: "/static/product/product13.jpg", title: "三砂五位磨头5-1"},
          {id:14,img: "/static/product/product14.jpg", title: "三砂五位磨头5-2"},
          {id:15,img: "/static/product/product15.jpg", title: "三砂五位磨头5-3"},
          {id:16,img: "/static/product/product16.jpg", title: "电镀金刚砂磨头1"},
          {id:17,img: "/static/product/product17.jpg", title: "电镀金刚砂磨头2"},
          {id:18,img: "/static/product/product18.jpg", title: "电镀金刚砂磨头3"},
          {id:19,img: "/static/product/product19.jpg", title: "电镀金刚砂磨头4"},
          {id:20,img: "/static/product/product20.jpg", title: "电镀金刚砂磨头5"},
          {id:21,img: "/static/product/product21.jpg", title: "电镀金刚砂磨头6"},
          {id:22,img: "/static/product/product22.jpg", title: "电镀金刚砂磨头7"},
          {id:23,img: "/static/product/product23.jpg", title: "电镀金刚砂磨头8"},
          {id:24,img: "/static/product/product24.jpg", title: "电镀金刚砂磨头9"},
          {id:25,img: "/static/product/product25.jpg", title: "电镀金刚砂磨头10"},
          {id:26,img: "/static/product/product26.jpg", title: "电镀金刚砂磨头11"},
          {id:27,img: "/static/product/product27.jpg", title: "电镀金刚砂磨头12"},
          {id:28,img: "/static/product/product28.jpg", title: "电镀金刚砂磨头13"},
          {id:29,img: "/static/product/product29.jpg", title: "电镀金刚砂磨头14"},
          {id:30,img: "/static/product/product30.jpg", title: "电镀金刚砂磨头15"},
          {id:31,img: "/static/product/product31.jpg", title: "电镀金刚砂磨头16"},
          {id:32,img: "/static/product/product32.jpg", title: "电镀金刚砂磨头17"},
          {id:33,img: "/static/product/product33.jpg", title: "电镀金刚砂磨头18"},
          {id:34,img: "/static/product/product34.jpg", title: "电镀金刚砂磨头19"},
          {id:35,img: "/static/product/product35.jpg", title: "电镀金刚砂磨头20"},
          {id:36,img: "/static/product/product36.jpg", title: "电镀金刚砂磨头21"},
          {id:37,img: "/static/product/product37.jpg", title: "电镀金刚砂磨头22"},
          {id:38,img: "/static/product/product38.jpg", title: "电镀金刚砂磨头23"},
          {id:39,img: "/static/product/product39.jpg", title: "电镀金刚砂磨头24"},
          {id:40,img: "/static/product/product40.jpg", title: "电镀金刚砂磨头25"},
          {id:41,img: "/static/product/product41.jpg", title: "电镀金刚砂磨头26"},
          {id:42,img: "/static/product/product42.jpg", title: "电镀金刚砂磨头27"},
          {id:43,img: "/static/product/product43.jpg", title: "电镀金刚砂磨头28"},
          {id:44,img: "/static/product/product44.jpg", title: "电镀金刚砂磨头29"},
          {id:45,img: "/static/product/product45.jpg", title: "电镀金刚砂磨头30"},
          {id:46,img: "/static/product/product46.jpg", title: "电镀金刚砂磨头31"},
          {id:47,img: "/static/product/product47.jpg", title: "电镀金刚砂磨头32"},
          {id:48,img: "/static/product/product48.jpg", title: "电镀金刚砂磨头33"},
          {id:49,img: "/static/product/product49.jpg", title: "电镀金刚砂磨头34"},
          {id:50,img: "/static/product/product50.jpg", title: "电镀金刚砂磨头35"},
          {id:51,img: "/static/product/product51.jpg", title: "电镀金刚砂磨头36"},
          {id:52,img: "/static/product/product52.jpg", title: "电镀金刚砂磨头37"},
          {id:53,img: "/static/product/product53.jpg", title: "电镀金刚砂磨头38"},
          {id:54,img: "/static/product/product54.jpg", title: "电镀金刚砂磨头39"},
          {id:55,img: "/static/product/product55.jpg", title: "电镀金刚砂磨头40"},
          {id:56,img: "/static/product/product56.jpg", title: "电镀金刚砂磨头41"},
          {id:57,img: "/static/product/product57.jpg", title: "电镀金刚砂磨头42"},
          {id:58,img: "/static/product/product58.jpg", title: "电镀金刚砂磨头43"},
          {id:59,img: "/static/product/product59.jpg", title: "电镀金刚砂磨头44"},
          {id:60,img: "/static/product/product60.jpg", title: "电镀金刚砂磨头45"},
          {id:61,img: "/static/product/product61.jpg", title: "电镀金刚砂磨头46"},
          {id:62,img: "/static/product/product62.jpg", title: "电镀金刚砂磨头47"},
          {id:63,img: "/static/product/product63.jpg", title: "电镀金刚砂磨头48"},
          {id:64,img: "/static/product/product64.jpg", title: "电镀金刚砂磨头49"},
          {id:65,img: "/static/product/product65.jpg", title: "电镀金刚砂磨头50"},
          {id:66,img: "/static/product/product66.jpg", title: "电镀金刚砂磨头包装盒"},
          {id:67,img: "/static/product/product67.jpg", title: "电镀金刚砂磨头包装盒"},
          {id:68,img: "/static/product/product68.jpg", title: "电镀金刚砂磨头包装盒"},
        ],
        showImg: [],
      }
    },mounted(){
      this.handleCurrentChange(1);
    },
    methods: {
      handleCurrentChange(val) {
        this.showImg=[];
        for (let i=0;i<8;i++){
          if (i+(val-1)*8<this.imgs.length){
            this.showImg.push(this.imgs[i+(val-1)*8]);
          }
        }
      },
    },
  }
</script>
