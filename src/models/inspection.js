// define CLASS Inspection

// imports
import moment from 'moment';
import Report from '@/models/report';
import { useStringCapital } from '@/composables/GlobalFunctions'

// define CLASS Inspection
export default class Inspection {
    id = null;
    city = "";
    address = "";
    inspectionDate = "";
    inspector = "";
    finished = "unfinished";
    reports = [];

    constructor(data){
        this.id = data.id
        this.city = useStringCapital(data.city);
        this.address = useStringCapital(data.address);
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
        return this.address;
    }
    // function to return the city
    getCity(){
        return this.city;
    }
    // function to return the inspector
    getInspector(){
        return this.inspector;
    }
    // function to return the EPOC time
    getEpocTime(){
        return new Date(this.inspectionDate).getTime();
    }
    // function to return the date in format "Year-Month-Day"
    getDateInput(){
        return moment(this.inspectionDate).format('YYYY-MM-DD');
    }
    // function to return the date in format "Day-Month-Year"
    getDate(){
        return moment(this.inspectionDate).format('DD-MM-YYYY');
    }
    // function to return the time in format "Hours:Minutes"
    getTime(){
        return moment(this.inspectionDate).format('hh:mm');
    }
    // function to return the status finished
    getStatus(){
        return this.finished;
    }
    // function to return the report status finished
    getReportStatus(id){
        return this.reports[id].finished;
    }
    // function to return the reports (instances)
    getReports(){
        return this.reports;
    }
}
