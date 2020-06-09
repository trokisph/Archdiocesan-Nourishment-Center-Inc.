<template>
  <div>
	<!-- BANNER -->

  <carousel :perPage="1" :autoplay="true" :autoplayTimeout="3000">
  <slide>
      <img src="../assets/images/feed-a-child-3.jpg" alt="Slider">
  </slide>
  <slide>
      <img src="../assets/images/feed-a-child-2.jpg" alt="Slider">
  </slide>
  <slide>
      <img src="../assets/images/feed-a-child.jpg" alt="Slider">
  </slide>
</carousel>

	<div class="clearfix"></div>
  </div>
</template>

<script lang="ts">
import { Carousel, Slide } from 'vue-carousel';

export default {
  name : 'Banner',
  components : {
	  Carousel,
    Slide
  }
}
</script>
<style scoped lang="scss">

</style>
