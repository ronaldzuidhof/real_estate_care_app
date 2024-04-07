<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <SettingsList />
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import SettingsList from '@/components/SettingsList.vue';
import TheFooter from '@/components/TheFooter.vue';

// Export App
export default {
    name: "SettingsView",
    components: {
        // Load used components
        TheHeader, SettingsList, TheFooter
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>