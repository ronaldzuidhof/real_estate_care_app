<template lang="">
    <section>
        <v-data-table 
        :headers="headers"
        :items="inspections"
        item-key="value"
        items-per-page="5"
        ></v-data-table>
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
            headers: [
                {title: "ID", allign: "start", sortable: false, value: 'id'},
                {title: "Stad", allign: "start", sortable: true, value: 'city'},
                {title: "Straatnaam", allign: "start", sortable: false, value: 'streetName'},
                {title: "Huisnummer", allign: "start", sortable: false, value: 'houseNumber'},
                {title: "Inspectie datum", allign: "start", sortable: true, value: 'inspectionDate'},
                {title: "Inspectie tijd", allign: "start", sortable: true, value: 'inspectionDate'},
            ],
            inspections: [],
        }
    }, 
    methods: {
        // function to convert date ISO format to defined date format
        dateConversion(dateIsoFormat){
            return moment(dateIsoFormat).format('DD-MM-YYYY');
        },
        // function to convert date ISO format to defined time format
        timeConversion(dateIsoFormat){
            return moment(dateIsoFormat).format('HH:mm');
        },
        // function to extract the inspection objects from the JSON object (Javascript)
        extractJsonInspections(json, headers){
            // loop trough json file
            for (let i = 0; i < json.length; i++){
                // create empty inspection object
                let inspection = new Object();
                // Loop trough headers array and create key/value pairs in inspection object
                for( let j = 0; j < headers.length; j++){
                    let key = headers[j].value
                    if (key === "inspectionDate"){
                        inspection[key] = this.dateConversion(json[i][key])
                        inspection["inspectionTime"] = this.timeConversion(json[i][key])
                    } else {
                        inspection[key] = json[i][key]; 
                    }
                }
                // Add inspection objects to inspections Array
                this.inspections.push(inspection);
            } 
        }
    },
    created(){
        // Call function extractJsonInspections on reportData
        this.extractJsonInspections(reportData, this.headers)
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