<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <h1>Inspectie rapporten:</h1>
        <header>
            <ul>
                <li>Datum</li>
                <li>Stad</li>
                <li>Adres</li>
            </ul>
        </header>
        <article>
            <ul v-for="inspection in inspections" :key="inspection.id">
                <li :data-id="inspection.id" v-touch:tap="touchHandler">
                        <svg-icon type="mdi" :path="path[1]" :data-id="inspection.id" class="icon" v-if="indexSelected === inspection.id"></svg-icon>
                        <svg-icon type="mdi" :path="path[0]" :data-id="inspection.id" class="icon" v-else></svg-icon>
                        {{this.dateConversion(inspection.inspectionDate, 'DD-MM-YYYY')}}
                </li>
                <li>{{this.stringCapital(inspection.city)}}</li>
                <li>{{this.stringCapital(inspection.streetName) + " " +inspection.houseNumber}}</li>
                <ul v-if="indexSelected === inspection.id">
                    <li v-for="report in inspection.reports" :key="report.id">
                        {{report.nameReport}} rapport
                    </li>
                </ul>
            </ul>
        </article>

    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import inspections from '@/assets/reports.json';
import EventService from '@/services/EventService'
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
            inspections: this.sortJson(inspections),
            indexSelected: null,
            test_inspections: null,
        }
    }, 
    methods: {
        // function to convert date ISO format to defined date format
        dateConversion(dateIsoFormat, format){
            return moment(dateIsoFormat).format(format);
        },
        // function to convert a string. All letters to lowerCase, First letter to upperCase
        stringCapital(string){
            return string[0].toUpperCase() + string.slice(1).toLowerCase();
        },
        // function to show/hide ul with inspection reports
        touchHandler(event){
            // Hide ul insepction reports (set indexSelected to null)
            if (Number(event.target.getAttribute("data-id")) === this.indexSelected){
                this.indexSelected = null;
            // Show ul insepction reports (set indexSelected to received event number)
            } else if (event.target.getAttribute("data-id") !== null) {
                this.indexSelected = Number(event.target.getAttribute("data-id"));
            }
        },
        // function to sort JSON file based on inspectionDate entry
        sortJson(json){
            json.sort(function(a, b , typeSort= "asc"){
                // convert strings to date object and get the time since Epoch in mS
                const date1 = new Date(a.inspectionDate).getTime();
                const date2 = new Date(b.inspectionDate).getTime();
                // compare both dates and sort according supplied property
                if (typeSort === "desc"){
                    return date1 - date2;
                } else {
                    return date2 - date1; 
                }
            })
            // return the sorted JSON object (Javascript)
            return json;
        }
    }, 
    created(){
        EventService.getPage()
            .then(response => {
                this.test_inspections = response.data;
                console.log(this.test_inspections);
            }).catch(error => {
                console.log(error);
        })
  }
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

header, article {
    width: 100%;
    border: 1px solid var(--color-1);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

header{
    font-size: 1.2rem;
    font-weight: bold;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
    border-block-end: 0;
    border-radius: 10px 10px 0px 0px
}

article {
    font-size: .8rem;
    border-radius: 0px 0px 10px 10px
}

ul {
    display: grid;
    grid-template-columns: 1.8fr 1.4fr 2fr;
    grid-template-rows: auto;
    justify-content: space-between;
    align-items: center;
    padding-block: 0.25rem;
}

ul ul {
    width: 100%;
    grid-column-start: 1;
    grid-column-end: 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-inline-start: 1.3rem;
}

li {
    display: flex;
    align-items: center;
    text-wrap: nowrap;
}

li:first-child {
    padding-inline-start: 1rem;
}

ul ul li {
    padding-inline-start: 1rem;
}

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

.icon {
    padding-inline-end: 0.5rem
}

</style>