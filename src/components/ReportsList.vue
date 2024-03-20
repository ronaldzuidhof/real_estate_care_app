<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <article v-for="report in inspectionSelected.getReports()" :key="report.id">
        <header v-touch:tap="SelectReport" :data-id="report.id">
            <h4>{{report.getReportName()}}</h4>
            <div class="status">
                <h5>Status:</h5>
                <h5 v-if="!report.getReportRequired()" class="finished">Niet benodigd</h5>
                <h5 v-else-if="reportStatus(report.id)" class="finished">Gereed</h5> 
                <h5 v-else class="unfinished">Open</h5>
            </div>
            <svg-icon type="mdi" :path="icons[5]" class="icon" v-if="reportSelected"></svg-icon>
            <svg-icon type="mdi" :path="icons[6]" class="icon" v-else></svg-icon>
        </header>

        <reportDetails :id="report.id" v-if="reportSelected"/>

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
        SelectReport(event){
            // set the selected report to the store
            this.$store.dispatch('fetchReportSelected', this.$store.state.inspectionSelected.getReports()[event.currentTarget.getAttribute("data-id")])
            // debug
            console.log(this.reportSelected)
            console.log(this.reportSelected.getId())
        }
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
    },
    created(){
        console.log(this.reportSelected)
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

.status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-block-end: 0.4rem
}

.icon {
    float: right;
}

.unfinished {
    color: red;
}

.finished {
    color: green
}

</style>