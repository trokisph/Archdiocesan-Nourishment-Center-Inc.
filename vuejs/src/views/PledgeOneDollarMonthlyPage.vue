<template>
  <div>
      <PageHeader title="$1 Monthly Pledge" className="about-page" />
      <PledgeOneDollarMonthly />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import PledgeOneDollarMonthly from '@/components/PledgeOneDollarMonthly.vue'

export default {
  name: 'PledgeOneDollarMonthlyPage',
  components: {
    CallToAction,
    PageHeader,
    PledgeOneDollarMonthly

  }
}
</script>
