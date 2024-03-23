// define CLASS DetailMaintenance

//imports
import { useStringCapital } from '@/composables/GlobalFunctions'

export default class DetailMaintenance {
    id = null;
    location = "";
    typeMaintenance = "";
    immediateAction = false;
    costIndication = "";
    pictures = "";
    
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
    // function to convert the key to a description in dutch language
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
}