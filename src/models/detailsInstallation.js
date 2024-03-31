// define CLASS DetailInstallation

//imports
import { useStringCapital } from '@/composables/GlobalFunctions'

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
        this.location = useStringCapital(data.location);
        this.typeInstallation = data.typeInstallation;
        this.notifiedErrors = data.notifiedErrors;
        this.testProdcedure = data.testProcedure;
        this.approved = data.approved;
        this.comments = data.comments
        this.pictures = data.pictures
    }
    // function to return the id number
    getId(){
        return this.id;
    }
    // function to convert the key to a description in dutch language
    convertKeyToText(key){
        switch(key){
            case ("id"):
                return(null);
            case ("location"):
                return "Locatie";
            case ("typeInstallation"):
                return "Type installatie";
            case ("notifiedErrors"):
                return "Gemelde fouten";
            case ("testProdcedure"):
                return "Test procedure";
            case ("approved"):
                return "Goedgekeurd";
            case ("comments"):
                return "Opmerkingen";
            case ("pictures"):
                return "Foto's";
            default:
                break;
        }
    }
    // function to return the options of as select input
    getOptions(key) {
        let options = {}
        switch(key) {
            case "typeInstallation":
                options = {koeling: "Koeling", verwarming: "Verwarming", luchtverversing: "Luchtverversing", elektra: "Elektra", beveiliging: "Beveiliging"}
                return options
            default:
                return null
        }
    }
    // function to return true if the input type is "radio" based on the key
    getCheckbox(key) {
        switch(key) {
            case "approved":
                return true
            default:
                return null
        }
    }
    // fuction to return a object of A tags (image links)
    getPictures(key){
        // check if key is equal to pictures
        if (key === "pictures"){
            // create empty links object
            let links = {}
            // split the picture string by comma and place in the array pictures
            let pictures = this.pictures.split(',')
            // loop trough the created pictures array
            for (const picture in pictures) {
                links[pictures[picture]] = "/images/" + pictures[picture];
            }
            // return links object
            return links
        } else {
            // return empty "null"
            return null
        }
    }
    // function to return a link to a document (pdf)
    getLink(key) {
        // check if key is equal to pictures
        if (key === "testProdcedure"){
            // return the link
            return this.testProdcedure
        } else {
            // return empty "null"
            return null
        }
    }
}