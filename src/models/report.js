// define CLASS Report

// imports
import DetailDamage from '@/models/detailsDamage';
import DetailMaintenance from '@/models/detailsMaintenance';
import DetailInstallation from '@/models/detailsInstallation';
import DetailModifications from '@/models/detailsModifications';
import { useStringCapital } from '@/composables/GlobalFunctions'

// define CLASS Report
export default class Report {
    id = null;
    nameReport = "";
    required = false;
    finished = false;
    details = [];

    constructor(data){
        this.id = data.id
        this.nameReport = useStringCapital(data.nameReport);
        this.required = data.required;
        this.finished = data.finished;
        this.details = this.detailsModel(data)
    }
    // function to return the id number
    getId(){
        return this.id;
    }
    // function to return the report name with "rapport" added to the string
    getReportName(){
        return this.nameReport + " " + "rapport";
    }
    // function to return the report required value
    getReportRequired(){
        return this.required;
    }
    // function to return the report details object (consiting off instances of the appropriate model)
    getReportDetails(){
        return this.details;
    }
    // function to return the report status
    getReportStatus(){
        return this.finished;
    }
    // function to determine details class
    detailsModel(data){
        switch(data.id){
            case 0:
                return data.details.map(detail => new DetailDamage(detail));
            case 1:
                return data.details.map(detail => new DetailMaintenance(detail));
            case 2:
                return data.details.map(detail => new DetailInstallation(detail));
            case 3:
                return data.details.map(detail => new DetailModifications(detail));
            default:
                return data.details;
        }
    }
}