<template>
  <div id="app">
    <title-menu :menus="menus" :selectMenus="selectMenus" v-on:selectMenus="select"></title-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import TitleMenu from './components/component/title.vue'

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
    },
    methods: {
      select(menu) {
        this.selectMenus = menu;
        switch (menu) {
          case this.menus[0]:
            this.linkToHome('');
            break;
          case this.menus[1]:
            this.$router.push({path: '/about'});
            break;
          case this.menus[2]:
            this.linkToHome('product');
            break;
          case this.menus[3]:
            this.linkToHome('equipment');
            //     $(window).scrollTop(1500);
            break;
          case this.menus[4]:
            this.$router.push({path: '/zhaopin'});
            break;
          case this.menus[5]:
            this.$router.push({path: '/zhaopin'});
            break;
          case this.menus[6]:
            this.$router.push({path: '/zhaopin'});
            break;
          default:
            this.$router.push({path: '/'});
        }
      }, linkToHome(item = '') {
        if (this.$route.name !== 'home'){
          this.$router.push({path: '/',params:{title:'product'}});
        }else{
          let height=0;
          switch (item){
            case'':
            height=0;
              break;
            case'equipment':
              height=document.getElementById('equ').offsetTop-100;
              break;
            case'product':
              height=document.getElementById('product').offsetTop-100;
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
