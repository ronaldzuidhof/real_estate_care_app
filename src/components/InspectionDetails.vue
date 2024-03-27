<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <header>
            <h1>Rapporten</h1>
            <div class="status">
                <h2>Status:</h2>
                <select :disabled="!inspectionSelectedEdit" :class="inspectionStatus" v-model="this.inspectionSelected.finished">
                    <option :selected="inspectionStatus === 'finished'" value="finished" class="finished">Gereed</option>
                    <option :selected="inspectionStatus === 'unfinished'" value="unfinished" class="unfinished">Open</option>
                </select>
            </div>
        </header>
        
        <table>
            <tr>
                <th>Adres:</th>
                <td><input type="text" :disabled="!inspectionSelectedEdit" v-model="this.inspectionSelected.address"></td>
            </tr>
            <tr>
                <th>Stad:</th>
                <td><input type="text" :disabled="!inspectionSelectedEdit" v-model="this.inspectionSelected.city"></td>
            </tr>
            <tr>
                <th>Datum:</th>
                <td><input 
                    type="date" 
                    :disabled="!inspectionSelectedEdit" 
                    :value="this.inspectionSelected.getDateInput()" 
                    @input="this.inspectionSelected.inspectionDate = ($event.target.value.slice(0,10) + this.inspectionSelected.inspectionDate.slice(10) )">
                </td>
            </tr>
            <tr>
                <th>Tijd:</th>
                <td><input 
                    type="time" 
                    :disabled="!inspectionSelectedEdit" 
                    :value="this.inspectionSelected.getTime()" 
                    @input="this.inspectionSelected.inspectionDate = (this.inspectionSelected.inspectionDate.slice(0,11) + $event.target.value.slice(0,5)) + this.inspectionSelected.inspectionDate.slice(16)">
                </td>
            </tr>
            <tr>
                <th>Inspecteur:</th>
                <td><input type="text" :disabled="!inspectionSelectedEdit" v-model="this.inspectionSelected.inspector"></td>
            </tr>
        </table>

        <ReportsList />

    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import ReportsList from '@/components/ReportsList.vue';

export default {
    name: 'InspectionDetails',
    components: {
        ReportsList,
    },
    methods: {
        // function to convert the dateTime to UTC format
        convertDateTime(dateTime){
            console.log(dateTime)
            return dateTime
            
        }
    },
    computed: {
        // function to get the selected inspection from the store
        inspectionSelected() {
            return this.$store.state.inspectionSelected
        },
        // function to determine the state of the inspection
        inspectionStatus(){
            return this.$store.state.inspectionSelected.finished
        },
        inspectionSelectedEdit() {
            return this.$store.state.inspectionSelectedEdit
        },
    },
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

h1 {
    text-align: left;
    padding-block: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

h2 {
    padding-inline-start: .5rem;
    font-size: 1.2rem;
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

header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.25rem;
    padding-inline-end: 1rem;
    text-wrap: nowrap;
}

table {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    padding-inline-start: 7px;
}

td {
    padding-inline-start: .5rem
}

select {
    padding-inline: .5rem;
    font-weight: bold;
    font-size: 1.4rem;
}

.status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

.unfinished {
    color: red;
}

.finished {
    color: green
}

</style>