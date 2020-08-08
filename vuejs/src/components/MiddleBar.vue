<template>
  <div>
      <!-- MIDDLE BAR -->
		<div class="middlebar">
			<div class="container">
				
				
				<div class="contact-info">
					<!-- INFO 1 -->
					<div class="box-icon-1">
						<div class="icon">
							<div class="fa fa-envelope-o"></div>
						</div>
						<div class="body-content">
							<div class="heading">Mail :</div>
							anc.archdavao@gmail.com
						</div>
					</div>
					<!-- INFO 2 -->
					<div class="box-icon-1">
						<div class="icon">
							<div class="fa fa-phone"></div>
						</div>
						<div class="body-content">
							<div class="heading">Call Us :</div>
							+63 (82) 285-1524
						</div>
					</div>
					<!-- INFO 3 -->
					<div class="box-act">
						<router-link class="btn btn-lg btn-primary" :to="{ name: 'HowToHelpPage' }" >
						HOW TO HELP
						</router-link>	
					</div>
					
				</div>
			</div>
		</div>
  </div>
</template>

<script>

//import Home from '@/components/Home.vue'

export default {
  name: 'MiddleBar',
  components: {
    //Home
  }
}
</script>
<style scoped lang="scss">
.contact-info {
	margin-top: 10px;
}
.box-icon-1 .body-content {
	margin-top: 10px;
}
.box-icon-1 .box-act {
	margin-top: 0px;
}
</style>