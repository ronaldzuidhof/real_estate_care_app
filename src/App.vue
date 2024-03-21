<!--HTML----------------------------------------------------------------------------------------------->

<template>
  <Router-view />
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// export App
export default {
  name: 'App',
  mounted() {
        // Set page title when component is mounted (tab browser)
        document.title = "RealEstateCare";
    },
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style>

/* load popping font styles */
@font-face {
    font-family: poppins;
    src: url('~@/assets/fonts/Poppins-Regular.ttf');
}

html {
/* Variables */
    --color-1: rgba(41,52,57,1);
    --color-1-shadow: rgba(41,52,57,.4);
    --color-2: rgba(0,170,162,.5);
    --color-3-unselected: rgba(255,255,255,0.4);
    --color-3-selected: rgba(255,255,255,1);
    --color-4: rgba(0,230,180,.15);
    --color-5: rgba(0,200,170,.3);
}

body {
  font-family: poppins;
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
    min-width: 400px;
    min-height: 650px;
    max-height: 1200px;
}

</style>