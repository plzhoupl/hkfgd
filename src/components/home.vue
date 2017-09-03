<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<template>
  <div id="home">
    <title-menu></title-menu>
    <top></top>
    <contact></contact>
    <foot></foot>
  </div>
</template>

<script>
  import Top from './component/top.vue'
  import Foot from './component/foot.vue'
  import TitleMenu from './component/title.vue'
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
    Contact,
  },
}
</script>
