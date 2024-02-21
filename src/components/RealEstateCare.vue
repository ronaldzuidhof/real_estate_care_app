<!--HTML-->
<template lang="">
    <div>
        <MainToolBar />
        <MainHeader />
        <MainContent />
        <MainTabBar />
    </div>
</template>

<!--SCRIPT-->
<script>

// imports
import MainToolBar from '@/components/MainToolBar.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainContent from '@/components/MainContent.vue';
import MainTabBar from '@/components/MainTabBar.vue';

// Export
export default {
    name: "RealEstacteCare",
    components: {
        MainToolBar, MainHeader, MainContent, MainTabBar
    },
    mounted() {
        // Set page title when component is mounted
        document.title = "RealEstateCare";
    },
}
</script>


<!--STYLE-->
<style lang="">
    
</style>