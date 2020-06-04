<template>
  <div>
      <PageHeader title="Medical & Dental Services" className="programs-page" />
      <MedicalDentalProgram />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import MedicalDentalProgram from '@/components/MedicalDentalProgram.vue'

export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    MedicalDentalProgram

  }
}
</script>
