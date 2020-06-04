<template>
  <div>
      <PageHeader title="Testimonials" className="about-page" />
      <Testimonials />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'
import Testimonials from '@/components/Testimonials.vue'

export default {
  name: 'TestimonialsPage',
  components: {

    CallToAction,
    PageHeader,
    Testimonials

  }
}
</script>
