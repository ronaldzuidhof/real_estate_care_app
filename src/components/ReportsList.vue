<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <article v-for="report in inspectionSelected.getReports()" :key="report.id">

        <header>
            <h4>{{report.getReportName()}}</h4>
            <div class="status">
                <h5>Status:</h5>
                <h5 v-if="!report.getReportRequired()">Niet benodigd</h5>
                <select :disabled="!reportSelectedEdit">
                    <option :selected="reportStatus(report.id)">Gereed</option>
                    <option :selected="!reportStatus(report.id)">Open</option>
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
            return this.$store.state.inspectionSelected.getReportStatus(id)
        },
        reportRequired(id){
            return this.$store.state.inspectionSelected.getReportRequired(id)
        },
        // function to set the selected report to the store
        selectReport(event){
            // load preventDefault to stop propagnation
            event.preventDefault();
            // reset the report selected edit entry in the store
            this.$store.dispatch('clearReportSelectedEdit')
            // check if reportSelected has content
            if (!this.reportSelected){
                // set the selected report to the store
                this.$store.dispatch('fetchReportSelected', this.$store.state.inspectionSelected.getReports()[event.currentTarget.getAttribute("data-id")]) 
            }
            // check if report is already selected
            else if (this.reportSelected.getId() === Number(event.currentTarget.getAttribute("data-id"))){
                // reset the selected report in the store
                this.$store.dispatch('clearReportSelected')
            } else {
                // set the selected report to the store
                this.$store.dispatch('fetchReportSelected', this.$store.state.inspectionSelected.getReports()[event.currentTarget.getAttribute("data-id")])
            } 
        },
    },
    computed: {
        // function to get the selected inspection from the store
        inspectionSelected() {
            return this.$store.state.inspectionSelected
        },
        reportSelected() {
            return this.$store.state.reportSelected
        },
        icons() {
            return this.$store.state.icons
        },
        reportSelectedEdit() {
            return this.$store.state.reportSelectedEdit
        },
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

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
    padding-block-end: 0.6rem
}

</style>