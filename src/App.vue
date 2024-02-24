<template>
  <RealEstateCare/>
</template>

<script>
import RealEstateCare from './components/RealEstateCare.vue';

export default {
  name: 'App',
  components: {
    RealEstateCare
}
}
</script>

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
    margin: auto;
    max-width: 700px;
    min-height: 650px;
    max-height: 1200px;
}

</style>