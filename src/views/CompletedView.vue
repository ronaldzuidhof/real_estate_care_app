<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <TheHeader class="main_header"/>
    <InspectionsList />
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import InspectionsList from '@/components/InspectionsList';

// Export App
export default {
    name: "CompletedView",
    components: {
        // Load used components
        TheHeader,InspectionsList, TheFooter
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>