<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <InspectionsList :source="'scheduled'"/>
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import InspectionsList from '@/components/InspectionsList';
import TheFooter from '@/components/TheFooter.vue';

// Export App
export default {
    name: "ScheduledView",
    components: {
        // Load used components
        TheHeader, InspectionsList, TheFooter
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>