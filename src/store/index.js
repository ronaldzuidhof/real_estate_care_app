//imports
import { createStore } from 'vuex'
import inspections from './modules/inspection-store';
import documents from './modules/documents-store';

export default createStore({
  modules: {
    inspections,
    documents
  }
})