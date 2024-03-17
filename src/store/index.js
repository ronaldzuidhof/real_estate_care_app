// Vuex store

// imports
import { createStore } from 'vuex'
import ReportService from '@/services/ReportService'
import Inspection from '@/models/inspection';
import {mdiBell, mdiCog, mdiPlusBoxOutline, mdiMinusBoxOutline} from '@mdi/js'

export default createStore({
    state: {
        loadingStatus : 'notLoading',
        inspections: [],
        inspectionSelected: [],
        errors: [],
        icons: [mdiBell, mdiCog, mdiPlusBoxOutline, mdiMinusBoxOutline],
    },
    mutations: {
        // mutation to set the loadingStatus in the store
        SET_LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },
        // mutation to set the inspections in the store
        SET_INSPECTIONS(state, payload){
            state.inspections = payload;
        },
        // mutation to clear the inspection in the store
        CLEAR_INSPECTIONS(state){
            state.inspections = [];
        },
        // mutation to set the selected inspection in the store
        SET_INSPECTION_SELECTED(state, payload){
            state.inspectionSelected = payload;
        },
        // mutation to clear the inspection in the store
        CLEAR_INSPECTION_SELECTED(state){
            state.inspectionSelected = [];
        },
        // mutation to set the errors in the store
        ADD_ERROR(state, payload){
            state.errors = [...state.errors, payload]
        }
    },
    actions: {
        // action to fetch the inspections with AXIOS from the 'my-json-server' API and save the result into the VUEX store
        fetchInspections(context){
            // set loading status
            context.commit('SET_LOADING_STATUS', 'loading')
            // make request to ReportService
            ReportService.getData('/inspections')
                .then(response => {
                    // reset loading status
                    context.commit('SET_LOADING_STATUS', 'notLoading')
                    // map over the response data Array and create Inspection instances
                    let result = response.data.map(inspection => new Inspection(inspection));
                    // send the inspections array to the mutation 'SET_INSPECTIONS' of the store
                    context.commit('SET_INSPECTIONS', result)
                })
                .catch(error => {
                    // reset loading status
                    context.commit('SET_LOADING_STATUS', 'notLoading')
                    // reset the inspections array of the store
                    context.commit('CLEAR_INSPECTIONS')
                    // send errors to the mutation 'ADD_ERROR' of the store
                    context.commit('ADD_ERROR', error)
                })
        },
        // action to set the 'inspectionSelected' in the store to
        fetchInspectionSelected(context, value){
            // clear the inspection selected store entry
            context.commit('CLEAR_INSPECTION_SELECTED')
            // set the inspected selected store entry
            context.commit('SET_INSPECTION_SELECTED', value)
        },
    },
    modules: {

    }
})