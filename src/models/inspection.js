export default class Inspection {
    id = 0;
    city = "";
    streetName = "";
    houseNumber = 0;
    inspectionDate = "";
    inspector = "";
    finished = false;
    reports = [];

    constructor(city, streetName, houseNumber, inspectionDate, inspector){
        this.city = city;
        this.streetName = streetName;
        this.houseNumber = houseNumber;
        this.inspectionDate = inspectionDate;
        this.inspector = inspector
    }

    // function to get the full address
    getAddress(){
        return this.stringCapital(this.streetName) + " " + this.houseNumber; 
    }
    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}