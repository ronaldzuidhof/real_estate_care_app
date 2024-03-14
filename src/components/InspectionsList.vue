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
                <li :data-id="inspection.getId()" v-touch:tap="SelectInspection">
                        <svg-icon type="mdi" :path="icons[1]" class="icon" v-if="inspectionSelected === inspection.id" ></svg-icon>
                        <svg-icon type="mdi" :path="icons[0]" class="icon" v-else></svg-icon>
                        {{inspection.getDate()}}
                </li>
                <li>{{inspection.getCity()}}</li>
                <li>{{inspection.getAddress()}}</li>
                <ul v-if="inspectionSelected === inspection.getId()">
                    <li v-for="report in inspection.reports" :key="report.getId()">{{report.getReportName()}}</li>
                </ul>
            </ul>
        </article>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'

export default {
    name: "InspectionList",
    components: {
        SvgIcon
    },
    methods: {
        // function to show/hide ul with inspection reports
        SelectInspection(event){
            // save data-id to variable
            const id = event.currentTarget.getAttribute("data-id")
            // compare if 'id' is already selected or not
            if (this.$store.state.inspectionSelected === +id){
                this.$store.dispatch('inspectionSelected', -1)
            } else {
                this.$store.dispatch('inspectionSelected', +id)
            }
        },
    }, 
    computed: {
        inspections() {
            return this.$store.state.inspections
        },
        icons() {
            return this.$store.state.icons
        },
        inspectionSelected() {
            return this.$store.state.inspectionSelected
        }
    },
    created(){
        // get all inspections to the store with action 'fetchInspections'
        this.$store.dispatch('fetchInspections')
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