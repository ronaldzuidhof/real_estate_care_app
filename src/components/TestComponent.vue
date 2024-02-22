<template lang="">

<div class="row p-2">
    <TestMainButton @click="click('Knowledge base test')" class="col-6 pe-1" :text="'Test'">
        <svg-icon type="mdi" :path="path[0]" class="icon"></svg-icon>
    </TestMainButton>
</div>

</template>
<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'
import {mdiVuejs  } from '@mdi/js'
import TestMainButton from '@/shared/TestMainButton.vue'

export default {
name: "TestComponent",
components: {
    TestMainButton, SvgIcon,
},
data() {
    return {
        path: [mdiVuejs ]
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
.icon {
height: auto;
width: 50%;
}
.row {
background-color: white;
}

</style>