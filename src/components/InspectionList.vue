<template lang="">
    <section>
        <h1>Inspectie rapporten:</h1>
       <table>
            <tr>
                <th>Datum</th>
                <th>Tijd</th>
                <th>Stad</th>
                <th>Adres</th>
            </tr>
            <tr v-for="inspection in inspections" :key="inspection.id">
                <td>
                    <svg-icon type="mdi" :path="path" class="icon"></svg-icon>
                    {{this.dateConversion(inspection.inspectionDate)}}
                </td>
                <td>{{this.timeConversion(inspection.inspectionDate)}}</td>
                <td>{{this.stringCapital(inspection.city)}}</td>
                <td>{{this.stringCapital(inspection.streetName) + " " +inspection.houseNumber}}</td>


            </tr> 
        </table>
    </section>
</template>
<script>
// imports
import inspections from '@/assets/reports.json';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlusBoxOutline } from '@mdi/js'
import moment from 'moment';

export default {
    name: "InspectionList",
    components: {
        SvgIcon
    },
    data() {
        return{
            path: mdiPlusBoxOutline,
            inspections: inspections,
            indexSelected: null,
            // Add function v-if indexSelected has a value show repports in the table under the selected (+) table row
            //
            //
            //
            
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
        // function to convert a string. All letters to lowerCase, First letter to upperCase
        stringCapital(string){
            return string[0].toUpperCase() + string.slice(1).toLowerCase();
        }
    },
    created(){
        // placeholder
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
    overflow: auto;
    border: 1px solid black;
}

h1 {
    width: 100%;
    text-align: left;
    padding: 7px
}

table {
    padding: 7px;
    width: 100%;
    box-shadow: 2px 2px 3px var(--color-1-shadow);
}

table, tr {
    border: 1px solid var(--color-1);
    border-collapse: collapse;
    border-radius: 12px;
    text-align: left;
}

th {
    padding: 5px;
}

th:first-child {
    padding-inline-start: 9%;
}

td {
    padding: 5px;
    font-size: 0.85rem; 
    white-space: nowrap
}

td:first-child {
    display: flex;
    align-items: center;
}

.icon {
    height: 60%;
    width: auto;
    padding-inline-end: 8px;
    filter: drop-shadow(2px 2px 1px rgb(0 0 0 / 0.2));
}


</style>