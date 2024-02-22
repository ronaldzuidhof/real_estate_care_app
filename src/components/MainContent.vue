<template lang="">
        <div class="row p-2 ">
            <MainButton @click="click('Scheduled')" class="col-6 pe-1">
            <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
            Scheduled
        </MainButton> 
        <MainButton @click="click('Completed')" class="col-6 ps-1">
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
             Completed
        </MainButton>
    </div>
    <div class="row pb-2 px-2">
        <MainButton @click="click('Knowledge base')" class="col-6 pe-1">
            <svg-icon type="mdi" :path="path[2]" class="icon"></svg-icon>
            Knowledge base
        </MainButton>
        <MainButton @click="click('Settings')" class="col-6 ps-1">
            <svg-icon type="mdi" :path="path[3]" class="icon"></svg-icon>
            Settings
        </MainButton>
    </div>

</template>
<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCalendar, mdiCheckCircle, mdiApps, mdiCog } from '@mdi/js'
import MainButton from '@/shared/MainButton.vue'


export default {
    name: "MainContent",
    components: {
        MainButton, SvgIcon,
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