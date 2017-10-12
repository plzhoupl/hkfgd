<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .suspend{
    width: 40px;
    height: 198px;
    position: fixed;
    top: 200px;
    right: 0;
    overflow: hidden;
    z-index: 9999;
  }
  .suspend:hover{
    width: 160px;
  }
</style>
<template>
  <div id="home">
    <div class="suspend">
      <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=2373975266&amp;site=qq&amp;menu=yes"><img src="../../src/assets/suspend.png" alt="点击这里给我发消息" title="点击这里给我发消息"></a>
    </div>
    <top></top>
    <item :en="'Product center'" :cn="'产品中心'"></item>
    <Product></Product>
    <item :en="'Equipment center'" :cn="'设备中心'"></item>
    <equipment></equipment>
    <item :en="'About us'" :cn="'关于我们'"></item>
    <contact></contact>
    <item :en="'Online message'" :cn="'在线留言'"></item>
    <write></write>
    <item :en="'Contact us'" :cn="'联系我们'"></item>
  </div>
</template>

<script>
  import Top from './component/top.vue'
  import Equipment from './component/equipment.vue'
  import Item from './component/item.vue'
  import Product from './component/product.vue'
  import Contact from './component/contact.vue'
  import Write from './component/write.vue'

  export default {
    name: 'home',
    data() {
      return {
        value: 0,
      }
    },
    components: {
      Top,
      Equipment,
      Item,
      Product,
      Contact,
      Write,
    },
    mounted() {
      let height = 0;
      switch (this.$route.params.menu) {
        case'':
          break;
        case'equipment':
          height = document.getElementById('equ').offsetTop - 100;
          break;
        case'product':
          height = document.getElementById('product').offsetTop - 100;
          break;
      }
      $(window).scrollTop(height);
    }

  }
</script>
