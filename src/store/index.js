//imports
import { createStore } from 'vuex'
import inspections from './modules/inspection-store';
import knowledgeBase from './modules/knowledgeBase-store';

export default createStore({
  modules: {
    inspections,
    knowledgeBase
  }
})