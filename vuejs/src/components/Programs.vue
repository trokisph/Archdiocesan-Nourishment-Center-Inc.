<template>
  <div>
    <div class="section">
		<div class="content-wrap">
			<div class="container">

				<div class="row">

					<div class="rs-nav-tabs">

						<div class="tab-content" id="pills-tabContent">
						  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
						  	<div class="col-md-12">
						  		<div class="row">

						  			<!-- Item 1 -->
									<div class="col-sm-4 col-md-4">
							            <div class="box-fundraising">
						              		<div class="media">
						                		<img src="../assets/images/daily-feeding.jpg" alt="">
						              		</div>
						              		<div class="body-content">
						              			<p class="title"><router-link :to="{ name: 'DailyFeedingPage' }">DAILY FEEDING PROGRAM</router-link></p>
						              			<div class="text">We provide the malnourished children with nutritious meals daily. The feeding program provides approximately 10,000 meals each month.</div>
						              		</div>
							            </div>
							        </div>

							        <!-- Item 2 -->
									<div class="col-sm-4 col-md-4">
							            <div class="box-fundraising">
						              		<div class="media">
						                		<img src="../assets/images/educational-assistance.jpg" alt="">
						              		</div>
						              		<div class="body-content">
						              			<p class="title"><router-link :to="{ name: 'EducationalAssistancePage' }">EDUCATIONAL ASSISTANCE</router-link></p>
						              			<div class="text">In order to help and encourage the children to go to school everyday, we provide them school supplies, uniforms, and baon, on a daily basis.</div>
						              		</div>
							            </div>
							        </div>

							        <!-- Item 2 -->
									<div class="col-sm-4 col-md-4">
							            <div class="box-fundraising">
						              		<div class="media">
						                		<img src="../assets/images/medical-dental.jpg" alt="">
						              		</div>
						              		<div class="body-content">
						              			<p class="title"><router-link :to="{ name: 'MedicalDentalPage' }">MEDICAL-DENTAL SERVICES</router-link></p>
						              			<div class="text">With the help of our partners, we are able to give access to free medical and dental checkups, laboratory assistance, and  medicines.</div>
						              		</div>
							            </div>
							        </div>

							        <!-- Item 3 -->
									<div class="col-sm-4 col-md-4">
							            <div class="box-fundraising">
						              		<div class="media">
						                		<img src="../assets/images/spiritual-formation.jpg" alt="">
						              		</div>
						              		<div class="body-content">
						              			<p class="title"><router-link :to="{ name: 'SpiritualFormationPage' }">SPIRITUAL FORMATION</router-link></p>
						              			<div class="text">By engaging the children in the Catholic activities, we are able to teach them how to be good disciples of Christ.</div>
						              		</div>
							            </div>
							        </div>

							        <!-- Item 3 -->
									<div class="col-sm-4 col-md-4">
							            <div class="box-fundraising">
						              		<div class="media">
						                		<img src="../assets/images/parents-collaboration.jpg" alt="">
						              		</div>
						              		<div class="body-content">
						              			<p class="title"><router-link :to="{ name: 'ParentsCollaborationPage' }">PARENTS COLLABORATION</router-link></p>
						              			<div class="text">We also engage the parents to become our partners in providing our programs and services.</div>
						              		</div>
							            </div>
							        </div>


							        <!-- Item 3 -->
									<div class="col-sm-4 col-md-4">
							            <div class="box-fundraising">
						              		<div class="media">
						                		<img src="../assets/images/livelihood-program.jpg" alt="">
						              		</div>
						              		<div class="body-content">
						              			<p class="title"><router-link :to="{ name: 'LivelihoodProgramPage' }">LIVELIHOOD PROGRAM</router-link></p>
						              			<div class="text">As part of our commitment to alleviate poverty, we empower the parents through the provision of appropriate interventions.</div>
						              		</div>
							            </div>
							        </div>


						  		</div>
						  	</div>

						  </div>
						  <!-- END TAB 1 CONTENT -->

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
  name : 'Programs',
}
</script>
<style scoped lang="scss">

</style>
