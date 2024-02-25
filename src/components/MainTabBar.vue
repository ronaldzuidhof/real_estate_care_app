<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <TabBarButton v-touch:tap="touchHandler" class="selected">
            <svg-icon type="mdi" :path="path[0]" class="icon selected"></svg-icon>
            <p class="selected">Active task</p>
        </TabBarButton> 
        <TabBarButton v-touch:tap="touchHandler">
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
            <p>Search</p>
        </TabBarButton> 
        <TabBarButton v-touch:tap="touchHandler">
            <svg-icon type="mdi" :path="path[2]" class="icon"></svg-icon>
            <p>Information</p>
        </TabBarButton> 
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiWrench, mdiMagnify, mdiInformation  } from '@mdi/js'
import TabBarButton from '@/shared/TabBarButton.vue'

export default {
    name: "MainTabBar",
    // Load used components
    components: {
        TabBarButton, SvgIcon
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