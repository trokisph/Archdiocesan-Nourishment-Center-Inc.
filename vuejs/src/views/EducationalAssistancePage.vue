<template>
  <div>
      <PageHeader title="Educational Assistance" className="programs-page" />
      <EducationalProgram />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import EducationalProgram from '@/components/EducationalProgram.vue'

export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    EducationalProgram,

  }
}
</script>
