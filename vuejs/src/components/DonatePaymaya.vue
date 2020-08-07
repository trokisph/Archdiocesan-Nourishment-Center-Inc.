<template>
  <div>
    <div class="section">
		<div class="content-wrap">
			<div class="container">
				<div class="row">

					<div class="col-sm-8 col-md-8" data-aos="fade-up" :data-aos-delay="0">

           

					</div>

					<SidebarDonate />

				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script lang="ts">

import SidebarDonate from '@/components/SidebarDonate.vue'

export default {
  name : 'DonatePaymaya',
  components: {
	  SidebarDonate
  }
}
</script>
<style scoped lang="scss">

</style>
