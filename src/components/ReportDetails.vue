<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    
    <div v-if="report.length">
        <table v-for="detail in report" :key="detail.id">
            <tr v-for="(value, key) in detail" :key="key">
                <div v-if="detail.convertKeyToText(key)">
                    <th>{{detail.convertKeyToText(key)}}:</th>
                    <td v-if="value">{{value}}</td>
                    <td v-else>n.v.t</td>
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
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    computed: {
        // function to get the selected report from the store based on the id (prop)
        report(){
            return this.$store.state.inspectionSelected.getReports()[this.id].getReportDetails()
        },
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

.noData {
    color: red;
}


</style>