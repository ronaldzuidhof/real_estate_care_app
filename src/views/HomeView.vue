<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <HeaderBar class="main_header"/>
    <HomeButtons class="main_content"/>
    <FooterBar class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import HeaderBar from '@/components/HeaderBar.vue';
import HomeButtons from '@/components/HomeButtons.vue';
import FooterBar from '@/components/FooterBar.vue';

// Export App
export default {
    name: "HomeView",
    components: {
        // Load used components
        HeaderBar, HomeButtons, FooterBar
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