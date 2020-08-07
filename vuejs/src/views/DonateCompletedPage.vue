<template>
  <div>
      <PageHeader title="Thank you so much!" className="about-page" />
      
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src

import CallToAction from '@/components/CallToAction.vue'
import PageHeader from '@/components/PageHeader.vue'


export default {
  name: 'DonateCompletedPage',
  components: {

    CallToAction,
    PageHeader,
    

  }
}
</script>
