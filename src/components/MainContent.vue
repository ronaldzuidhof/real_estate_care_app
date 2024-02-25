<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <ContentButton v-touch:tap="touchHandler" class="positon1">
            <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
            Scheduled
        </ContentButton> 
        <ContentButton v-touch:tap="touchHandler" class="positon2">
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
            Completed
        </ContentButton> 
        <ContentButton v-touch:tap="touchHandler" class="positon3">
            <svg-icon type="mdi" :path="path[2]" class="icon"></svg-icon>
            Knowledge base
        </ContentButton> 
        <ContentButton v-touch:tap="touchHandler" class="positon4">
            <svg-icon type="mdi" :path="path[3]" class="icon"></svg-icon>
            Settings        
        </ContentButton> 
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCalendar, mdiCheckCircle, mdiApps, mdiCog } from '@mdi/js'
import ContentButton from '@/shared/ContentButton.vue'

// export component
export default {
    name: "MainContent",
    components: {
        // load used components
        ContentButton, SvgIcon,
    },
    data() {
        return {
            // put icon objects in path array of object data
            path: [mdiCalendar, mdiCheckCircle, mdiApps, mdiCog]
        }
    },
    methods: {
        // print event object to the console that called the method
        touchHandler(event){
            console.log(event);
        }
    }
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:"position1 position2" "position3 position4";
    height: 80%;
    gap: 7px;
    padding: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
    background-color: rgba(255,255,255,1);
    border-inline: 1px solid var(--color-1);
}
.position1 {
    grid-area: position1;
}
.position2 {
    grid-area: position2;
}
.position3 {
    grid-area: position3;
}
.position4 {
    grid-area: position4;
}
.icon {
    height: auto;
    width: 50%;
    filter: drop-shadow(3px 3px 1px rgb(0 0 0 / 0.2));
}

</style>