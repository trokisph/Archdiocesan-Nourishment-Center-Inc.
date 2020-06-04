<template>
  <div>
      <PageHeader title="Events" className="events-page" />
      <Events />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import Events from '@/components/Events.vue'

export default {
  name: 'EventsPage',
  components: {

    CallToAction,
    PageHeader,
    Events

  }
}
</script>
