<template>
  <div>
      <PageHeader title="Livelihood Program" className="programs-page" />
      <LivelihoodProgram />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import LivelihoodProgram from '@/components/LivelihoodProgram.vue'

export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    LivelihoodProgram
  }
}
</script>
