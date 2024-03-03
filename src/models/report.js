// imports
import DetailsDamage from '@/models/details';

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
        this.details = data.details.map(detail => new DetailsDamage(detail));
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
}