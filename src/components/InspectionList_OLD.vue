<template lang="">
    <section>
        <v-data-table-virtual 
        :headers="headers"
        :items="inspections"
        height="100%"
        item-value="title"
        density="compact"
        ></v-data-table-virtual>
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
                //{title: "ID", allign: "start", sortable: false, value: 'id'},
                {title: "Datum", allign: "start", sortable: true, value: 'inspectionDate'},
                {title: "Tijd", allign: "start", sortable: true, value: 'inspectionTime'},
                {title: "Stad", allign: "start", sortable: true, value: 'city'},
                {title: "Straatnaam", allign: "start", sortable: false, value: 'streetName'},
                {title: "Num", allign: "start", sortable: false, value: 'houseNumber'}
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
                    // check if "inspectionDate" property then convert to seperate date entrie in array
                    if (key === "inspectionDate"){
                        inspection[key] = this.dateConversion(json[i][key])
                    // check if "inspectionTime" property then convert to seperate time entrie in array
                    } else if (key === "inspectionTime"){
                        inspection["inspectionTime"] = this.timeConversion(json[i]["inspectionDate"])
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

</script>
<style scoped>

section {
    height: 40%;
    padding: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: scroll;
    border: 1px solid black;
}
.v-table{
    line-height: 1.0rem;
    padding: auto;
}

</style>