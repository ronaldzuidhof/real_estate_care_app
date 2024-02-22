<template lang="">
    <div>
        <button>
            <!--=injected content comes here-->
            <slot></slot>
            <!-------------------------------->
        </button>
        
    </div>
</template>
<script>
export default {
    name: "MainButton",
}
</script>
<style scoped>

button {
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
}
    
</style>