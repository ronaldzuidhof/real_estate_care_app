<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <TheFooterButton 
            v-touch:tap="touchHandler" 
            class="selected"
        >
            <svg-icon 
                v-if="userLoggedIn"
                type="mdi" 
                :path="path[0]" 
                class="icon selected"
                alt="Knop icoon actieve taken"
            ></svg-icon>
            <p v-if="userLoggedIn" class="selected">Actieve taken</p>
        </TheFooterButton> 
        <TheFooterButton v-touch:tap="touchHandler">
            <svg-icon 
                v-if="userLoggedIn"
                type="mdi" 
                :path="path[1]" 
                class="icon"
                alt="Knop icoon zoeken"
            ></svg-icon>
            <p v-if="userLoggedIn">Zoeken</p>
        </TheFooterButton> 
        <TheFooterButton v-touch:tap="touchHandler">
            <svg-icon 
                v-if="userLoggedIn"
                type="mdi" 
                :path="path[2]" 
                class="icon"
                alt="Knop icoon informatie"
            ></svg-icon>
            <p v-if="userLoggedIn">Informatie</p>
        </TheFooterButton> 
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiWrench, mdiMagnify, mdiInformation  } from '@mdi/js'
import TheFooterButton from '@/components/TheFooterButton.vue'

export default {
    name: "TheFooter",
    // Load used components
    components: {
        TheFooterButton, SvgIcon
    },
    data() {
        return {
            // put icon objects in path array of object data
            path: [mdiWrench, mdiMagnify, mdiInformation]
        }
    },
    methods: {
         // print event object to the console that called the method
        touchHandler(event){
            console.log(event);
        }
    },
    computed: {
        // function to return the state if the user is logged in
        userLoggedIn(){
            return this.$store.state.user.userLoggedIn
        }
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
    background-color: var(--color-2);
    border: 1px solid var(--color-1);
}

p {
    margin: 0;
    color: var(--color-3-unselected);
}
.icon {
    height: auto;
    width: 20%;
    color: var(--color-3-unselected);;

}
.selected {
    color: var(--color-3-selected);;
}
    
</style>