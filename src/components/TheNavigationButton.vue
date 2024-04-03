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
    name: "TheNavigationButton",
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>
.button {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid var(--color-1);
    border-radius: 12px;
    box-shadow: 2px 2px 3px var(--color-1-shadow);
}

</style>