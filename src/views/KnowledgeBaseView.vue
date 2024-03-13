<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <HeaderBar class="main_header"/>
    <KnowledgeBase />
    <FooterBar class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import KnowledgeBase from '@/components/KnowledgeBase';

// Export App
export default {
    name: "KnowledgeBaseView",
    components: {
        // Load used components
        HeaderBar, FooterBar, KnowledgeBase
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>