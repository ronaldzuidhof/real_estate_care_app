<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <h1>Inspectie rapporten:</h1>
        <div class="header">
            <div class="headerText">Datum</div>
            <div class="headerText">Stad</div>
            <div class="headerText">Adres</div>
        </div>
        <div class="content" v-for="inspection in inspections" :key="inspection.id">
            <div class="rowInspection">
                <div class="rowItemInspection" :data-id="inspection.id" v-touch:tap="touchHandler">
                    <svg-icon type="mdi" :path="path[1]" class="icon" :data-id="inspection.id" v-if="indexSelected === inspection.id"></svg-icon>
                    <svg-icon type="mdi" :path="path[0]" class="icon" :data-id="inspection.id" v-else></svg-icon>
                    <p :data-id="inspection.id">{{this.dateConversion(inspection.inspectionDate)}}</p>
                </div>
                <p class="rowItem">{{this.stringCapital(inspection.city)}}</p>
                <p class="rowItem">{{this.stringCapital(inspection.streetName) + " " +inspection.houseNumber}}</p>
            </div>
            
            <div v-if="indexSelected === inspection.id">
                <div v-for="report in inspection.reports" :key="report.id" class="rowReport">
                    <p class="rowItemReport">Rapport -</p>
                    <p class="rowItemReport">{{report.nameReport}}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import inspections from '@/assets/reports.json';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlusBoxOutline, mdiMinusBoxOutline } from '@mdi/js'
import moment from 'moment';

export default {
    name: "InspectionList",
    components: {
        SvgIcon
    },
    data() {
        return{
            path: [mdiPlusBoxOutline, mdiMinusBoxOutline],
            inspections: inspections,
            indexSelected: null,
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
        },
        // print event object to the console that called the method
        touchHandler(event){
            if (Number(event.target.getAttribute("data-id")) === this.indexSelected){
                this.indexSelected = null
            } else {
                this.indexSelected = Number(event.target.getAttribute("data-id"));
            }
            // Debugging
            // console.log((event.target.getAttribute("data-id")))
        }
    }
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

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
    padding: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

.header {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 2fr;
    width: 100%;
    border-inline: 1px solid black;
    border-block-start: 1px solid black;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}
.headerText {
    font-size: 1.2rem;
    font-weight: bold;
    padding-block: .4rem;
    padding-inline-start: 0.5rem;
}
.headerText:first-child {
    font-size: 1.1rem;
    padding-inline-start: 2rem;
}
.content {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.rowInspection {
    display: grid;
    grid-template-columns: 1.7fr 1.5fr 2fr;
    width: 100%;
    padding-block: .4rem;
    border-inline: 1px solid black;
    border-block-start: 1px solid black;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}
.rowReport {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-inline-start: 2.5rem;
    border-inline: 1px solid black;
}
.rowItemInspection {
    display: flex;
    align-items: center;
    justify-content: cent;
    padding-inline-start: 0.5rem;
    font-size: 0.9rem;
}
.rowItemReport {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline-start: 0.5rem;
    font-size: 0.9rem;
}
.icon {
    padding-inline-end: 0.5rem
}

</style>