<template lang="">
    <div class="container">
        <div class="row py-2">
            <div class="col-7 d-flex">
                <img src="@/assets/RealEstateMainLogoWhite.png" class="overflow-auto" @click="click('logo image')" >
            </div>
            <div class="col-5 d-flex justify-content-end align-items-center">
                <svg-icon type="mdi" :path="path[0]" class="icon" @click="click('bell')"></svg-icon>
                <svg-icon type="mdi" :path="path[1]" class="icon" @click="click('cog')"></svg-icon>
            </div>
        </div>
    </div>
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
        click(buttonName){
            console.log("Button " + buttonName + " header pressed")
        }
    }
}
</script>

<style scoped>
.row {
    background-color: rgba(41,52,57,1)
}

.icon {
    height: 35%;
    width: auto;
    margin-inline-end: 10%;
    color: white;
}

</style>