<template>
  <div>
    	<!-- HEADER -->
    <div class="header header-1">
    	
        <TopBar />

    	<MiddleBar />

        <NavBar />

    </div>
  </div>
</template>

<script lang="ts">

import TopBar from '@/components/TopBar.vue';
import MiddleBar from '@/components/MiddleBar.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name : 'Header',
  components : {
      TopBar,
      MiddleBar,
      NavBar
  }
}
</script>
<style scoped lang="scss">

</style>
