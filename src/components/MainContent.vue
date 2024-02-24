<template lang="">
    <section>
        <ContentButton @click="click('Scheduled')" class="positon1">
            <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
            Scheduled
        </ContentButton> 
        <ContentButton @click="click('Completed')" class="positon2">
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
            Completed
        </ContentButton> 
        <ContentButton @click="click('Knowledge base')" class="positon3">
            <svg-icon type="mdi" :path="path[2]" class="icon"></svg-icon>
            Knowledge base
        </ContentButton> 
        <ContentButton @click="click('Settings')" class="positon4">
            <svg-icon type="mdi" :path="path[3]" class="icon"></svg-icon>
            Settings        </ContentButton> 
    </section>

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

section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:"position1 position2" "position3 position4";
    height: 80%;
    gap: 5px;
    padding: 5px;
    background-color: rgba(255,255,255,1);
    border-inline: 1px solid black;
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
}

</style>