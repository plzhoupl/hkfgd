<template>
  <div id="app">
    <title-menu :menus="menus" :selectMenus="selectMenus" v-on:selectMenus="select"></title-menu>
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
  import TitleMenu from './components/component/title.vue'
  import Foot from './components/component/foot.vue'
  export default {
    name: 'app',
    data() {
      return {
        menus: ["首页", "关于我们", "产品中心", "设备中心", "人才招聘", "在线留言", "联系我们"],
        selectMenus: "首页"
      }
    },
    components: {
      TitleMenu,
      Foot,
    },
    methods: {
      select(menu) {
        this.selectMenus = menu;
        switch (menu) {
          case this.menus[0]:
            this.linkToHome('');
            break;
          case this.menus[1]:
            this.linkToHome('contact');
            break;
          case this.menus[2]:
            this.linkToHome('product');
            break;
          case this.menus[3]:
            this.linkToHome('equipment');
            break;
          case this.menus[4]:
            this.$router.push({path: '/zhaopin'});
            break;
          case this.menus[5]:
            this.linkToHome('write');
            break;
          case this.menus[6]:
            this.linkToHome('foot');
            break;
          default:
            this.$router.push({path: '/'});
        }
      }, linkToHome(item = '') {
        if (this.$route.name !== 'home'){
          this.$router.push({name: 'home', params: {menu:item}});
        }else{
          let height=0;
          switch (item){
            case'':
              height=0;
              break;
            case'contact':
              height=document.getElementById('contact').offsetTop-100;
              break;
            case'product':
              height=document.getElementById('product').offsetTop-100;
              break;
            case'equipment':
              height=document.getElementById('equipment').offsetTop-100;
              break;
            case'write':
              height=document.getElementById('write').offsetTop-100;
              break;
            case'foot':
              height=document.getElementById('foot').offsetTop-100;
              break;
          }
          $(window).scrollTop(height);

        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
