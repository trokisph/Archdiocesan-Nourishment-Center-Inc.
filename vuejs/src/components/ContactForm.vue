<template>
  <div>

					<div class="clearfix"></div>
					
					<div class="col-sm-12 col-md-12">
						<h2 class="section-heading">
							Send a <span>Message</span>
						</h2>
						<div class="section-subheading"></div>
						<div class="margin-bottom-50"></div>

						<div class="content">
							<form action="#" method="post" class="form-contact" id="contactForm" data-toggle="validator" novalidate="true">
								<input name="blogID" value="4943266648872039384" type="hidden" id="p_blogID" />
								<div class="row">
									<div class="col-sm-6 col-md-6">
										<div class="form-group">
											<input name="name" type="text" class="form-control" id="p_name" placeholder="Enter Name" required="">
											<div class="help-block with-errors"></div>
										</div>
									</div>
									<div class="col-sm-6 col-md-6">
										<div class="form-group">
											<input name="email" type="email" class="form-control" id="p_email" placeholder="Enter Email" required="">
											<div class="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div class="form-group">
									 <textarea name="message" id="p_message" class="form-control" rows="6" placeholder="Enter Your Message"></textarea>
									<div class="help-block with-errors"></div>
								</div>
								<div class="form-group">
									<div id="success"></div>
									<button type="submit" class="btn btn-primary">SEND MESSAGE</button>
								</div>
							</form>
							<div class="margin-bottom-50"></div>
							<p><em>Note: This form is not yet working</em></p>
						 </div>
					</div>
    
  </div>
</template>

<script lang="ts">
export default {
  name : 'ContactForm',
}
</script>
<style scoped lang="scss">

</style>
