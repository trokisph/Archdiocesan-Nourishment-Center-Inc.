<template>
  <div>
      <PageHeader title="Contact Us" className="contact-page" />
      <Contact />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import Contact from '@/components/Contact.vue'
import PageHeader from '@/components/PageHeader.vue'

export default {
  name: 'ContactPage',
  components: {
    CallToAction,
    Contact,
    PageHeader
  }
}
</script>
<style scoped lang="scss">

</style>
