<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <InspectionsList :sourcePage="'completed'"/>
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import InspectionsList from '@/components/InspectionsList';

export default {
    name: "CompletedView",
    components: {
        TheHeader,InspectionsList, TheFooter
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>