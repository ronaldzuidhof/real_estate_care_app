<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <TheLogin class="main_content"/>
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import TheLogin from '@/components/TheLogin.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: "loginView",
    components: {
        TheHeader, TheLogin, TheFooter
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