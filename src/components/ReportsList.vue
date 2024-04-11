<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <article v-for="report in inspectionSelected.getReports()" :key="report.id">

        <header>
            <h1>{{report.getReportName()}}</h1>
            <div v-if="report.getReportRequired()" class="status">
                <h2><label :for="'statusReport' + report.id">Status:</label></h2>
                <select
                    :id="'statusReport' + report.id"
                    :disabled="!inspectionSelectedEdit" 
                    :class="[reportClassStatus(report.id), editSelectClass]" 
                    v-model="this.inspectionSelected.reports[report.id].finished"
                >
                    <option 
                        :selected="reportStatus(report.id) === true" 
                        value="true"
                        class="finished"
                    >Gereed</option>
                    <option 
                        :selected="reportStatus(report.id) === false" 
                        value="false"
                        class="unfinished"
                    >Open</option>
                </select>
            </div>

            <div v-else class="status">
                <h2>Status:</h2>
                <h2 class="finished">Niet benodigd</h2>
            </div>

            <div 
                v-if="reportSelected && report.getReportRequired()" 
                v-touch:tap="selectReport" 
                :data-id="report.id"
            >
                <svg-icon 
                    type="mdi" 
                    :path="icons[6]" 
                    class="icon" 
                    v-if="reportSelected.getId() === report.id"
                ></svg-icon>
                <svg-icon 
                    type="mdi" 
                    :path="icons[5]" 
                    class="icon" 
                    v-else
                ></svg-icon>
            </div>
            <div v-else-if="report.getReportRequired()" 
                v-touch:tap="selectReport" 
                :data-id="report.id"
            >
                <svg-icon 
                    type="mdi" 
                    :path="icons[5]" 
                    class="icon"
                ></svg-icon>
            </div>
        </header>

        <div v-if="reportSelected">
            <div 
                v-if="report.getLink(report.id) && reportSelected.getId() === report.id" 
                class="document"
            >
                <h3><label for="link">Aangemeld:</label></h3>
                <input
                    id="link"
                    v-model="this.reportSelected.currentSituation"
                    :readonly="!inspectionSelectedEdit"
                    :class="editLinkClass"
                    :data-id="this.reportSelected.currentSituation"
                    v-touch:tap="openLink"
                >
            </div>
        </div>

        <div v-if="reportSelected"> 
            <ReportsListDetails v-if="reportSelected.getId() === report.id"/>
        </div>

    </article>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import ReportsListDetails from '@/components/ReportsListDetails.vue';
import SvgIcon from '@jamescoyle/vue-icon'

export default {
    name: 'ReportsList',
    components: {
        ReportsListDetails, SvgIcon
    },
    methods: {
        // function to get the status for the selected report 'id'
        reportStatus(id){
            return this.$store.state.inspections.inspectionSelected.getReportStatus(id)
        },
        // function to return a class based on the report status
        reportClassStatus(id){
            // return class finished based on report status
            if(this.$store.state.inspections.inspectionSelected.getReportStatus(id) === "true"){
                return "finished"
            // return unfinished class
            } else {
                return "unfinished"
            }
        },
        // function
        reportRequired(id){
            return this.$store.state.inspections.inspectionSelected.getReportRequired(id)
        },
        // function to set the selected report to the store
        selectReport(event){
            // load preventDefault to stop propagnation
            event.preventDefault();
            // reset the report selected edit entry in the store
            this.$store.dispatch('inspections/clearReportSelectedEdit')
            // check if reportSelected has content
            if (!this.reportSelected){
                // set the selected report to the store
                this.$store.dispatch('inspections/fetchReportSelected', this.$store.state.inspections.inspectionSelected.getReports()[event.currentTarget.getAttribute("data-id")]) 
            }
            // check if report is already selected
            else if (this.reportSelected.getId() === Number(event.currentTarget.getAttribute("data-id"))){
                // reset the selected report in the store
                this.$store.dispatch('inspections/clearReportSelected')
            } else {
                // set the selected report to the store
                this.$store.dispatch('inspections/fetchReportSelected', this.$store.state.inspections.inspectionSelected.getReports()[event.currentTarget.getAttribute("data-id")])
            } 
        },
        // function to create a link to the modifications document for the report
        createLink(reportLink){
            return "documents/modifications/inspection_" + this.inspectionSelectedId + "/" + reportLink
        },
        // function to open the selected document in a browser window
        openLink(event){
            // check if inspection selected edit is not active
            if(!this.inspectionSelectedEdit){
                // load event data-id in documentName variable
                const documentName = event.currentTarget.getAttribute("data-id")
                // check if pictureName is not empty
                if (documentName){
                    // Open a new browser window with the document
                window.open("documents/modifications/inspection_" + this.inspectionSelectedId + "/" + documentName)
                }
            }   
        },
    },
    computed: {
        // function to get the selected inspection from the store
        inspectionSelected() {
            return this.$store.state.inspections.inspectionSelected
        },
        // function
        reportSelected() {
            return this.$store.state.inspections.reportSelected
        },
        // function
        icons() {
            return this.$store.state.inspections.icons
        },
        // function
        inspectionSelectedEdit() {
            return this.$store.state.inspections.inspectionSelectedEdit
        },
        // function to get the selected inspection from the store
        inspectionSelectedId() {
            return this.$store.state.inspections.inspectionSelected.getId()
        },
        // function to return the "editLinkClass" if inspection selection edit is active for links
        editLinkClass(){
            // return editClass
            if(this.inspectionSelectedEdit){
                return "editClass"
            // return empty class
            } else {
                return "linkClass"
            }
        },
         // function to return the "editSelectClass" if inspection selection edit is active
         editSelectClass(){
            // return editClass
            if(this.inspectionSelectedEdit){
                return "editClass"
            // return empty class
            } else {
                return ""
            }
        },
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

h3 {
    font-size: 1rem;
    padding-inline-end: .5rem;
}

h1 {
    width: 100%;
    padding-block: .4rem;
    font-weight: bold;
}

h5 {
    padding-inline-start: .5rem
}

h2 {
    font-size: 0.83em;
    font-weight: bold;
    padding-inline-start: .5rem
}

header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.25rem;
    padding-inline-end: 1rem;
    text-wrap: nowrap;
    overflow-wrap: break-word;
}

article {
    width: 100%;
    padding-inline: 7px;
    margin-block-end: 7px;
    border: 1px solid black;
}

table {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    padding-inline-start: 7px;
    margin-block-end: 10px;
    border: 1px solid black;
    border-radius: 10px;
}

td {
    padding-inline-start: .5rem
}

select {
    padding-inline: .5rem;
    font-weight: bold;
}

input {
    width: 100%;
    padding-inline-start: .3rem;
}

.status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-block-end: 0.3rem
}

.document {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-block: .3rem;
    padding-inline-start: .5rem;
    padding-inline-end: .5rem;
    border-block-start: 1px solid black;
}

.document input:focus {
    outline: none;
}

.editClass {
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

.linkClass {
    text-decoration: underline;
}

.linkClass:hover {
    cursor: pointer;
}

.icon:hover {
    cursor: pointer;
}

.unfinished {
    color: red;
}

.finished {
    color: green
}

</style>