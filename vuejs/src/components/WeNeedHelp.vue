<template>
  <div>
    	<!-- WE NEED YOUR HELP -->
	<div class="section services">
		<div class="content-wrap">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12">
						<h2 class="section-heading center">
							We <span>Need</span> Your Help
						</h2>
						<p class="subheading text-center">Helping these children is what we do but we can't do it alone. We need you.</p>
					</div>
					<div class="clearfix"></div>
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

					<div class="col-sm-12 col-md-12">
						<div class="spacer-50"></div>
						<div class="text-center">
							<router-link :to="{ name: 'ProgramsPage' }" class="btn btn-primary">SEE ALL PROGRAMS & SERVICES</router-link>
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
  name : 'WeNeedHelp',
}
</script>
<style scoped lang="scss">

</style>
