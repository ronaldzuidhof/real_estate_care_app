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