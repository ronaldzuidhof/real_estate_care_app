<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <h1>Meldingen</h1>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports


// export component
export default {
    name: "NotificationsList",
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    display: flex;
    height: 80%;
    gap: 7px;
    padding: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
    background-color: rgba(255,255,255,1);
    border-inline: 1px solid var(--color-1);
}


</style>