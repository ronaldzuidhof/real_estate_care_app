// Vuex store module - Knowledge base doucments

// imports
import documentsJson from '@/assets/json/documents.json'
import Document from '@/models/document'

export default ({
    namespaced: true,
    state: {
        documents: null,
        documentSelected: null,
    },
    mutations: {
        SET_DOCUMENTS(state, payload){
            state.documents = payload;
        },
        CLEAR_DOCUMENT_SELECTED(state){
            state.documentSelected = null;
        },
        SET_DOCUMENT_SELECTED(state, payload){
            state.documentSelected = payload;
        }
    },
    actions: {
         // action to fetch the documents from the JSON file (local) and save the result into the VUEX store
         fetchDocuments(context){
            // map over the documents Array and create Document instances
            let result = documentsJson.documents.map(document => new Document(document)); 
            // send the documents array to the mutation 'SET_DOCUMENTS' of the store
            context.commit('SET_DOCUMENTS', result) 
         },
         // action to set the 'inspectionSelected' in the store
        fetchDocumentSelected(context, value){
            // clear the inspection selected store entry
            context.commit('CLEAR_DOCUMENT_SELECTED')
            // set the inspected selected store entry
            context.commit('SET_DOCUMENT_SELECTED', value)
        },
        // action to clear the reportSelectedEdit in the store
        clearDocumentSelected(context){
            context.commit('CLEAR_DOCUMENT_SELECTED')
        },
    },
    modules: {
        // modules
    }
})