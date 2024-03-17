<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <HeaderBar class="main_header"/>
    <InspectionDetails />
    <FooterBar class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import HeaderBar from '@/components/HeaderBar.vue';
import InspectionDetails from '@/components/InspectionDetails.vue';
import FooterBar from '@/components/FooterBar.vue';

// Export App
export default {
    name: "DetailsView",
    components: {
        // Load used components
        HeaderBar, InspectionDetails, FooterBar
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