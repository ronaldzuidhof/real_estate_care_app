
// define CLASS DetailInstallation
export default class DetailInstallation {
    id = null;
    location = "";
    typeInstallation = false;
    notifiedErrors= "";
    testProdcedure = "";
    approved = false;
    comments = "";
    pictures = "";
    
    constructor(data){
        this.id = data.id
        this.location = this.stringCapital(data.location);
        this.typeInstallation = data.typeInstallation;
        this.notifiedErrors = data.notifiedErrors;
        this.testProdcedure = data.testProcedure;
        this.approved = data.approved;
        this.comments = data.comments
        this.pictures = data.pictures
    }

    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}