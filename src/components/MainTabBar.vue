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
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
            <p>Information</p>
        </TabBarButton> 
    </section>
</template>
<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiWrench, mdiMagnify } from '@mdi/js'
import TabBarButton from '@/shared/TabBarButton.vue'

export default {
    name: "MainTabBar",
    components: {
        TabBarButton, SvgIcon
    },
    data() {
        return {
            path: [mdiWrench, mdiMagnify ]
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
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
    background-color: rgba(0,170,162,.5);
}

p {
    margin: 0;
    color: rgba(255,255,255,0.4);
}
.icon {
    height: auto;
    width: 20%;
    color: rgba(255,255,255,0.4);

}
.selected {
    color: rgba(255,255,255, 1);
}
    
</style>