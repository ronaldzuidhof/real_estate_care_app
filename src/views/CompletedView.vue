<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <HeaderBar class="main_header"/>
    <InspectionsListCompleted />
    <FooterBar class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import InspectionsListCompleted from '@/components/InspectionsListCompleted';

// Export App
export default {
    name: "CompletedView",
    components: {
        // Load used components
        HeaderBar, FooterBar, InspectionsListCompleted
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>