<template>
  <div>
    	<!-- CTA -->
	<div class="section cta">
		<div class="content-wrap-20">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12">
						<div class="cta-1">
			              	<div class="body-text" data-aos="fade-up" :data-aos-delay="0">
			                	<h3>Join your hand with us for a better life and beautiful future.</h3>
			              	</div>
			              	<div class="body-action" data-aos="fade-up" :data-aos-delay="150">
			                
									<router-link class="btn btn-secondary" :to="{ name: 'HowToHelpPage' }" >
									HOW TO HELP
									</router-link>
			              	</div>
			            </div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
export default {
  name : 'CallToAction',
}
</script>
<style scoped lang="scss">

</style>
