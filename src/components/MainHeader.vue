<template lang="">
    <section>
        <img src="@/assets/RealEstateMainLogoWhite.png" v-touch:tap="touchHandler" >
        <picture>
            <svg-icon type="mdi" :path="path[0]" v-touch:tap="touchHandler" class="icon"></svg-icon>
            <svg-icon type="mdi" :path="path[1]" v-touch:tap="touchHandler" class="icon"></svg-icon>
        </picture>
    </section>
</template>

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBell, mdiCog } from '@mdi/js'

export default {
    name: "MainHeader", 
    components: {
        SvgIcon
    },
    data() {
        return {
            path: [mdiBell, mdiCog ]
        }
    }, 
    methods: {
        touchHandler(event){
            console.log(event);
        }
    }
}
</script>

<style scoped>

section {
    display: flex;
    justify-content: space-between;
    padding-block: 1%;
    padding-inline: 1%;
    height: 10%;
    background-color: rgba(41,52,57,1);
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