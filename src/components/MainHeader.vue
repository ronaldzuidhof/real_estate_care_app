<template lang="">
    <div class="row py-2">
        <div class="col-7 d-flex">
            <img src="@/assets/RealEstateMainLogoWhite.png" class="overflow-auto">
        </div>
        <div class="col-5 d-flex justify-content-end align-items-center">
            <img src="@/assets/icons/IconBellWhite.png" class="icon">
            <img src="@/assets/icons/IconGearWhite.png" class="icon">
        </div>

    </div>
</template>

<script>
export default {
   name: "MainHeader", 
}
</script>

<style scoped>

.row {
    background-color: rgba(41,52,57,1)
}

.icon {
    width: 50px;
    height: 50px;
    margin-inline-end: 15px
}


    
</style>