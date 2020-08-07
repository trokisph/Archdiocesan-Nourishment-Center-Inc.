<template>
  <div class="col-sm-4 col-md-4" data-aos="fade-up" :data-aos-delay="150">
    <div class="spacer-30"></div>

    <div class="rs-box-download block">
      <div class="body">
        <a
          href="https://drive.google.com/open?id=1NOCGdyn9X3YlUYNYcLKi0eRwtTGwvtzH"
          target="_blank"
        >
          <h3>Download Brochure</h3>Click here to download .PDF
        </a>
      </div>
    </div>

    <div class="rs-box-download block">
      <div class="body">
        <router-link :to="{name: 'DonatePaypal'}">
          <h3>Donate Through Paypal</h3>
        </router-link>
      </div>
    </div>

  <div class="rs-box-download block">
      <div class="body">
        <router-link :to="{name: 'PledgeOneDollarMonthly'}">
          <h3>$1 Monthly Pledge</h3>
        </router-link>
      </div>
    </div>

 <div class="rs-box-download block">
      <div class="body">
        <router-link :to="{name: 'Pledge50PesosMonthly'}">
          <h3>₱50 Monthly Pledge</h3>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "SidebarDonate",
};
</script>
<style scoped lang="scss">
</style>
