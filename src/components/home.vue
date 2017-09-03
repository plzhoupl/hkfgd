<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
<template>
  <div id="home">
    <title-menu></title-menu>
    <top></top>
    <Carousel autoplay v-model="value">
      <CarouselItem>
        <div class="demo-carousel">
          <img src="http://www.tsdgd.com/upfile/2013101016187741.jpg" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="http://www.tsdgd.com/upfile/2013101016187741.jpg" alt="">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">
          <img src="http://www.tsdgd.com/upfile/2013101016187741.jpg" alt="">
        </div>
      </CarouselItem>
    </Carousel>
    <foot></foot>
  </div>
</template>

<script>
  import Top from './component/top.vue'
  import Foot from './component/foot.vue'
  import TitleMenu from './component/title.vue'
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
  },
}
</script>
