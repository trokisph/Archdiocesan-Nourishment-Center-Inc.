<template>
  <div>
      <PageHeader title="₱50 Monthly Pledge" className="about-page" />
      <Pledge50PesosMonthly />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import Pledge50PesosMonthly from '@/components/Pledge50PesosMonthly.vue'

export default {
  name: 'Pledge50PesosMonthlyPage',
  components: {
    CallToAction,
    PageHeader,
    Pledge50PesosMonthly

  }
}
</script>
