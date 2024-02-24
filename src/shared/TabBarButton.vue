<template lang="">
    <div class="button">
        <!--=injected content comes here-->
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TabBarButton",
}
</script>

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