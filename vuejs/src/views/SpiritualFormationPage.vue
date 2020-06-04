<template>
  <div>
      <PageHeader title="Spiritual Formation" className="programs-page" />
      <SpiritualProgram />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import SpiritualProgram from '@/components/SpiritualProgram.vue'

export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    SpiritualProgram,
    
  }
}
</script>
