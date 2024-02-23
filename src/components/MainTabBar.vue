<template lang="">
    <div class="row d-flex justify-content-between">
        <TabBarButton @click="click('Active task')" class="col-4 selected">
            <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
            <text>Active task</text>
        </TabBarButton> 
        <TabBarButton @click="click('Active task')" class="col-4">
            <svg-icon type="mdi" :path="path[1]" class="icon"></svg-icon>
            <text>Search</text>
        </TabBarButton> 
        <TabBarButton @click="click('Active task')" class="col-4">
            <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
            <text>Active task</text>
        </TabBarButton> 
    </div>
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
        click(buttonName){
            console.log("Button " + buttonName + " main section pressed")
        }
    }
}
</script>
<style scoped>

text {
    color: rgba(255,255,255,0.4)
}
.icon {
    color: rgba(255,255,255,0.4)
}
.selected .icon {
    color: rgba(255,255,255, 1)
}

.selected text {
    color: rgba(255,255,255, 1)
}
    
</style>