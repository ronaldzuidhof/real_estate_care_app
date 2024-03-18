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
}