<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    
    <div v-if="report.length">
        <table v-for="detail in report" :key="detail.id">
            <tr v-for="(value, key) in detail" :key="key">
                <div v-if="detail.convertKeyToText(key)">
                    <td>
                        <label :for="detail.key">{{detail.convertKeyToText(key)}}:</label>
                    </td>
                    <td>
                        <div v-if="detail.getOptions(key)">
                            <select :disabled="!reportSelectedEdit">
                                <option v-for="(value2, key2) in detail.getOptions(key)" :value="key2" :key="key2" :selected="key2 === value.toString()">{{value2}}</option>
                            </select>
                        </div>
                        <div v-else-if="value">
                            <input :value="value" :disabled="!reportSelectedEdit">
                        </div>
                        <div v-else>
                            <input :id="detail.key" value="n.v.t" :disabled="!reportSelectedEdit">
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
    name: 'reportDetails',
    computed: {
        // function to get the selected report details from the store 
        report(){
            return this.$store.state.reportSelected.getReportDetails()
        },
        reportSelectedEdit(){
            return this.$store.state.reportSelectedEdit
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
    margin-block-end: 10px;
    padding-block-start: 7px;
    border-block-start: 1px solid black;
}

label {
    font-weight: bold;
}

input, select {
    width: 100%;
    padding-inline-start: .3rem;
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
}

button {
    padding-inline: .5rem;
    padding-block: .2rem;
    border:1px solid black;
    border-radius: 5px;
    background-color: var(--color-4);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
}

tr div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-block-end: .3rem;
    padding-inline-end: .5rem;
}

td:nth-child(odd) {
    width: 45%;
}

td:nth-child(even) {
    width: 55%;
}

.noData td {
    width: 100%;
    color: red;
}

</style>