<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <DocumentsList />
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import DocumentsList from '@/components/DocumentsList.vue';
import TheFooter from '@/components/TheFooter.vue';

// Export App
export default {
    name: "DocumentationView",
    components: {
        // Load used components
        TheHeader, DocumentsList, TheFooter
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>