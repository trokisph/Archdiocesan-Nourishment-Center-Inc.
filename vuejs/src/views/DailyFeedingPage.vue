<template>
  <div>
      <PageHeader title="Daily Feeding Program" className="programs-page" />
      <DailyFeedingProgram />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import DailyFeedingProgram from '@/components/DailyFeedingProgram.vue'

export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    DailyFeedingProgram

  }
}
</script>
