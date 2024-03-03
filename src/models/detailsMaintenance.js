
// define CLASS DetailMaintenance
export default class DetailMaintenance {
    id = null;
    location = "";
    typeMaintenance = "";
    immediateAction = false;
    costIndication = "";
    pictures = "";
    
    constructor(data){
        this.id = data.id
        this.location = this.stringCapital(data.location);
        this.typeMaintenance = data.typeMaintenance;
        this.immediateAction = data.immediateAction;
        this.costIndication = data.costIndication;
        this.pictures = data.pictures
    }

    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}