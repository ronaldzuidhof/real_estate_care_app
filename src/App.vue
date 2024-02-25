<!--HTML----------------------------------------------------------------------------------------------->

<template>
  <RealEstateCare/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import RealEstateCare from './components/RealEstateCare.vue';

// export App
export default {
  name: 'App',
  components: {
    // Load used component
    RealEstateCare
  }
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style>

html {
/* Variables */
    --color-1: rgba(41,52,57,1);
    --color-1-shadow: rgba(41,52,57,.4);
    --color-2: rgba(0,170,162,.5);
    --color-3-unselected: rgba(255,255,255,0.4);
    --color-3-selected: rgba(255,255,255,1);
}

body {
  margin: 0;
}

#app {
  /*Styling for id app*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0;
    margin-inline: auto;
    max-width: 700px;
    min-height: 650px;
    max-height: 1200px;
}

</style>