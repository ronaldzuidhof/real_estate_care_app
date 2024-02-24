<!--HTML-->
<template lang="">
    <MainHeader class="main_header"/>
    <MainContent class="main_content"/>
    <MainTabBar class="main_tab_bar"/>
</template>

<!--SCRIPT-->
<script>

// imports
import MainHeader from '@/components/MainHeader.vue';
import MainContent from '@/components/MainContent.vue';
import MainTabBar from '@/components/MainTabBar.vue';

// Export
export default {
    name: "RealEstacteCare",
    components: {
        MainHeader, MainContent, MainTabBar
    },
    mounted() {
        // Set page title when component is mounted
        document.title = "RealEstateCare";
    },
}
</script>

<!--STYLE-->
<style scoped>

</style>