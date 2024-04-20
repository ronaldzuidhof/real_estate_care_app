<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <TheNavigationButton 
            id="scheduled"
            v-touch:tap="touchHandler"
        >
            <svg-icon 
                :path="icons[2]" 
                class="icon"
                alt="Knop icoon gepland"
                type="mdi" 
            ></svg-icon>Gepland
        </TheNavigationButton> 
        <TheNavigationButton 
            v-touch:tap="touchHandler" 
            id="completed"
        >
            <svg-icon 
                :path="icons[3]" 
                class="icon"
                alt="Knop icoon uitgevoerd"
                type="mdi" 
            ></svg-icon>Uitgevoerd
        </TheNavigationButton> 
        <TheNavigationButton 
            id="documentation"
            v-touch:tap="touchHandler" 
        >
            <svg-icon 
                path="icons[4]" 
                class="icon"
                alt="Knop icoon documentatie"
                type="mdi" 
            ></svg-icon>Documentatie
        </TheNavigationButton> 
        <TheNavigationButton 
            id="settings"
            v-touch:tap="touchHandler" 
        >
            <svg-icon 
                :path="icons[1]"
                class="icon"
                alt="Knop icoon instellingen"
                type="mdi" 
            ></svg-icon>Instellingen        
        </TheNavigationButton> 
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import TheNavigationButton from '@/components/TheNavigationButton.vue'

// export component
export default {
    name: "TheNavigation",
    components: {
        // load used components
        TheNavigationButton, SvgIcon,
    },
    computed: {
        icons() {
            return this.$store.state.inspections.icons
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
        this.$store.dispatch('inspections/clearInspectionSelected')
        // clear the inspection selected edit entry in the store
        this.$store.dispatch('inspections/clearInspectionSelectedEdit')
        // clear the document selected entry in the store
        this.$store.dispatch('documents/clearDocumentSelected')
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