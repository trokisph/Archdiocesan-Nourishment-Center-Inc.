<template>
  <div>
      <PageHeader title="Make a Pledge" className="about-page" />
      <Pledges />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import Pledges from '@/components/Pledges.vue'

export default {
  name: 'PledgesPage',
  components: {

    CallToAction,
    PageHeader,
    Pledges

  }
}
</script>
