<template lang="">
    <section>
        <v-data-table :items="items"></v-data-table>
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
            items: reportData
        }
    }, 
    methods: {
        dateConversion(dateIsoFormat){
            return moment(dateIsoFormat).format('DD-MM-YYYY');
        },
        timeConversion(dateIsoFormat){
            return moment(dateIsoFormat).format('HH:mm');
        },
        getHeadersJson(){
            
        }
    }
}

//https://vuetifyjs.com/en/components/data-tables/basics/#server-side-tables

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