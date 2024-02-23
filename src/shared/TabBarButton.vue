<template lang="">
    <div class="container">
        <div class="button">
            <!--=injected content comes here-->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "TabBarButton",
}
</script>

<style scoped>
.container {
    padding: 0;
}
.button {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: 10px;
}
</style>