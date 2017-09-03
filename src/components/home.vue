<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<template>
  <div id="home">
    <top></top>
    <foot></foot>
  </div>
</template>

<script>
  import Top from './component/top.vue'
  import Foot from './component/foot.vue'
export default {
  name: 'home',
  data () {
    return {
      value: 0
    }
  },
  components: {
    Top,
    Foot
  },
}
</script>
