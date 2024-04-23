<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <InspectionsListDetails />
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import InspectionsListDetails from '@/components/InspectionsListDetails.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: "DetailsView",
    components: {
        TheHeader, InspectionsListDetails, TheFooter
    },
    mounted() {
        // Set page title when component is mounted (tab browser)
        document.title = "RealEstateCare";
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>