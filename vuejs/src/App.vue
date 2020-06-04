<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
  @import 'assets/css/vendor/bootstrap.min.css';
  @import 'assets/css/vendor/font-awesome.min.css';
  @import 'assets/css/vendor/owl.carousel.min.css';
  @import 'assets/css/vendor/owl.theme.default.min.css';
  @import 'assets/css/vendor/magnific-popup.css';
  @import 'assets/css/vendor/animate.css';
  @import 'assets/css/sass/style.scss';

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
