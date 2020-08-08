declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue-carousel';
declare module 'aos';
declare module 'vue-paypal-checkout';
declare module 'vue-plugin-load-script';
declare module 'vue-slick-carousel';

interface Window {
  paypal?: any;
}