<template>
  <div>

	<!-- FOOTER SECTION -->
	<div class="footer">
		<div class="content-wrap">
			<div class="container">
				
				<div class="row">
					<div class="col-sm-3 col-md-3">
						<div class="footer-item">
							<img src="../assets/images/logo2.png" alt="logo bottom" class="logo-bottom">
							<div class="spacer-30"></div>
							<p>The Archdiocesan Nourishment Center aims to provide integral nourishment programs and services such as spiritual formation, medical assistance especially to the poorest of the poor.</p>

						</div>
					</div>

					<div class="col-sm-3 col-md-3">
						<div class="footer-item">
							<div class="footer-title">
								WHO WE ARE
							</div>
							
							<div class="row">
								<div class="col-sm-6 col-md-6">
									<ul class="list">
										<router-link tag="li" :to="{ name: 'AboutPage' }"><a>About us</a></router-link>
										<router-link tag="li" :to="{ name: 'ProgramsPage' }"><a>Programs & Services</a></router-link>
										<router-link tag="li" :to="{ name: 'TestimonialsPage' }"><a>Testimonials</a></router-link>
										<li><a href="https://www.facebook.com/pg/archdiocesannourishmentcenter/photos/?tab=albums&ref=page_internal" title="Gallery">Gallery</a></li>
										<router-link tag="li" :to="{ name: 'HowToHelpPage' }"><a>How to Help</a></router-link>
									</ul>
								</div>
								<div class="col-sm-6 col-md-6">
									<ul class="list">
										<router-link tag="li" :to="{ name: 'StaffPage' }"><a>Our Staff</a></router-link>
										<router-link tag="li" :to="{ name: 'EventsPage' }"><a>Events</a></router-link>
										<router-link tag="li" :to="{ name: 'ContactPage' }"><a>Contact Us</a></router-link>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-3 col-md-3">
						<div class="footer-item">
							<div class="footer-title">
								WHERE WE WORK
							</div>
							<ul class="list-info">
								<li>
									<div class="info-icon">
										<span class="fa fa-map-marker"></span>
									</div>
									<div class="info-text">Pag-asa St, Brgy. 24-C, Fatima, Davao City</div> </li>
								<li>
									<div class="info-icon">
										<span class="fa fa-phone"></span>
									</div>
									<div class="info-text">+63 (82) 285-1524</div>
								</li>
								<li>
									<div class="info-icon">
										<span class="fa fa-envelope"></span>
									</div>
									<div class="info-text">anc.archdavao@gmail.com</div>
								</li>
								<li>
									<div class="info-icon">
										<span class="fa fa-clock-o"></span>
									</div>
									<div class="info-text">Mon - Fri 08:00 - 17:00<br/>
										Sat 08:00 - 12:00
									</div>
								</li>
							</ul>

						</div>
					</div>
					
					<div class="col-sm-3 col-md-3">
						<div class="footer-item">
							<div class="footer-title">
								FOLLOW US
							</div>
							<div class="sosmed-icon primary">
								<a href="https://www.facebook.com/archdiocesannourishmentcenter/"><i class="fa fa-facebook"></i></a> 
								<!--<a href="#"><i class="fa fa-twitter"></i></a>--> 
								<!--<a href="#"><i class="fa fa-instagram"></i></a> -->
								<!--<a href="#"><i class="fa fa-pinterest"></i></a>--> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="fcopy">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 col-md-12">
						<p class="pull-right">Made with &#10084; by <a href="https://www.trokis.com/" class="color-primary">Trokis Philippines</a></p>
						<p class="ftex">Copyright 2019 &copy; <span class="color-primary">Archdiocesan Nourishment Center</span></p> 
					</div>
				</div>
			</div>
		</div>
		
	</div>
    
  </div>
</template>

<script>

//import Home from '@/components/Home.vue'

export default {
  name: 'Footer',
  components: {
    //Home
  }
}
</script>
