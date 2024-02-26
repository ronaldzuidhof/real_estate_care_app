<template lang="">
    <section>
        <table>
            <tr>
                <th>Datum</th>
                <th>Tijd</th>
                <th>Stad</th>
                <th>Adres</th>
            </tr>
            <tr v-for="report in reports" :key=report.id>
                <td>{{dateConversion(report.inspectionDate)}}</td>
                <td>{{timeConversion(report.inspectionDate)}}</td>
                <td>{{report.city}}</td>
                <td>{{report.streetname}} {{report.houseNumber}}</td>
            </tr>
        </table>
    </section>
</template>
<script>
// imports
import reportData from '@/assets/reports.json';
import moment from 'moment';

export default {
    name: "InspectionList",
    data() {
        return{
            reports: reportData,
        }
    }, 
    methods: {
        dateConversion(dateIsoFormat){
            return moment(dateIsoFormat).format('DD-MM-YYYY');
        },
        timeConversion(dateIsoFormat){
            return moment(dateIsoFormat).format('HH:mm');
        },
    }
}
</script>
<style scoped>

section {
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid black;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    padding-inline-start: 5px;
    padding-block: 2px;
    text-align: left;
    border: 1px solid var(--color-1);
}
    
</style>