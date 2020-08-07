<template>
  <div>
      <PageHeader title="Donate Through Paymaya" className="about-page" />
      <DonatePaymaya />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import DonatePaymaya from '@/components/DonatePaymaya.vue'

export default {
  name: 'DonatePaymayaPage',
  components: {

    CallToAction,
    PageHeader,
    DonatePaymaya

  }
}
</script>
