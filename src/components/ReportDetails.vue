<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    
    <div v-if="report.length">
        <table v-for="detail in report" :key="detail.id">
            <tr v-for="(value, key) in detail" :key="key">
                <div v-if="detail.convertKeyToText(key)">
                    <td>
                        <label>{{detail.convertKeyToText(key)}}:</label>
                    </td>
                    <td>
                        <div v-if="detail.getOptions(key)">
                            <select :disabled="!reportSelectedEdit" v-model="this.reportSelected.details[detail.id][key]">
                                <option v-for="(value2, key2) in detail.getOptions(key)" :value="key2" :key="key2" :selected="key2 === value.toString()">{{value2}}</option>
                            </select>
                        </div>
                        <div v-else-if="detail.getCheckbox(key)" class="checkbox">
                            <input type="checkbox" :checked="value" :disabled="!reportSelectedEdit" v-model="this.reportSelected.details[detail.id][key]">
                        </div>
                        <div v-else>
                            <input :disabled="!reportSelectedEdit" v-model="this.reportSelected.details[detail.id][key]">
                        </div>
                    </td>
                </div>
            </tr>
        </table>

        <div class="control">
            <button v-if="reportSelectedEdit" v-touch:tap="editReport">Rapport sluiten</button>
            <button v-else v-touch:tap="editReport">Rapport bewerken</button>
        </div>

    </div>

    <div v-else>
        <table>
            <tr class="noData"><td>Geen data aanwezig</td></tr>
        </table>
    </div>

</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
export default {
    name: 'reportDetails',
    computed: {
        // function to get the selected report details from the store 
        report(){
            return this.$store.state.reportSelected.getReportDetails()
        },
        reportSelectedEdit(){
            return this.$store.state.reportSelectedEdit
        },
        reportSelected() {
            return this.$store.state.reportSelected
        },
    },
    methods: {
        // function to edit the selected report (enable fields)
        editReport(event){
            // load preventDefault to stop propagnation
            event.preventDefault();
            // check state of reportSelectedEdit store entry
            if (this.reportSelectedEdit){
                // disable all input fields of the reports
                this.$store.dispatch('clearReportSelectedEdit')
                // clear the report selected entry in the store
                this.$store.dispatch('clearReportSelected')
            } else {
                // enable all input fields of the reports
                this.$store.dispatch('setReportSelectedEdit')
            }
        }
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>
    
table {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    padding-inline-start: 7px;
    margin-block-end: 10px;
    padding-block-start: 7px;
    border-block-start: 1px solid black;
}

label {
    font-weight: bold;
}

input, select {
    width: 100%;
    padding-inline-start: .3rem;
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
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

tr div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-block-end: .3rem;
    padding-inline-end: .5rem;
}

td:nth-child(odd) {
    width: 45%;
}

td:nth-child(even) {
    width: 55%;
}

.checkbox input {
    height: 1rem;
    width: 1rem;
    box-shadow: none;
}

.control {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.noData td {
    width: 100%;
    color: red;
}

</style>