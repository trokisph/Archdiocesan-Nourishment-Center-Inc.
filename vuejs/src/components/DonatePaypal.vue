<template>
  <div>
    <div class="section">
		<div class="content-wrap">
			<div class="container">
				<div class="row">

					<div class="col-sm-8 col-md-8" data-aos="fade-up" :data-aos-delay="0">

<h3>Your donation will go a long way:</h3>
			  <ul>
			  	<li>Feeding over 300 malnourished children</li>
			  	<li>Covid Response: Food Packs for Family Beneficiaries</li>
			  	<li>Educational Assistance (School Supplies)</li>
				<li>Medical and Dental Assistance</li>
			  	<li>Construction of Ma-a Dumpsite Center</li>
			  	<li>Construction of Bankerohan Center</li>
			  	<li>Construction of Tibungco Center</li>
				<li>Construction of more centers</li>
			  </ul>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
	<input type="hidden" name="cmd" value="_s-xclick" />
	<input type="hidden" name="hosted_button_id" value="GTAB78PA6ETKC" />
	<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
	<img alt="" border="0" src="https://www.paypal.com/en_PH/i/scr/pixel.gif" width="1" height="1" />
</form>


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
  name : 'DonatePaypal',
  components: {
	  SidebarDonate
  }
}
</script>
<style scoped lang="scss">

</style>
