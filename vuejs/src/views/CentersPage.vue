<template>
  <div>
      <PageHeader title="Our Centers" className="about-page" />
      <CallToAction />
      <Centers />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import Centers from '@/components/Centers.vue'

export default {
  name: 'CenterPage',
  components: {

    CallToAction,
    PageHeader,
    Centers
    
  }
}
</script>
