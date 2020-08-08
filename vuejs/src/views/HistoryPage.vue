<template>
  <div>
      <PageHeader title="History" className="about-page" />
      <History />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import History from '@/components/History.vue'

export default {
  name: 'HistoryPage',
  components: {
    CallToAction,
    PageHeader,
    History
  }
}
</script>
