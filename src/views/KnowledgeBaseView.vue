<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <HeaderBar class="main_header"/>
    <DocumentsList />
    <FooterBar class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import HeaderBar from '@/components/HeaderBar.vue';
import FooterBar from '@/components/FooterBar.vue';
import DocumentsList from '@/components/DocumentsList.vue';

// Export App
export default {
    name: "KnowledgeBaseView",
    components: {
        // Load used components
        HeaderBar, FooterBar, DocumentsList
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>