<template>
  <div>
     
      <Banner />
      <WeNeedHelp />
      <HowToHelpUs />
      <OurPartners />
      <CallToAction />
  </div>
</template>

<script>
// @ is an alias to /src
import OurPartners from '@/components/OurPartners.vue'
import CallToAction from '@/components/CallToAction.vue'
import Banner from '@/components/Banner.vue'
import HowToHelpUs from '@/components/HowToHelpUs.vue'
import WeNeedHelp from '@/components/WeNeedHelp.vue'

export default {
  name: 'HomePage',
  components: {
    OurPartners,
    CallToAction,
    Banner,
    HowToHelpUs,
    WeNeedHelp
  }
}
</script>
