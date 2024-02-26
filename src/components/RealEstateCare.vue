<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <MainHeader class="main_header"/>
    <MainContent class="main_content"/>
    <MainTabBar class="main_tab_bar"/>
    <InspectionList />
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import MainHeader from '@/components/MainHeader.vue';
import MainContent from '@/components/MainContent.vue';
import MainTabBar from '@/components/MainTabBar.vue';
import InspectionList from './InspectionList.vue';

// Export App
export default {
    name: "RealEstacteCare",
    components: {
        // Load used components
        MainHeader, MainContent, MainTabBar, InspectionList
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