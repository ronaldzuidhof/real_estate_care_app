// imports
import moment from 'moment';
import Report from '@/models/report';

// define CLASS Inspection
export default class Inspection {
    id = null;
    city = "";
    streetName = "";
    houseNumber = null;
    inspectionDate = "";
    inspector = "";
    finished = false;
    reports = [];

    constructor(data){
        this.id = data.id
        this.city = this.stringCapital(data.city);
        this.streetName = this.stringCapital(data.streetName);
        this.houseNumber = data.houseNumber;
        this.inspectionDate = data.inspectionDate;
        this.finished = data.finished;
        this.inspector = data.inspector;
        // map over the response data Array and create Report instances
        this.reports = data.reports.map(report => new Report(report));
    }
    // function to return the id number
    getId(){
        return this.id;
    }
    // function to return the full address
    getAddress(){
        return this.streetName + " " + this.houseNumber; 
    }
    // function to return the city
    getCity(){
        return this.city;
    }
    // function to return the EPOC time
    getEpocTime(){
        return new Date(this.inspectionDate).getTime();
    }
    // function to return the date in format "Day-Month-Year"
    getDate(){
        return moment(this.inspectionDate).format('DD-MM-YYYY');
    }
    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}