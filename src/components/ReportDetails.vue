<template lang="">
    <article v-for="report in inspectionSelected.getReports()" :key="report.id">
        <header>
            <h4>Naam rapport: {{report.getReportName()}}</h4>
            <div class="status">
                <h5>Status:</h5>
                <h5 v-if="!report.getReportRequired()" class="finished">Niet benodigd</h5>
                <h5 v-else-if="reportStatus(report.id)" class="finished">Gereed</h5> 
                <h5 v-else class="unfinished">Open</h5>
            </div>
        </header>
        <table v-for="detail in report.getReportDetails()" :key="detail.id">
            <tr v-for="(value, key) in detail" :key="key">
                <div v-if="detail.convertKeyToText(key)">
                    <th>{{detail.convertKeyToText(key)}}:</th>
                    <td v-if="value">{{value}}</td>
                    <td v-else>n.v.t</td>
                </div>
            </tr>
        </table>
    </article>
</template>

<script>
export default {
    name: 'ReportDetails',
    methods: {
        // function to get the status for the selected report 'id'
        reportStatus(id){
            return this.$store.state.inspectionSelected.getReportStatus(id)
        },
        reportRequired(id){
            return this.$store.state.inspectionSelected.getReportRequired(id)
        }
    },
    computed: {
        // function to get the selected inspection from the store
        inspectionSelected() {
            return this.$store.state.inspectionSelected
        }
    },
}
</script>

<style scoped>

h4 {
    padding-block: .5rem
}

h5 {
    padding-inline-start: .5rem
}

header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    padding-inline-end: 1rem;
    text-wrap: nowrap;
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
    align-items: center
}

.unfinished {
    color: red;
}

.finished {
    color: green
}

</style>