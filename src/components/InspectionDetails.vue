<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <article>
            <header>
                <h1>Rapporten</h1>
                <div class="status">
                    <h2>Status:</h2>
                    <select :disabled="!inspectionSelectedEdit" :class="inspectionStatus" v-model="this.inspectionSelected.finished">
                        <option :selected="inspectionStatus === 'finished'" value="finished" class="finished">Gereed</option>
                        <option :selected="inspectionStatus === 'unfinished'" value="unfinished" class="unfinished">Open</option>
                    </select>
                    <svg-icon v-if="inspectionSelectedEdit" type="mdi" :path="icons[8]" class="icon" v-touch:tap="editInspection"></svg-icon>
                    <svg-icon v-else type="mdi" :path="icons[7]" class="icon" v-touch:tap="editInspection"></svg-icon>
                </div>
            </header>
            
            <table>
                <tr>
                    <th>Adres:</th>
                    <td><input type="text" :disabled="!inspectionSelectedEdit" v-model="this.inspectionSelected.address" :class="editClass"></td>
                </tr>
                <tr>
                    <th>Stad:</th>
                    <td><input type="text" :disabled="!inspectionSelectedEdit" v-model="this.inspectionSelected.city" :class="editClass"></td>
                </tr>
                <tr>
                    <th>Datum:</th>
                    <td><input 
                        type="date" 
                        :disabled="!inspectionSelectedEdit" 
                        :value="this.inspectionSelected.getDateInput()" 
                        @input="this.inspectionSelected.inspectionDate = convertDate($event.target.value)">
                    </td>
                </tr>
                <tr>
                    <th>Tijd:</th>
                    <td><input 
                        type="time" 
                        :disabled="!inspectionSelectedEdit" 
                        :value="this.inspectionSelected.getTime()" 
                        @input="this.inspectionSelected.inspectionDate = convertTime($event.target.value)">
                    </td>
                </tr>
                <tr>
                    <th>Inspecteur:</th>
                    <td><input type="text" :disabled="!inspectionSelectedEdit" v-model="this.inspectionSelected.inspector" :class="editClass"></td>
                </tr>
            </table>
        </article>

        <ReportsList />

    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import ReportsList from '@/components/ReportsList.vue';
import SvgIcon from '@jamescoyle/vue-icon'

export default {
    name: 'InspectionDetails',
    components: {
        ReportsList, SvgIcon
    },
    methods: {
        // function to update the date part of the inspectionSelected inspectionDate
        convertDate(date){
            // combine the received date with the last part of inspectionDate
            return date.slice(0,10) + this.inspectionSelected.inspectionDate.slice(10)
        },
        // function to update the time part of the inspectionSelected inspectionDate
        convertTime(time) {
            // combine the received time with the first part of inspectionDate
            return this.inspectionSelected.inspectionDate.slice(0,11) + time.slice(0,5) + this.inspectionSelected.inspectionDate.slice(16)
        },
        // function to edit the selected inspection (enable fields)
        editInspection(event){
            // load preventDefault to stop propagnation
            event.preventDefault();
            // check state of inspectionSelectedEdit store entry
            if (this.inspectionSelectedEdit){
                // disable all input fields of the reports
                this.$store.dispatch('inspections/clearInspectionSelectedEdit')
            } else {
                // enable all input fields of the reports
                this.$store.dispatch('inspections/setInspectionSelectedEdit')
            }
        }
    },
    computed: {
        // function to get the selected inspection from the store
        inspectionSelected() {
            return this.$store.state.inspections.inspectionSelected
        },
        // function to determine the state of the inspection
        inspectionStatus(){
            return this.$store.state.inspections.inspectionSelected.finished
        },
        // function
        inspectionSelectedEdit() {
            return this.$store.state.inspections.inspectionSelectedEdit
        },
        // function to return the "editClass" if inspection selection edit is active
        editClass(){
            // return editClass
            if(this.inspectionSelectedEdit){
                return "editClass"
            // return empty class
            } else {
                return ""
            }
        },
        // function to return the icons array
        icons() {
            return this.$store.state.inspections.icons
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
    font-size: 1.3rem;
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

article {
    width: 100%;
    padding-inline: 7px;
    margin-block-end: 7px;
    border: 1px solid black;
}

header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.3rem;
    padding-inline-end: 1rem;
    text-wrap: nowrap;
}

table {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    font-size: 1rem;
    text-align: left;
    padding-inline-start: 7px;
    margin-block-end: 10px;
}

tr {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-block-end: .3rem;
    padding-inline-end: .5rem
}

td {
    width: 70%;
    padding-inline-start: .5rem;
}

select {
    padding-inline: .5rem;
    font-weight: bold;
    font-size: 1.4rem;
}

input {
    width: 100%;
    padding-inline-start: .3rem;
    border-radius: 2px; 
}

button {
    font-size: 1rem;
    padding-inline: .5rem;
    padding-block: .2rem;
    margin-inline-end: 1rem;
    margin-block-end: 1rem;
    border:1px solid black;
    border-radius: 5px;
    background-color: var(--color-4);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
}

.status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

.icon {
    padding-inline-start: .7rem;
    height: auto;
    width: 60%;
}

.unfinished {
    color: red;
}

.finished {
    color: green
}

.editClass {
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

</style>