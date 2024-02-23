<template lang="">
    <div class="container border-start border-end">
        <div class="row p-2 h-50">
        <ContentButton @click="click('Scheduled')" class="col-6 pe-1">
            <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
            <text>Scheduled</text>
        </ContentButton> 
        <ContentButton @click="click('Completed')" class="col-6 ps-1">
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
            <text>Completed</text>
        </ContentButton>
        </div>
        <div class="row pb-2 px-2 h-50">
            <ContentButton @click="click('Knowledge base')" class="col-6 pe-1">
                <svg-icon type="mdi" :path="path[2]" class="icon"></svg-icon>
                <text>Knowledge base</text>
            </ContentButton>
            <ContentButton @click="click('Settings')" class="col-6 ps-1">
                <svg-icon type="mdi" :path="path[3]" class="icon"></svg-icon>
                <text>Settings</text>
            </ContentButton>
        </div>
    </div>

</template>
<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCalendar, mdiCheckCircle, mdiApps, mdiCog } from '@mdi/js'
import ContentButton from '@/shared/ContentButton.vue'

export default {
    name: "MainContent",
    components: {
        ContentButton, SvgIcon,
    },
    data() {
        return {
            path: [mdiCalendar, mdiCheckCircle, mdiApps, mdiCog]
        }
    },
    methods: {
        click(buttonName){
            console.log("Button " + buttonName + " main section pressed")
        }
    }
}
</script>
<style scoped>

.icon {
    height: auto;
    width: 50%;
}
.row {
    background-color: white;
}

</style>