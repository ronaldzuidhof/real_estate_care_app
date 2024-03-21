<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <h1>Inspectie rapporten: {{title}}</h1>
        <table>
            <tr>
                <th>Datum</th>
                <th>Stad</th>
                <th>Adres</th>
            </tr>
            <tr v-for="inspection in inspections" :key="inspection.getId()" :data-id="inspection.getId()" v-touch:tap="SelectInspection">
                <td>{{inspection.getDate()}}</td>
                <td>{{inspection.getCity()}}</td>
                <td>
                    <div class="status">
                        {{inspection.getAddress()}}
                        <div v-if="inspection.getStatus()" class="dot finished" ></div>
                        <div v-else class="dot unfinished" ></div> 
                    </div>
                </td>
            </tr>
        </table>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>

export default {
    name: "InspectionList",
    components: {},
    methods: {
        // function to load the DetailsView for selected inspection
        SelectInspection(event){
            // open DetailsView with data-id from event
            this.$router.push({
                name: 'details',
                params: {
                    id: event.currentTarget.getAttribute("data-id")
                }
            })
        },
    }, 
    computed: {
        // function to
        inspections() {
            return this.$store.state.inspections
        },
        // function to
        icons() {
            return this.$store.state.icons
        },
        // function to
        inspectionSelected() {
            return this.$store.state.inspectionSelected
        },
        // function to
        title() {
            return this.$route.name;
        }
    },
    created(){
        // get all inspections to the store with action 'fetchInspections'
        this.$store.dispatch('fetchInspections')
    }
}


</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

h1 {
    width: 100%;
    text-align: left;
    padding-block: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

section {
    height: 80%;
    padding: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    border: 1px solid black;
}

table {
    width: 100%;
    border: 1px solid var(--color-1);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
    border-collapse: collapse;
    text-align: left;
}

tr {
    font-size: .9rem;
    border-collapse: collapse;
}

td:first-child, th:first-child {
    padding-inline-start: .5rem;
    padding-block: .5rem
}

tr:nth-child(odd){
    background-color: var(--color-4);
}

tr:first-child {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: var(--color-2);
}

tr:hover {
    background-color: var(--color-5);
}

.status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline-end: .4rem;
}

.dot {
  height: .9rem;
  width: .9rem;
  border-radius: 50%;
}

.unfinished {
    background-color: red;
}

.finished {
    background-color: green
}


</style>