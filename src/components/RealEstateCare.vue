<!--HTML-->
<template lang="">
    <div class="container">
        <h1> Iconen uit link halen !! - https://pictogrammers.com/library/mdi/ !!!</h1>

        <MainToolBar />
        <MainHeader />
        <MainContent />
        <MainTabBar />
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
    background-color: rgba(0,170,162,.5);
}
    
</style>