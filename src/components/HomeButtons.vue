<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <ContentButton v-touch:tap="touchHandler" id="scheduled">
            <svg-icon type="mdi" :path="icons[2]" class="icon"></svg-icon>
            Scheduled
        </ContentButton> 
        <ContentButton v-touch:tap="touchHandler" id="completed">
            <svg-icon type="mdi" :path="icons[3]" class="icon"></svg-icon>
            Completed
        </ContentButton> 
        <ContentButton v-touch:tap="touchHandler" id="knowledgeBase">
            <svg-icon type="mdi" :path="icons[4]" class="icon"></svg-icon>
            Knowledge base
        </ContentButton> 
        <ContentButton v-touch:tap="touchHandler" id="settings">
            <svg-icon type="mdi" :path="icons[1]" class="icon"></svg-icon>
            Settings        
        </ContentButton> 
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import ContentButton from '@/shared/ContentButton.vue'

// export component
export default {
    name: "MainContent",
    components: {
        // load used components
        ContentButton, SvgIcon,
    },
    computed: {
        icons() {
            return this.$store.state.icons
        },
    },
    methods: {
        // push currenTarget id (name) of event to router (load view)
        touchHandler(event){
            // load preventDefault to stop propagnation on the loaded route
            event.preventDefault();
            // push target event to the router
            this.$router.push({name: event.currentTarget.id});
        }
    },
    created(){
        // clear the inspection selected entry in the store
        this.$store.state.clearInspectionSelected;
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
#scheduledButton {
    grid-area: position1;
}

#completedButton {
    grid-area: position2;
}

#knowledgeBaseButton {
    grid-area: position3;
}

#settingsButton {
    grid-area: position4;
}

.icon {
    height: auto;
    width: 50%;
    filter: drop-shadow(3px 3px 1px rgb(0 0 0 / 0.2));
}

</style>