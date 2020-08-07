<template>
  <div>
    <div class="section">
		<div class="content-wrap">
			<div class="container">
				<div class="row">

					<div class="col-sm-8 col-md-8" data-aos="fade-up" :data-aos-delay="0">

            <h2 class="section-heading">Donate thru Bank</h2>
            
            <p><strong>BDO NETWORK BANK</strong> (formerly One Network Bank)<br />
            Account Name: <strong>Archdiocesan Nourishment Center</strong><br />
            Account Number: <strong>04102-00000-48</strong><br />
			Branch: <strong>HCDC - Davao</strong></p>

						<h2 class="section-heading">
							Other <span>Ways</span> to Help
						</h2>
						<div class="section-subheading"></div> 
						<div class="margin-bottom-50"></div>
						<dl class="hiw">
							<dt><span class="fa fa-user"></span></dt>
							<dd><div class="no">01</div><h3>Visit Us</h3>
							Your mere presence is more than enough to show these children that you care.
							</dd>
							
							<dt><span class="fa fa-male"></span></dt>
							<dd><div class="no">03</div><h3>Volunteer</h3>
							Reaching to them is another thing.
							</dd>
							
							<dt><span class="fa fa-calendar"></span></dt>
							<dd><div class="no">05</div><h3>Participate in Events</h3>
								We usually hold big event and by participating in the event you are already helping.
							</dd>

							<dt><span class="fa fa-gift"></span></dt>
							<dd><div class="no">02</div><h3>Make a Pledge</h3>
								
							</dd>

							<dt><span class="fa fa-child"></span></dt>
							<dd><div class="no">04</div><h3>Sponsor a child</h3>

							</dd>

							<dt><span class="fa fa-cutlery"></span></dt>
							<dd><div class="no">05</div><h3>Sponsor a day</h3>
							
						</dd></dl>

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
  name : 'HowToHelpUs2',
  components: {
	  SidebarDonate
  }
}
</script>
<style scoped lang="scss">

</style>
