<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <h1>Login</h1>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports


// export component
export default {
    name: "TheLogin",
    components: {
        // load used components
    },
    computed: {
        // place holder
    },
    methods: {
        // place holder
    },
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:"position1 position2" "position3 position4";
    height: 80%;
    gap: 7px;
    padding: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
    background-color: rgba(255,255,255,1);
    border-inline: 1px solid var(--color-1);
}

</style>