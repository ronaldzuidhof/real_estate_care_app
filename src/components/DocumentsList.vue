<!--HTML----------------------------------------------------------------------------------------------->

<template lang="">
    <section>
        <h1>Knowledge base:</h1>
        <table>
            <tr>
                <th>Bechrijving</th>
                <th>Bestand naam</th>
            </tr>
            <tr v-for="document in documents" :key="document.getId()" v-touch:tap="SelectDocument" :data-id="document.getId()">
                <td>{{document.getDescription()}}</td>
                <td>{{document.getName()}}</td>
            </tr>
        </table>
        
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
export default {
    name: "DocumentsList",
    components: {},
    methods: {
        SelectDocument(event) {
            // set the selected document to the store
            this.$store.dispatch('documents/fetchDocumentSelected', this.filterDocument(event.currentTarget.getAttribute("data-id")))
            // get the document selected from the store
            let documentSelected = this.$store.state.documents.documentSelected
            // open selected document in new browser window
            window.open(documentSelected.getLink(), '_blank')
        },
        // function to filter document from documents array (store)
        filterDocument(id) {
            // filter all documents and select where document.id is equal to 'id'
            let document = this.documents.filter(document => document.id === Number(id))
            // return document object
            return document[0];
        },
    },
    computed: {
        // function to get the documents from the store
        documents() {
            return this.$store.state.documents.documents
        }
    },
    created() {
        // get all documents to the store with action 'fetchDocuments'
        this.$store.dispatch('documents/fetchDocuments')
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>
   
h1 {
    width: 100%;
    text-align: left;
    padding-block: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
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

table {
    width: 100%;
    border: 1px solid var(--color-1);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
    border-collapse: collapse;
    text-align: left;
}

tr {
    font-size: .9rem;
    border-collapse: collapse;
}

td:first-child, th:first-child {
    padding-inline-start: .5rem;
    padding-block: .5rem
}

tr:nth-child(odd){
    background-color: var(--color-4);
}

tr:first-child {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: var(--color-2);
}

tr:hover {
    background-color: var(--color-5);
}

tr:first-child {
    pointer-events: none;
}


</style>