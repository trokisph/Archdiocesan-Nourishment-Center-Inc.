<template>
  <div>
      <PageHeader title="Parents Collaboration" className="programs-page" />
      <ParentsCollabProgram />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import ParentsCollabProgram from '@/components/ParentsCollabProgram.vue'


export default {
  name: 'ProgramsPage',
  components: {

    CallToAction,
    PageHeader,
    ParentsCollabProgram

  }
}
</script>
