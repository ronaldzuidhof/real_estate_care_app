<!--HTML-->
<template lang="">
    <div class="container">
        <MainHeader class="main_header"/>
        <MainContent class="main_content"/>
        <MainTabBar class="main_tab_bar"/>
    </div>
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

.container {
    height: 100vh;
    padding: 0;
    max-width: 700px;
}

.main_header {
    padding-inline: 2vw;
    height: 10vh;
    background-color: rgba(41,52,57,1);
}

.main_content {
    padding-inline: 2vw;
    height: 80vh;
    background-color: rgba(255,255,255,1);
}

.main_tab_bar {
    padding-inline: 2vw;
    height: 10vh;
    background-color: rgba(0,170,162,.5);
}
    
</style>