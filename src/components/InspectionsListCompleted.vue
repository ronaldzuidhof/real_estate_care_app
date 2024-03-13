<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <h1>Inspectie rapporten: "Completed"</h1>
        <header>
            <ul>
                <li>Datum</li>
                <li>Stad</li>
                <li>Adres</li>
            </ul>
        </header>
        <article>
            <ul v-for="inspection in inspections" :key="inspection.getId()">
                <li :data-id="inspection.getId()" v-touch:tap="touchHandler">
                        <svg-icon type="mdi" :path="path[1]" class="icon" v-if="indexSelected === inspection.id" ></svg-icon>
                        <svg-icon type="mdi" :path="path[0]" class="icon" v-else></svg-icon>
                        {{inspection.getDate()}}
                </li>
                <li>{{inspection.getCity()}}</li>
                <li>{{inspection.getAddress()}}</li>
                <ul v-if="indexSelected === inspection.getId()">
                    <li v-for="report in inspection.reports" :key="report.getId()">{{report.getReportName()}}</li>
                </ul>
            </ul>
        </article>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import ReportService from '@/services/ReportService'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiPlusBoxOutline, mdiMinusBoxOutline } from '@mdi/js'
import Inspection from '@/models/inspection';

export default {
    name: "InspectionList",
    components: {
        SvgIcon
    },
    data() {
        return{
            // put icon objects in path array of object data
            path: [mdiPlusBoxOutline, mdiMinusBoxOutline],
            indexSelected: null,
            inspections: null,
        }
    }, 
    methods: {
        // function to show/hide ul with inspection reports
        touchHandler(event){
            // Hide ul insepction reports (set indexSelected to null)
            if (Number(event.currentTarget.getAttribute("data-id")) === this.indexSelected){
                this.indexSelected = null;
            // Show ul inspection reports (set indexSelected to received event number)
            } else {
                this.indexSelected = Number(event.currentTarget.getAttribute("data-id"));
            }
        },
        // function to sort an object based on getEpocTime()
        sort(object){
            object.sort(function(a, b){
                // compare both EPOC times and sort accordingly
                return b.getEpocTime() - a.getEpocTime();
            })
            // return the sorted object
            return object;
        },
        // function to filter inspections by state "finished"
        filterFinished(object, state){
            return object.filter(inspection => inspection.finished === state)
        }
    }, 
    created(){
        // Function to get the data with the event service (getData)
        ReportService.getData('/inspections')
            .then(response => {
                // map over the response data Array and create Inspection instances
                let result = response.data.map(inspection => new Inspection(inspection));
                // Filter the inspection with function filterFinished()
                result = this.filterFinished(result, true)
                // sort the Inspection instances inside the inspections object with method "sortJson()"
                result = this.sort(result);
                // return the inspections object
                this.inspections = result;
                // debugging to see the data object with its classes (reports, inspections and details)
                // console.log(this.inspections)
            }).catch(error => {
                // error to console
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
    height: 80%;
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