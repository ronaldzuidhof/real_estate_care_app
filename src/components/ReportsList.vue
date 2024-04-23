<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <article 
        v-for="report in inspectionSelected.getReports()" 
        :key="report.id"
    >
        <header>
            <h1>{{report.getReportName()}}</h1>
            <div 
                v-if="report.getReportRequired()" 
                class="status"
            >
                <h2><label :for="'statusReport' + report.id">Status:</label></h2>
                <select
                    :id="'statusReport' + report.id"
                    :class="[reportClassStatus(report.id), editSelectClass]" 
                    :disabled="!inspectionSelectedEdit" 
                    v-model="this.inspectionSelected.reports[report.id].finished"
                >
                    <option 
                        :selected="reportStatus(report.id) === true" 
                        class="finished"
                        value="true"
                    >Gereed</option>
                    <option 
                        :selected="reportStatus(report.id) === false" 
                        class="unfinished"
                        value="false"
                    >Open</option>
                </select>
            </div>
            <div v-else class="status">
                <h2>Status:</h2>
                <h2 class="finished">Niet benodigd</h2>
            </div>

            <div 
                v-if="reportSelected && report.getReportRequired()" 
                :data-id="report.id"
                v-touch:tap="selectReport" 
            >
                <svg-icon 
                    v-if="reportSelected.getId() === report.id"
                    :path="icons[6]" 
                    class="icon"
                    alt="Knop icoon invouwen"
                    type="mdi" 
                ></svg-icon>
                <svg-icon 
                    v-else
                    :path="icons[5]" 
                    class="icon" 
                    alt="Knop icoon uitvouwen"
                    type="mdi" 
                ></svg-icon>
            </div>
            <div v-else-if="report.getReportRequired()" 
                :data-id="report.id"
                v-touch:tap="selectReport" 
            >
                <svg-icon 
                    :path="icons[5]" 
                    class="icon"
                    alt="Knop icoon uitvouwen"
                    type="mdi" 
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
                    :data-id="this.reportSelected.currentSituation"
                    :class="editLinkClass"
                    :readonly="!inspectionSelectedEdit"
                    id="link"
                    v-model="this.reportSelected.currentSituation"
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
        // function to get the status for the selected report 'id' from the store
        reportStatus(id){
            return this.$store.state.inspections.inspectionSelected.getReportStatus(id)
        },
        // function to return a class based on the report status from the store
        reportClassStatus(id){
            // return "finished" class
            if(this.$store.state.inspections.inspectionSelected.getReportStatus(id) === "true"){
                return "finished"
            // return "unfinished" class
            } else {
                return "unfinished"
            }
        },
        // function to return the if the report is required from the store
        reportRequired(id){
            return this.$store.state.inspections.inspectionSelected.getReportRequired(id)
        },
        // function to set the selected report to the store
        selectReport(event){
            // load preventDefault to stop propagnation
            event.preventDefault();
            // clear the report selected edit entry in the store
            this.$store.dispatch('inspections/clearReportSelectedEdit')
            // check if reportSelected has content
            if (!this.reportSelected){
                // set the selected report to the store
                this.$store.dispatch('inspections/fetchReportSelected', this.$store.state.inspections.inspectionSelected.getReports()[event.currentTarget.getAttribute("data-id")]) 
            }
            // check if report is already selected
            else if (this.reportSelected.getId() === Number(event.currentTarget.getAttribute("data-id"))){
                // clear the selected report in the store
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
        // function to open the selected document in a new browser window
        openLink(event){
            // load event data-id in pictureName variable
            const linkName = event.currentTarget.getAttribute("data-id")
            // check if inspection selected edit is not active
            if(!this.inspectionSelectedEdit){
                // open popup window, open file if the user accepts
                if(confirm("U gaat het bestand: " + linkName + " openen !")){
                    // load event data-id in documentName variable
                    const documentName = event.currentTarget.getAttribute("data-id")
                    // check if document name is not empty
                    if (documentName){
                        // Open a new browser window for the document
                    window.open("documents/modifications/inspection_" + this.inspectionSelectedId + "/" + documentName)
                    }
                } 
            }
        },
    },
    computed: {
        // function to get the selected inspection from the store
        inspectionSelected() {
            return this.$store.state.inspections.inspectionSelected
        },
        // function to get the report selected object from the store
        reportSelected() {
            return this.$store.state.inspections.reportSelected
        },
        // function to return the icons array from the store
        icons() {
            return this.$store.state.inspections.icons
        },
        // function to return the inspection selected edit entry from the store
        inspectionSelectedEdit() {
            return this.$store.state.inspections.inspectionSelectedEdit
        },
        // function to get the selected inspection object from the store
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