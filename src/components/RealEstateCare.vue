<!--HTML-->
<template lang="">
    <div class="container">
        <MainHeader />
        <MainContent />
        <MainTabBar />
        <TestComponent />
    </div>
</template>

<!--SCRIPT-->
<script>

// imports
import MainHeader from '@/components/MainHeader.vue';
import MainContent from '@/components/MainContent.vue';
import MainTabBar from '@/components/MainTabBar.vue';

import TestComponent from '@/components/TestComponent.vue';

// Export
export default {
    name: "RealEstacteCare",
    components: {
        MainHeader, MainContent, MainTabBar, TestComponent
    },
    mounted() {
        // Set page title when component is mounted
        document.title = "RealEstateCare";
    },
}
</script>


<!--STYLE-->
<style scoped>

.container {
    background-color: rgba(0,170,162,.5);
}
    
</style>