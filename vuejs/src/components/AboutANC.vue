<template>
  <div>

<div class="section">
		<div class="content-wrap">
			<div class="container">


<div class="row">

					<div class="col-sm-6 col-md-6">
						<h2 class="section-heading">
							Archdiocesan <span>Nourishment</span> Center, Inc.
						</h2>
						<h3>Vision</h3>
						<p>We envision a nourishment center of children from the peripheries that is God-centered, service oriented and community based.</p>
						<p>We also envision the children/beneficiaries of the Archdiocesan Nourishment Center to become successful members of society, actively contributing to nation-building.</p>
						<h3>Mission</h3>
						<p>We commit ourselves:</p>
						<ul>
							<li>To provide a well-integrated program of psycho-spiritual and physical nourishment for the children in need</li>
							<li>To organize the volunteers from different sectors and create networks and linkages of existing institutions with similar thrusts</li>
							<li>To foster collaboration among parents of the beneficiaries at their communities</li>
							<li>To conduct an on-going fundraising projects and activities in order to sustain its program.</li>
						</ul>

						<div class="spacer-30"></div>
						<router-link :to="{ name: 'HistoryPage' }" class="btn btn-primary history">HISTORY</router-link>
						<router-link :to="{ name: 'StaffPage' }" class="btn btn-primary">MEET OUR STAFF</router-link>
						<div class="spacer-30"></div>

					</div>

					<div class="col-sm-6 col-md-6">
						
						<img src="../assets/images/anc-building.jpg" alt="" class="img-fluid img-border">

<h3>GOALS</h3>
<ul>
<li>Feed malnourished and children in need.</li>
<li>Restore malnourished children to maximum physical health.</li>
<li>Give medical and dental assistance.</li>
<li>Provide regular human and spiritual formation to children, parents and other collaborators.</li>
<li>Establish feeding centers in key areas of Davao City.</li>
<li>Partnership with schools and other institutions that could support the center.</li>
<li>Offer Educational assistance to the beneficiaries up to college.</li>
</ul>
					</div>
					

				</div>

				<div class="spacer-70"></div>

				<div class="row">

					<div class="col-sm-3 col-md-3" data-aos="fade-up" data-aos-delay="0">
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

					<div class="col-sm-3 col-md-3" data-aos="fade-up" data-aos-delay="150">
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

					<div class="col-sm-3 col-md-3" data-aos="fade-up" data-aos-delay="300">
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

					<div class="col-sm-3 col-md-3" data-aos="fade-up" data-aos-delay="450">
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
.history {
	margin-right: 20px;
}
</style>
