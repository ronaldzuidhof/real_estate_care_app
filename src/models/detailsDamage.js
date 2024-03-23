// define CLASS DetailsDamage

//imports
import { useStringCapital } from '@/composables/GlobalFunctions'

export default class DetailDamage {
    id = null;
    location = "";
    newDamage = false;
    immediateAction = false;
    description = "";
    pictures = "";
    
    constructor(data){
        this.id = data.id
        this.location = useStringCapital(data.location);
        this.newDamage = data.newDamage;
        this.immediateAction = data.immediateAction;
        this.description = data.description;
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
            case ("newDamage"):
                return "Nieuwe schade";
            case ("immediateAction"):
                return "Onmiddelijke actie";
            case ("description"):
                return "Beschrijving";
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
            case "newDamage":
                options = {true: "Ja", false: "Nee", null: ""}
                return options
            case "immediateAction":
                options = {true: "Ja", false: "Nee", null: ""}
                return options
            default:
                return null
        }
    }
}