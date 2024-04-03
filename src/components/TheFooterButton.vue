<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <div class="button">
        <!--=injected content comes here-->
        <slot></slot>
    </div>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// export shared component
export default {
    name: "TheFooterButton",
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>
.button {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

</style>