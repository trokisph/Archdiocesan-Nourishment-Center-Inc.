<template>
  <div>
      <PageHeader title="Our Staff" className="about-page" />
      <OurStaff />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import OurStaff from '@/components/OurStaff.vue'

export default {
  name: 'StaffPage',
  components: {

    CallToAction,
    PageHeader,
    OurStaff

  }
}
</script>
