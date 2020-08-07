<template>
  <div>
      <PageHeader title="Donate Through Paypal" className="about-page" />
      <DonatePaypal />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import DonatePaypal from '@/components/DonatePaypal.vue'

export default {
  name: 'DonatePaypalPage',
  components: {

    CallToAction,
    PageHeader,
    DonatePaypal

  }
}
</script>
