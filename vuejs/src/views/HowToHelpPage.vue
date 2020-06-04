<template>
  <div>
      <PageHeader title="How to Help Us" className="about-page" />
      <HowToHelpUs2 />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import HowToHelpUs2 from '@/components/HowToHelpUs2.vue'

export default {
  name: 'HowToHelpPage',
  components: {

    CallToAction,
    PageHeader,
    HowToHelpUs2

  }
}
</script>
