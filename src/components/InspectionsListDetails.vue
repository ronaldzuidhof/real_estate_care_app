<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <article>
            
            <header>
                <h1>Rapporten</h1>
                <div class="status">
                    <h2><label for="statusInspection">Status:</label></h2>
                    <select 
                        id="statusInspection"
                        :class="[inspectionStatus, editClass]" 
                        :disabled="!inspectionSelectedEdit" 
                        v-model="this.inspectionSelected.finished"
                    >
                        <option 
                            :selected="inspectionStatus === 'finished'" 
                            value="finished" 
                            class="finished"
                        >Gereed</option>
                        <option 
                            :selected="inspectionStatus === 'unfinished'" 
                            value="unfinished" 
                            class="unfinished"
                        >Open</option>
                    </select>
                    <svg-icon 
                        v-if="inspectionSelectedEdit && userGroup !=='guest' && source !== 'scheduled'" 
                        :path="icons[8]" 
                        class="icon" 
                        alt="Knop icoon opslaan"
                        type="mdi" 
                        v-touch:tap="editInspection"
                    ></svg-icon>
                    <svg-icon 
                        v-else-if="userGroup !=='guest' && source !== 'scheduled'" 
                        :path="icons[7]" 
                        class="icon" 
                        alt="Knop icoon bewerken"
                        type="mdi" 
                        v-touch:tap="editInspection"
                    ></svg-icon>
                </div>
            </header>

            <table>
                <tr>
                    <th><label for="address">Adres:</label></th>
                    <td><input 
                        :class="editClass"
                        :disabled="!inspectionSelectedEdit" 
                        id="address"
                        type="text" 
                        v-model="this.inspectionSelected.address" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="city">Stad:</label></th>
                    <td><input 
                        :class="editClass"
                        :disabled="!inspectionSelectedEdit" 
                        id="city"
                        type="text" 
                        v-model="this.inspectionSelected.city" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="date">Datum:</label></th>
                    <td><input 
                        :value="this.inspectionSelected.getDateInput()" 
                        @input="this.inspectionSelected.inspectionDate = convertDate($event.target.value)"
                        :class="editClass"
                        :disabled="!inspectionSelectedEdit" 
                        id="date"
                        type="date" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="time">Tijd:</label></th>
                    <td><input 
                        :value="this.inspectionSelected.getTime()" 
                        @input="this.inspectionSelected.inspectionDate = convertTime($event.target.value)"
                        :disabled="!inspectionSelectedEdit" 
                        :class="editClass"
                        id="time"
                        type="time" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="inspector">Inspecteur:</label></th>
                    <td><input 
                        :class="editClass"
                        :disabled="!inspectionSelectedEdit" 
                        id="inspector"
                        type="text" 
                        v-model="this.inspectionSelected.inspector" 
                    ></td>
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
    name: 'InspectionsListDetails',
    components: {
        ReportsList, SvgIcon
    },
    methods: {
        // function to convert the date part of the inspectionSelected inspectionDate
        convertDate(date){
            // combine the received date with the last part of inspectionDate
            return date.slice(0,10) + this.inspectionSelected.inspectionDate.slice(10)
        },
        // function to convert the time part of the inspectionSelected inspectionDate
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
        // function to determine the "finished" entry of the inspection
        inspectionStatus(){
            return this.$store.state.inspections.inspectionSelected.finished
        },
        // function to return the inspection selected edit entry of the store
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
        // function to return the icons array from the store
        icons() {
            return this.$store.state.inspections.icons
        },
        // function to return the group of the user that is logged in from the store
        userGroup(){
            return this.$store.state.user.userLoggedIn.group
        },
        // function to return the inspection source from the store (scheduled or completed)
        source(){
            return this.$store.state.inspections.inspectionSelectedSource
        }
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

.icon:hover {
    cursor: pointer;
}

</style>