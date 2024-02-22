<template lang="">
    <div class="row">
        <div class="col d-flex justify-content-around">
            <MainButton>Button3</MainButton>
            <MainButton>Button4</MainButton>
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-around">
            <MainButton>test</MainButton>
            <MainButton>Button4</MainButton>
        </div>
    </div>

</template>
<script>
import MainButton from '@/shared/MainButton'

export default {
    name: "MainContent",
    components: {
        MainButton,
    }
}
</script>
<style scoped>
.row {
    background-color: white;
}
    
</style>