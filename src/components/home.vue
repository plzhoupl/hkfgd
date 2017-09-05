<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<template>
  <div id="home">
    <title-menu></title-menu>
    <top></top>
    <item></item>
    <Product></Product>
    <item></item>
    <equipment> </equipment>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
  import Top from './component/top.vue'
  import Foot from './component/foot.vue'
  import TitleMenu from './component/title.vue'
  import Equipment from './component/equipment.vue'
  import Item from './component/item.vue'
  import Product from './component/product.vue'
  import Contact from './component/contact.vue'
export default {
  name: 'home',
  data () {
    return {
      value: 0
    }
  },
  components: {
    Top,
    Foot,
    TitleMenu,
    Equipment,
    Item,
    Product,
    Contact,
  },
}
</script>
