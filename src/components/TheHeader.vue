<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <img 
            src="@/assets/logo/RealEstateMainLogoWhite.png" 
            v-touch:tap="touchHandler" 
            id="home"
            alt="Logo Real Estate bedrijf"
        >
        <picture>
            <svg-icon 
                type="mdi" 
                :path="icons[0]" 
                v-touch:tap="touchHandler" 
                class="icon"
                id="notifications"
                alt="knop icoon meldingen"
            ></svg-icon>
            <svg-icon 
                type="mdi" 
                :path="icons[1]" 
                v-touch:tap="touchHandler" 
                class="icon" 
                id="settings"
                alt="Knop icoon instellingen"
            ></svg-icon>
        </picture>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'

// export component
export default {
    name: "TheHeader", 
    // load used components
    components: {
        SvgIcon
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
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    display: flex;
    justify-content: space-between;
    padding-block: 1%;
    padding-inline: 1%;
    height: 10%;
    background-color: var(--color-1);
    border: 1px solid var(--color-1);
}

img {
    display: flex;
    height: 100%;
    padding-inline-end: 10%;
    object-fit: contain;
    overflow: auto;
}

picture {
    display: flex;
    align-items: center;
}

.icon {
    height: 60%;
    width: auto;
    margin-inline-end: 10%;
    color: white;
}

</style>