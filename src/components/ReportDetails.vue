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
                            <select :disabled="!inspectionSelectedEdit" v-model="this.reportSelected.details[detail.id][key]" :class="editClass">
                                <option v-for="(value2, key2) in detail.getOptions(key)" :value="key2" :key="key2" :selected="key2 === value.toString()">{{value2}}</option>
                            </select>
                        </div>
                        <div v-else-if="detail.getCheckbox(key)" class="checkbox">
                            <input type="checkbox" :checked="value" :disabled="!inspectionSelectedEdit" v-model="this.reportSelected.details[detail.id][key]">
                        </div>
                        <div v-else-if="detail.getPictures(key) && !inspectionSelectedEdit" class="picturesList">
                            <a v-for="(valueLink, keyLink) in detail.getPictures(key)" :key="keyLink" :href="valueLink" target="_blank">{{keyLink}}</a>
                        </div>
                        <div v-else-if="detail.getLink(key) && !inspectionSelectedEdit">
                            <a :href="'/documents/general/' + detail.getLink(key)" target="_blank">{{detail.getLink(key)}}</a>
                        </div>
                        <div v-else :class="editClass">
                            <input :disabled="!inspectionSelectedEdit" v-model="this.reportSelected.details[detail.id][key]">
                        </div>
                    </td>
                </div>
            </tr>
        </table>

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
        // function to get the selected inspection from the store
        inspectionSelectedId() {
            return this.$store.state.inspectionSelected.getId()
        },
        // function
        inspectionSelectedEdit(){
            return this.$store.state.inspectionSelectedEdit
        },
        // function
        reportSelected() {
            return this.$store.state.reportSelected
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
        }
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
    padding-inline-end: .5rem;
    margin-block-end: 10px;
    padding-block-start: 7px;
    border-block-start: 1px solid black;
}

label {
    font-weight: bold;
}

.checkbox {
    padding-block-start: .3rem;
    padding-inline-start: .3rem;
}

input, select, a {
    padding-inline-start: .3rem;
    width: 100%;
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

a {
    word-break: break-all
}

tr div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-block-end: .3rem;
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

a {
    width: 100%;
}

.picturesList {
    display: flex;
    flex-direction: column;
}

.noData td {
    width: 100%;
    color: red;
}

.editClass {
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

</style>