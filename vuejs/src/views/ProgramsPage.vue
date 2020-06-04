<template>
  <div>
      <PageHeader title="Programs & Services" className="programs-page" />
      <Programs />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import Programs from '@/components/Programs.vue'

export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    Programs
  }
}
</script>
