<template>
  <div>
		<!-- NAVBAR SECTION -->
		<div class="navbar-main">
			<div class="container">
			    <nav class="navbar navbar-expand-lg">
                        <router-link class="navbar-brand" :to="{ name: 'HomePage' }" >
						<img src="../assets/images/logo.png" alt="" />
                        </router-link>
			        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			            <span class="navbar-toggler-icon"></span>
			        </button>
			        <div class="collapse navbar-collapse" id="navbarNavDropdown">
			            <ul class="navbar-nav">
			                <li class="nav-item dropdown">
                            <router-link class="nav-link" :to="{ name: 'HomePage' }" >
						          HOME
                            </router-link>
			                </li>
			              
			                <li class="nav-item dropdown">
			                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						          ABOUT
						        </a>
			                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			                    	
                                        <router-link class="dropdown-item" :to="{ name: 'AboutPage' }" >
                                         About ANC
                                        </router-link>
										<router-link class="dropdown-item" :to="{ name: 'HistoryPage' }" >
                                         History
                                        </router-link>
                                        <router-link class="dropdown-item" :to="{ name: 'CentersPage' }" >
                                         Our Centers
                                        </router-link>
                                        <router-link class="dropdown-item" :to="{ name: 'HowToHelpPage' }" >
                                         How to Help
                                        </router-link>
                                        <router-link class="dropdown-item" :to="{ name: 'StaffPage' }" >
                                         Our Staff
                                        </router-link>
							    </div>
			                </li>
			                <li class="nav-item dropdown">
			                    
                                <router-link class="nav-link" :to="{ name: 'ProgramsPage' }" >
						          PROGRAMS &amp; SERVICES
                                </router-link>
						        
			                </li>
			                
			                <li class="nav-item dropdown">
			                    <router-link class="nav-link" :to="{ name: 'EventsPage' }" >
						          EVENTS
			                    </router-link>
			                </li>
			                 <li class="nav-item dropdown">
			                    <a class="nav-link" href="https://blog.ancdavao.com/">
						          BLOG
						        </a>
			                </li>
			                <li class="nav-item">
			                    <router-link class="nav-link" :to="{ name: 'ContactPage' }" >
                                    CONTACT US
			                    </router-link>
			                </li>
			            </ul>
			        </div>
			    </nav> <!-- -->

			</div>
		</div>
  </div>
</template>

<script lang="ts">
export default {
  name : 'NavBar',
}
</script>
<style scoped lang="scss">

.header-1 .navbar-main .navbar-nav .nav-link.router-link-exact-active.router-link-active {
    color: #972b47;
}

</style>
