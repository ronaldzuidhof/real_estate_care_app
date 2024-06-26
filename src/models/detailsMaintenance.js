// define CLASS DetailMaintenance

//imports
import { useStringCapital } from '@/composables/GlobalFunctions'

export default class DetailMaintenance {
    id = null;
    location = "";
    typeMaintenance = "";
    immediateAction = false;
    costIndication = "";
    pictures = [];
    
    constructor(data){
        this.id = data.id
        this.location = useStringCapital(data.location);
        this.typeMaintenance = data.typeMaintenance;
        this.immediateAction = data.immediateAction;
        this.costIndication = data.costIndication;
        this.pictures = data.pictures
    }
    // function to return the id number
    getId(){
        return this.id;
    }
    // function to convert the key to a description in the dutch language
    convertKeyToText(key){
        switch(key){
            case ("id"):
                return(null);
            case ("location"):
                return "Locatie";
            case ("typeMaintenance"):
                return "Type onderhoud";
            case ("immediateAction"):
                return "Onmiddelijke actie";
            case ("costIndication"):
                return "Kosten indicatie";
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
            case "typeMaintenance":
                options = {schilderwerk: "Schilderwerk", houtrot: "Houtrot", elektra: "Elektra", leidingwerk: "Leidingwerk", beglazing: "Beglazing"}
                return options
            case "costIndication":
                options = {"0-500": "0-500", "500-1500": "500-1500", "1500+": "1500+"}
                return options
            default:
                return null
        }
    }
    // function to return true if the input type is "checkbox" based on the key
    getCheckbox(key) {
        switch(key) {
            case "immediateAction":
                return true
            default:
                return null
        }
    }
    // fuction to return the pictures array
    getPictures(key){
        // check if key is equal to pictures
        if (key === "pictures"){
            return this.pictures
        } else {
            return null
        }
    }
    // function to return a link to a document (pdf) (not in use)
    getLink() {
        // return empty "null"
        return null
    }
}