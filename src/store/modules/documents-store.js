// Vuex store module - Knowledge base doucments

// imports
import documentsJson from '@/assets/json/documents.json'
import Document from '@/models/document'

export default ({
    namespaced: true,
    state: {
        documents: null,
    },
    mutations: {
        SET_DOCUMENTS(state, payload){
            // debug
            console.log('test2')
            // 
            state.documents = payload;
        }
    },
    actions: {
         // action to fetch the documents from the JSON file (local) and save the result into the VUEX store
         fetchDocuments(context){
            // debug
            console.log(documentsJson)
            // debug
            documentsJson.map(document => console.log(document));
            // map over the documents Array and create Document instances
            let result = documentsJson.map(document => new Document(document)); 
            
            // send the documents array to the mutation 'SET_DOCUMENTS' of the store
            context.commit('SET_DOCUMENTS', result) 
         }
    },
    modules: {
        // modules
    }
})