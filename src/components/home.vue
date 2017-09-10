<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<template>
  <div id="home">
    <top></top>
    <item :en="'Product center'" :cn="'产品中心'"></item>
    <Product></Product>
    <item :en="'Equipment center'" :cn="'设备中心'"></item>
    <equipment> </equipment>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
  import Top from './component/top.vue'
  import Foot from './component/foot.vue'
  import Equipment from './component/equipment.vue'
  import Item from './component/item.vue'
  import Product from './component/product.vue'
  import Contact from './component/contact.vue'
export default {
  name: 'home',
  data () {
    return {
      value: 0,
  }
  },
  components: {
    Top,
    Foot,
    Equipment,
    Item,
    Product,
    Contact,
  },

}
</script>
