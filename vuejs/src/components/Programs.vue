<template>
  <div>
    <div class="section">
      <div class="content-wrap">
        <div class="container">
          <div class="row">
            <div class="rs-nav-tabs">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <div class="col-md-12">
                    <div class="row">

                      <!-- Item 1 -->
                      <div data-aos="fade-up" :data-aos-delay="index * 150" class="col-sm-4 col-md-4" :key="index" v-for="(program, index) in programs">
                        <div class="box-fundraising">
                          <div class="media">
                            <img :src="program.image" alt />
                          </div>
                          <div class="body-content">
                            <p class="title">
                              <!--<router-link :to="{ name: program.to }">{{ program.title }}</router-link>-->
                              <a href="#">{{ program.title }}</a>
                            </p>
                            <div
                              class="text"
							  v-text="program.description"
							  ></div>
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
  name: "Programs",
  data() {
    return {
      programs: [
		  {
		  	title : 'DAILY FEEDING PROGRAM',
		  	description: 'We provide the malnourished children with nutritious meals daily. The feeding program provides approximately 10,000 meals each month.',
			image : require('@/assets/images/daily-feeding.jpg'),
			to : 'DailyFeedingPage',
		  },
		  {
		  	title : 'EDUCATIONAL ASSISTANCE',
		  	description: 'In order to help and encourage the children to go to school everyday, we provide them school supplies, uniforms, and baon, on a daily basis.',
			image : require('@/assets/images/educational-assistance.jpg'),
			to : 'EducationalAssistancePage',
		  },
		  {
		  	title : 'MEDICAL-DENTAL SERVICES',
		  	description: 'With the help of our partners, we are able to give access to free medical and dental checkups, laboratory assistance, and medicines.',
			image : require('@/assets/images/medical-dental.jpg'),
			to : 'MedicalDentalPage',
		  },
		   {
		  	title : 'SPIRITUAL FORMATION',
		  	description: 'By engaging the children in the Catholic activities, we are able to teach them how to be good disciples of Christ.',
			image : require('@/assets/images/spiritual-formation.jpg'),
			to : 'SpiritualFormationPage',
		  },
		   {
		  	title : 'PARENTS COLLABORATION',
		  	description: 'We also engage the parents to become our partners in providing our programs and services.',
			image : require('@/assets/images/parents-collaboration.jpg'),
			to : 'ParentsCollaborationPage',
		  },
		   {
		  	title : 'LIVELIHOOD PROGRAM',
		  	description: 'As part of our commitment to alleviate poverty, we empower the parents through the provision of appropriate interventions.',
			image : require('@/assets/images/livelihood-program.jpg'),
			to : 'LivelihoodProgramPage',
		  },
	  ]
    };
  }
};
</script>
<style scoped lang="scss">
</style>
