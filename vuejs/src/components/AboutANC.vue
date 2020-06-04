<template>
  <div>

<div class="section">
		<div class="content-wrap">
			<div class="container">
				<div class="row">

					<div class="col-sm-6 col-md-6">
						<h2 class="section-heading">
							Archdiocesan <span>Nourishment</span> Center
						</h2>

						<p>The Archdiocesan Nourishment Center or ANC is Catholic institution.</p>
						<p></p>
						
						<div class="spacer-30"></div>
						<router-link :to="{ name: 'StaffPage' }" class="btn btn-primary">MEET OUR STAFF</router-link>
						<div class="spacer-30"></div>

					</div>

					<div class="col-sm-6 col-md-6">
						
						<img src="../assets/images/anc-building.jpg" alt="" class="img-fluid img-border">

					</div>
					

				</div>

				<div class="spacer-70"></div>

				<div class="row">

					<div class="col-sm-3 col-md-3">
						<div class="rs-icon-funfact style-2">
							<div class="icon">
								<i class="fa fa-file-text-o"></i>
							</div>
							<div class="body-content">
								<h2>2</h2>
								<p class="uk18">Centers</p>
							</div>
						</div>
					</div>

					<div class="col-sm-3 col-md-3">
						<div class="rs-icon-funfact style-2">
							<div class="icon">
								<i class="fa fa-users"></i>
							</div>
							<div class="body-content">
								<h2>456</h2>
								<p class="uk18">Benefeciaries</p>
							</div>
						</div>
					</div>

					<div class="col-sm-3 col-md-3">
						<div class="rs-icon-funfact style-2">
							<div class="icon">
								<i class="fa fa-trophy"></i>
							</div>
							<div class="body-content">
								<h2>58</h2>
								<p class="uk18">Partners</p>
							</div>
						</div>
					</div>

					<div class="col-sm-3 col-md-3">
						<div class="rs-icon-funfact style-2">
							<div class="icon">
								<i class="fa fa-male"></i>
							</div>
							<div class="body-content">
								<h2>254</h2>
								<p class="uk18">Pledgers</p>
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
  name : 'AboutANC',
}
</script>
<style scoped lang="scss">

</style>
