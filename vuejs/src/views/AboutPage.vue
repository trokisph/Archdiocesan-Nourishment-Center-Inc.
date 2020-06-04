<template>
  <div>
      <PageHeader title="About ANC" className="about-page" />
      <AboutANC />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src
import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import AboutANC from '@/components/AboutANC.vue'

export default {
  name: 'AboutPage',
  components: {
    CallToAction,
    PageHeader,
    AboutANC
  }
}
</script>
