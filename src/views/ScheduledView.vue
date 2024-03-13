<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <HeaderBar class="main_header"/>
    <InspectionsListScheduled />
    <FooterBar class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import InspectionsListScheduled from '@/components/InspectionsListScheduled.vue';

// Export App
export default {
    name: "ScheduledView",
    components: {
        // Load used components
        HeaderBar, FooterBar, InspectionsListScheduled
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>