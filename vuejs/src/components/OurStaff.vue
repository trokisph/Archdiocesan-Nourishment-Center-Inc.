<template>
  <div>
    <div class="row">
      <div class="cta-info">
        <h1 class="section-heading center">
          <span>Executive</span> Members
        </h1>
      </div>
    </div>
    <div class="section">
      <div class="content-wrap-10">
        <div class="container">
          <div class="row">
		  
            <div class="col-sm-3 col-md-3" data-aos="fade-up" :data-aos-delay="(index * 150)" :key="index" v-for="(staff, index) in executives">
              <div class="rs-team-1">
                <div class="media">
                  <img :src="staff.image" alt />
                </div>
                <div class="body">
                  <div class="title" v-text="staff.name"></div>
                  <div class="position" v-text="staff.position"></div>
                  <ul class="social-icon">
                    <li>
                      <a :href="staff.facebook_url">
                        <span class="fa fa-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a :href="staff.twitter_url">
                        <span class="fa fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a :href="staff.linkedin_url">
                        <span class="fa fa-linkedin"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          
		  </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="cta-info">
        <h1 class="section-heading center">
          <span>Volunteer</span> Parents
        </h1>
      </div>
    </div>

    <div class="section">
      <div class="content-wrap-10">
        <div class="container">
          <div class="row">

            <div class="col-sm-3 col-md-3" data-aos="fade-up" :data-aos-delay="(index * 150)" :key="index" v-for="(staff, index) in volunteers">
              <div class="rs-team-1">
                <div class="media">
                  <img :src="staff.image" alt />
                </div>
                <div class="body">
                  <div class="title" v-text="staff.name"></div>
                  <div class="position" v-text="staff.position"></div>
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
  name: "OurStaff",
  data() {
    return {
      executives: [
		  	{
			  	name : 'Msgr. Paul',
				position: 'Director',
				image : require('../assets/images/msgr-paul.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Sr. Mafel',
				position: 'Admin Head',
				image : require('../assets/images/sr-mafel.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Sr. Violy',
				position: 'Operations In-charge - Fatima',
				image : require('../assets/images/sr_violy.png'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Sr. Merge',
				position: 'Operations In-charge - Bucana',
				image : require('../assets/images/sr-merge.png'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Alchie',
				position: 'Finance In-charge',
				image : require('../assets/images/alchie.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Narsing',
				position: 'Bucana Staff',
				image : require('../assets/images/narsing.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Teddy',
				position: 'Fatima Cook',
				image : require('../assets/images/teddy.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Adon',
				position: 'Bucana Cook',
				image : require('../assets/images/adon.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
	  ],
      volunteers: [
		  {
			  	name : 'Ate Marina',
				position: 'Fatima',
				image : require('../assets/images/ate-marina.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
		{
			  	name : 'Ate Merlyn',
				position: 'Fatima',
				image : require('../assets/images/ate-merlyn.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Ate Gaga',
				position: 'Fatima',
				image : require('../assets/images/dummy-img-400x400.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
			{
			  	name : 'Ate Rita',
				position: 'Bucana',
				image : require('../assets/images/rita.jpg'),
				facebook_url : '#',
				twitter_url : '#',
				linkedin_url : '#',
			},
	  ]
    };
  }
};
</script>
<style scoped lang="scss">
</style>
