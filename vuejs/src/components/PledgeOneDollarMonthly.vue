<template>
  <div>
    <div class="section">
      <div class="content-wrap">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-8" data-aos="fade-up" :data-aos-delay="0">
              <h3>Your $1 Monthly Pledge will go a long way:</h3>
              <ul>
                <li>Feeding over 300 malnourished children</li>
                <li>Covid Response: Food Packs for Family Beneficiaries</li>
                <li>Educational Assistance (School Supplies)</li>
                <li>Medical and Dental Assistance</li>
                <li>Construction of Ma-a Dumpsite Center</li>
                <li>Construction of Bankerohan Center</li>
                <li>Construction of Tibungco Center</li>
                <li>Construction of more centers</li>
              </ul>
              <div id="paypal-button-container"></div>
            </div>

            <SidebarDonate />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SidebarDonate from "@/components/SidebarDonate.vue";

export default {
  name: "PledgeOneDollarMonthly",
  components: {
    SidebarDonate,
  },
  mounted() {

    setTimeout(function() {
      window.paypal.Buttons({
            style: {
              shape: "pill",
              color: "gold",
              layout: "vertical",
              label: "paypal",
            },
            createSubscription: function (data: any, actions: any) {
              return actions.subscription.create({
                plan_id: "P-4JW07951RH570101PL4WRD3Q",
              });
            },
            onApprove: function (data: any, actions: any) {
              alert(data.subscriptionID);
            },
          })
          .render("#paypal-button-container");

      }, 1000);
  
  },
  created() {
    let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src','https://www.paypal.com/sdk/js?client-id=ARnUgIj9Ic8-2NU0cRFIsxA_ri9v7AzXPYRkW44yyHFJq5Pj43yWbjiBxHK7jrPZOkPFn1EKApvVBONs&vault=true')
      document.head.appendChild(recaptchaScript);
  },
/*
  created() {
    this.$loadScript(
      "https://www.paypal.com/sdk/js?client-id=ARnUgIj9Ic8-2NU0cRFIsxA_ri9v7AzXPYRkW44yyHFJq5Pj43yWbjiBxHK7jrPZOkPFn1EKApvVBONs&vault=true"
    )
      .then(() => {
        paypal
          .Buttons({
            style: {
              shape: "pill",
              color: "gold",
              layout: "vertical",
              label: "paypal",
            },
            createSubscription: function (data: any, actions: any) {
              return actions.subscription.create({
                plan_id: "P-4JW07951RH570101PL4WRD3Q",
              });
            },
            onApprove: function (data: any, actions: any) {
              alert(data.subscriptionID);
            },
          })
          .render("#paypal-button-container");
      })
      .catch(() => {
        // Failed to fetch script
      });
  },
  */
};
</script>
<style scoped lang="scss">
</style>
