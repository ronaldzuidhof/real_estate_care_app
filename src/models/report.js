// imports
import DetailDamage from '@/models/detailsDamage';
import DetailMaintenance from '@/models/detailsMaintenance';
import DetailInstallation from '@/models/detailsInstallation';
import DetailModifications from '@/models/detailsModifications';

// define CLASS Report
export default class Report {
    id = null;
    nameReport = "";
    required = false;
    finished = false;
    details = [];

    constructor(data){
        this.id = data.id
        this.nameReport = this.stringCapital(data.nameReport);
        this.required = data.required;
        this.finished = data.finished;
        this.details = this.detailsModel(data)
    }

    // function to return the id number
    getId(){
        return this.id;
    }
    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
    // function to return the report name with "rapport" added to the string
    getReportName(){
        return this.nameReport + " " + "rapport";
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