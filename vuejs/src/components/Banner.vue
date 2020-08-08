<template>
  <div>
	<!-- BANNER -->

  <carousel 
    perPage="1" 
    autoplay="true" 
    autoplayTimeout="10000"
    loop="true"
    speed="1000"
  >
  <slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image" alt="Slider">
      <div class="wrap-caption">
          <h1 class="caption-heading" :style="slide.style">"{{ slide.quote }}"</h1>
          <p class="bg">{{ slide.author }}</p>
      </div>
  </slide>
</carousel>

	<div class="clearfix"></div>
  </div>
</template>

<script lang="ts">
import { Carousel, Slide } from 'vue-carousel';

export default {
  name : 'Banner',
  data() {
    return {
      slides:[
        {
          image : require('@/assets/images/feed-a-child-3.jpg'),
          quote: 'If you can’t feed a hundred people, then feed just one.',
          author: 'Mother Teresa',
          size: ''
        },
        {
          image : require('@/assets/images/daily-feeding-1.jpg'),
          quote: 'I never look at the masses as my responsibility. I look at the individual. I can love only one person at a time. I can feed only one person at a time. Just one, one, one.',
          author: 'Mother Teresa',
          style: 'font-size:30px'
        },
        {
          image : require('@/assets/images/feed-a-child-2.jpg'),
          quote: 'When a poor person dies of hunger it has not happened because God did not take care of him or her. It has happened because neither you nor I wanted to give that person what he or she needed.',
          author: 'Mother Teresa',
          style: 'font-size:30px'
        },
        {
          image : require('@/assets/images/feed-a-child.jpg'),
          quote: 'The fight against poverty and hunger must be fought constantly and on many fronts, especially in its causes.',
          author: 'Pope Francis',
          style: 'font-size:40px'
        },
        {
          image : require('@/assets/images/banner1.jpg'),
          quote: 'Many things can wait. Children cannot. Today their bones are being formed, their blood is being made, their senses are being developed. To them we cannot say `tomorrow`. Their name is today.',
          author: 'Mother Teresa',
          style: 'font-size:30px'
        },
        {
          image : require('@/assets/images/banner2.jpg'),
          quote: 'If you want to eliminate hunger, everybody has to be involved.',
          author: 'Bono',
          style: ''
        },
        {
          image : require('@/assets/images/banner3.jpg'),
          quote: 'Pay attention to the hungry, both in this country and around the world. Pay attention to the poor. Pay attention to our responsibilities for world peace. We are our brother’s keeper…',
          author: 'George McGovern',
          style: 'font-size:30px'
        },
        {
          image : require('@/assets/images/banner4.jpg'),
          quote: 'If we can conquer space, we can conquer childhood hunger.',
          author: 'Buzz Aldrin',
          style: ''
        },
      ]
    }
  },
  components : {
	  Carousel,
    Slide,
  }
}
</script>
<style scoped lang="scss">
.VueCarousel-slide img {
  opacity: 0.5;
  max-height: 100vh;
  display: block;
}
.VueCarousel-slide {
  position: relative;
}
.wrap-caption {
    position: absolute;
    z-index: 999;
    top: 15%;
    left: 15%;
    color: #000;
    background-color: rgb(151 43 71 / 0.3);
    padding: 20px 50px;
}
.wrap-caption h1{
  color:white;
  text-shadow: 1px 1px 1px #000;
}

.wrap-caption.center {
    width: 80%;
    margin: 0 auto;
    text-align: center
}

.wrap-caption.right {
    left: initial;
    right: 15%!important;
}

.wrap-caption .excerpt {
    margin-bottom: 50px;
    font-size: 18px
}
.wrap-caption .bg {
  font-size: 25px;
}

.wrap-caption .btn,
.wrap-caption .btn-primary,
.wrap-caption .btn-secondary,
.wrap-caption .btn-light,
.wrap-caption .btn-grey,
.wrap-caption .rs-nav-tabs .nav-pills .nav-link,
.rs-nav-tabs .nav-pills .wrap-caption .nav-link,
.wrap-caption .rs-nav-tabs .nav-pills li a,
.rs-nav-tabs .nav-pills li .wrap-caption a,
.wrap-caption .btn-ghost-light,
.wrap-caption .btn-ghost-dark {
    margin-right: 15px
}

.VueCarousel-pagination {
  margin-top: -100px!important;
}
</style>
