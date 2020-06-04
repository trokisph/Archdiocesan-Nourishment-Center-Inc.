<template>
  <div>
	<!-- BANNER -->
	<div class="section banner-page" :class="className">
		<div class="content-wrap pos-relative">
			<div class="d-flex justify-content-center bd-highlight mb-3">
				<div class="title-page">{{ title }}</div>
			</div>
			<div class="d-flex justify-content-center bd-highlight mb-3">
			    <nav aria-label="breadcrumb">
				  <ol class="breadcrumb ">
				    <li class="breadcrumb-item"><router-link :to="{ name: 'HomePage' }">Home</router-link></li>
				    <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
				  </ol>
				</nav>
		  	</div>
		</div>
	</div>
  </div>
</template>

<script lang="ts">
export default {
  name : 'PageHeader',
  props : ['title','className'],
}
</script>
<style scoped lang="scss">
.about-page {
    background-image: url('../assets/images/header-1.jpg');
}
.programs-page {
    background-image: url('../assets/images/header-2.jpg');
}
.events-page {
    background-image: url('../assets/images/header-3.jpg');
}
.contact-page {
    background-image: url('../assets/images/header-4.jpg');
}
</style>
