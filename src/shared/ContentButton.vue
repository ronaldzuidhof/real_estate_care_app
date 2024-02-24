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
    name: "MainContentButton",
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>
.button {
    font-weight: bold;
    font-size: 1.5rem;
    color: rgba(41,52,57,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid black;
    border-radius: 10px;
}

</style>