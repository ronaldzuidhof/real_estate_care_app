<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <img src="@/assets/RealEstateMainLogoWhite.png" v-touch:tap="touchHandler" id="home">
        <picture>
            <svg-icon type="mdi" :path="path[0]" v-touch:tap="touchHandler" class="icon"></svg-icon>
            <svg-icon type="mdi" :path="path[1]" v-touch:tap="touchHandler" class="icon"></svg-icon>
        </picture>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBell, mdiCog } from '@mdi/js'

// export component
export default {
    name: "MainHeader", 
    // load used components
    components: {
        SvgIcon
    },
    data() {
        return {
            // put icon objects in path array of object data
            path: [mdiBell, mdiCog]
        }
    }, 
    methods: {
        // push currenTarget id of event to router (load view)
        touchHandler(event){
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