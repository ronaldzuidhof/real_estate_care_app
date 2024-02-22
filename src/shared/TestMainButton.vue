<template lang="">
    <div class="container">
        <div class="button">
            <!--=injected content comes here-->
            <slot></slot>
            {{text}}
            <!-------------------------------->
        </div>
    </div>
</template>
<script>
export default {
    name: "MainButton",
    props:{
        text: {
            type: String,
            required: true
        },
    }
}
</script>
<style scoped>

.container {
    padding: 0;
}

.button {
    font-weight: bold;
    color: rgba(41,52,57,1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding-block: 10px;
}

</style>