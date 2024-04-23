<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <TheHeader class="main_header"/>
    <NotificationsList />
    <TheFooter class="main_tab_bar"/>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

// imports
import TheHeader from '@/components/TheHeader.vue';
import NotificationsList from '@/components/NotificationsList.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    name: "SettingsView",
    components: {
        TheHeader, NotificationsList, TheFooter
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

</style>