// Vuex store module - Inspections

// imports
import ReportService from '@/services/ReportService'
import Inspection from '@/models/inspection';
import {mdiBell, mdiCog, mdiCalendar, mdiCheckCircle, mdiApps, mdiChevronDown,  mdiChevronUp, mdiPencilOutline, mdiContentSaveOutline  } from '@mdi/js'

export default ({
    namespaced: true,
    state: {
        loadingStatus : 'notLoading',
        inspections: null,
        inspectionSelected: null,
        inspectionSelectedEdit: false,
        reportSelected: null,
        reportSelectedEdit: false,
        errors: [],
        icons: [mdiBell, mdiCog, mdiCalendar, mdiCheckCircle, mdiApps, mdiChevronDown, mdiChevronUp, mdiPencilOutline, mdiContentSaveOutline  ]
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
            state.inspections = null;
        },
        // mutation to set the selected inspection in the store
        SET_INSPECTION_SELECTED(state, payload){
            state.inspectionSelected = payload;
        },
        // mutation to clear the inspection in the store
        CLEAR_INSPECTION_SELECTED(state){
            state.inspectionSelected = null;
        },
        // mutation to set the selected inspection in the store
        SET_REPORT_SELECTED(state, payload){
            state.reportSelected = payload;
        },
        // mutation to clear the inspection in the store
        CLEAR_REPORT_SELECTED(state){
            state.reportSelected = null;
        },
        // mutation to set the report selected edit in the store
        SET_REPORT_SELECTED_EDIT(state){
            state.reportSelectedEdit = true;
        },
        // mutation to clear the report selected edit in the store
        CLEAR_REPORT_SELECTED_EDIT(state){
            state.reportSelectedEdit = false;
        },
         // mutation to set the selected inspection in the store
         SET_INSPECTION_SELECTED_EDIT(state){
            state.inspectionSelectedEdit = true;
        },
        // mutation to clear the inspection in the store
        CLEAR_INSPECTION_SELECTED_EDIT(state){
            state.inspectionSelectedEdit = false;
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
                    // sort inspections based on the getEpocTime() function from the inspection class
                    result.sort(function(a, b){
                        // compare both EPOC times and sort accordingly
                        return b.getEpocTime() - a.getEpocTime();
                    })
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
        // action to set the 'inspectionSelected' in the store
        fetchInspectionSelected(context, value){
            // clear the inspection selected store entry
            context.commit('CLEAR_INSPECTION_SELECTED')
            // set the inspected selected store entry
            context.commit('SET_INSPECTION_SELECTED', value)
        },
        // action to set the 'reportSelected' in the store
        fetchReportSelected(context, value){
            // clear the report selected store entry
            context.commit('CLEAR_REPORT_SELECTED')
            // set the report selected store entry
            context.commit('SET_REPORT_SELECTED', value)
        },
        // action to set the 'reportSelectedEdit' in the store
        setReportSelectedEdit(context){
            // set the report selected edit entry to true
            context.commit('SET_REPORT_SELECTED_EDIT')
        },
        // action to clear the reportSelectedEdit in the store
        clearReportSelectedEdit(context){
            context.commit('CLEAR_REPORT_SELECTED_EDIT')
        },
        // action to set the 'inspectionSelectedEdit' in the store
        setInspectionSelectedEdit(context){
            // set the report selected edit entry to true
            context.commit('SET_INSPECTION_SELECTED_EDIT')
        },
        // action to clear the inspectionSelectedEdit in the store
        clearInspectionSelectedEdit(context){
            context.commit('CLEAR_INSPECTION_SELECTED_EDIT')
        },
        // action to clear the inspection selected store entry
        clearInspectionSelected(context){
            context.commit('CLEAR_INSPECTION_SELECTED')
        },
        // action to clear the inspection selected store entry
        clearReportSelected(context){
            context.commit('CLEAR_REPORT_SELECTED')
        },
    },
    modules: {

    }
})