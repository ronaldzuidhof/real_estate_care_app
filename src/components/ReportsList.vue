<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <article v-for="report in inspectionSelected.getReports()" :key="report.id">

        <header>
            <h4>{{report.getReportName()}}</h4>

            <div class="status">
                <h5>Status:</h5>
                <h5 v-if="!report.getReportRequired()">Niet benodigd</h5>
                <select :disabled="!inspectionSelectedEdit" :class="reportStatus(report.id)" v-model="this.inspectionSelected.reports[report.id].finished">
                    <option :selected="reportStatus(report.id)" value=true>Gereed</option>
                    <option :selected="!reportStatus(report.id)" value=false>Open</option>
                </select>
            </div>
            <div v-if="reportSelected" v-touch:tap="selectReport" :data-id="report.id">
                <svg-icon type="mdi" :path="icons[6]" class="icon" v-if="reportSelected.getId() === report.id"></svg-icon>
                <svg-icon type="mdi" :path="icons[5]" class="icon" v-else></svg-icon>
            </div>
            <div v-else v-touch:tap="selectReport" :data-id="report.id">
                <svg-icon type="mdi" :path="icons[5]" class="icon"></svg-icon>
            </div>
        </header>

        <div v-if="reportSelected">
            <div v-if="report.getLink(report.id) && reportSelected.getId() === report.id" class="document">
                <h3>Aangemeld:</h3>
                <a :href="'/documents/modifications/inspection_' + inspectionSelectedId + '/' + report.getLink(report.id)" target="_blank">{{report.getLink(report.id)}}</a>
            </div>
        </div>

        <div v-if="reportSelected"> 
            <reportDetails v-if="reportSelected.getId() === report.id"/>
        </div>

    </article>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import reportDetails from '@/components/reportDetails.vue';
import SvgIcon from '@jamescoyle/vue-icon'

export default {
    name: 'ReportList',
    components: {
        reportDetails, SvgIcon
    },
    methods: {
        // function to get the status for the selected report 'id'
        reportStatus(id){
            return this.$store.state.inspections.inspectionSelected.getReportStatus(id)
        },
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
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

h3 {
    font-size: 1rem;
    padding-inline-end: .5rem;
}

h4 {
    width: 100%;
    padding-block: .4rem
}

h5 {
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

</style>