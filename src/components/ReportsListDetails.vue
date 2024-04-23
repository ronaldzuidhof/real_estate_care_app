<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    
    <div v-if="report.length">
        <table 
            v-for="detail in report" 
            :key="detail.id"
        >
            <tr 
                v-for="(value, key) in detail" 
                :key="key"
            >
                <div v-if="detail.convertKeyToText(key)">
                    <th>
                        <label :for="key + detail.id">{{detail.convertKeyToText(key)}}:</label>
                    </th>
                    <td>
                        <div v-if="detail.getOptions(key)">
                            <select 
                                :class="editClass"
                                :disabled="!inspectionSelectedEdit" 
                                :id="key + detail.id"
                                v-model="this.reportSelected.details[detail.id][key]" 
                            >
                                <option 
                                    v-for="(value2, key2) in detail.getOptions(key)" 
                                    :value="key2" :key="key2" 
                                    :selected="key2 === value.toString()"
                                >{{value2}}</option>
                            </select>
                        </div>
                        <div 
                            v-else-if="detail.getCheckbox(key)" 
                            class="checkbox"
                        >
                            <input 
                                :disabled="!inspectionSelectedEdit"
                                :checked="value" 
                                type="checkbox" 
                                :id="key + detail.id"
                                v-model="this.reportSelected.details[detail.id][key]"
                            >
                        </div>
                        <div 
                            v-else-if="detail.getPictures(key) !== null" 
                            class="picturesList"
                        >
                            <input
                                v-for="(value, index) in detail.pictures" 
                                :key="index" 
                                :class="editClassLink"
                                :data-id="value"
                                :readonly="!inspectionSelectedEdit" 
                                :id="key + detail.id"
                                v-model=this.reportSelected.details[detail.id][key][index]
                                v-touch:tap="openPicture"
                            >
                        </div>
                        <div 
                            v-else-if="detail.getLink(key) && !inspectionSelectedEdit"
                            class="linkList"
                        >
                            <input
                                :class="editClassLink"
                                :readonly="!inspectionSelectedEdit" 
                                :data-id="this.reportSelected.details[detail.id][key]"
                                :id="key + detail.id" 
                                v-model="this.reportSelected.details[detail.id][key]"
                                v-touch:tap="openLink"
                            >
                        </div>
                        <div v-else :class="editClass">
                            <input 
                                :disabled="!inspectionSelectedEdit" 
                                :id="key + detail.id"
                                v-model="this.reportSelected.details[detail.id][key]"
                            >
                        </div>
                    </td>
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
    name: 'ReportsListDetails',
    computed: {
        // function to return the selected report details from the store 
        report(){
            return this.$store.state.inspections.reportSelected.getReportDetails()
        },
        // function to return the selected inspection from the store
        inspectionSelectedId() {
            return this.$store.state.inspections.inspectionSelected.getId()
        },
        // function to return the inspection selected edit object from the store
        inspectionSelectedEdit(){
            return this.$store.state.inspections.inspectionSelectedEdit
        },
        // function to return the report selected object from the store
        reportSelected() {
            return this.$store.state.inspections.reportSelected
        },
        // function to return the "editClass" if inspection selection edit is active
        editClass(){
            // return editClass
            if(this.inspectionSelectedEdit){
                return "editClass"
            // return empty class
            } else {
                return ""
            }
        },
        // function to return the "editClass" if inspection selection edit is active other wise return linkClass 
        editClassLink(){
            // return editClass
            if(this.inspectionSelectedEdit){
                return "editClass"
            // return empty class
            } else {
                return "linkClass"
            }
        }
    },
    methods: {
        // function to open the selected picture in a new browser window
        openPicture(event){
            // check if inspection selected edit is not active
            if(!this.inspectionSelectedEdit){
                // load event data-id in pictureName variable
                const pictureName = event.currentTarget.getAttribute("data-id")
                // check if pictureName is not empty
                if (pictureName){
                    // Open a new browser window with the pciture
                window.open("images/inspection_" + this.inspectionSelectedId + "/" + pictureName)
                }
            }   
        },
        openLink(event){
            // load event data-id in pictureName variable
            const linkName = event.currentTarget.getAttribute("data-id")
            // check if inspection selected edit is not active
            if(!this.inspectionSelectedEdit){
                // open popup window, open file if the user accepts
                if(confirm("U gaat het bestand: " + linkName + " openen !")){
                    // Open a new browser window when clicked
                    window.open("documents/general/" + linkName)
                }  
            }       
        }
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
    padding-inline-end: .5rem;
    margin-block-end: 10px;
    padding-block-start: 7px;
    border-block-start: 1px solid black;
}

label {
    font-weight: bold;
}

.checkbox {
    padding-block-start: .3rem;
    padding-inline-start: .3rem;
}

input, select, a {
    padding-inline-start: .3rem;
    width: 100%;
}

button {
    font-size: 1rem;
    padding-inline: .5rem;
    padding-block: .2rem;
    margin-inline-end: 1rem;
    margin-block-end: 1rem;
    border:1px solid black;
    border-radius: 5px;
    background-color: var(--color-4);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
}

a {
    word-break: break-all
}

tr div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-block-end: .3rem;
} 

th {
    width: 30%;
}

td {
    padding-inline-start: .5rem;
}

td:nth-child(odd) {
    width: 45%;
}

td:nth-child(even) {
    width: 55%;
}

.checkbox input {
    height: 1rem;
    width: 1rem;
    box-shadow: none;
}

.control {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

a {
    width: 100%;
}

.picturesList {
    display: flex;
    flex-direction: column;
}

.picturesList input:focus, .linkList input:focus {
    outline: none;
}

.noData td {
    width: 100%;
    color: red;
}

.editClass {
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

.linkClass {
    text-decoration: underline;
}

.linkClass:hover {
    cursor: pointer;
}

</style>