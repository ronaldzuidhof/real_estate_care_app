<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <div class="button">
        <slot>
            <!--=injected content-->
        </slot>
    </div>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
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