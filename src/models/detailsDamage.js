// define CLASS DetailsDamage

//imports
import { useStringCapital } from '@/composables/GlobalFunctions'

export default class DetailDamage {
    id = null;
    location = "";
    newDamage = false;
    typeDamage = "";
    immediateAction = false;
    description = "";
    pictures = "";
    
    constructor(data){
        this.id = data.id
        this.location = useStringCapital(data.location);
        this.newDamage = data.newDamage;
        this.typeDamage = data.typeDamage;
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
            case ("typeDamage"):
                return "Type schade";
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
            case "typeDamage":
                options = {"moedwillig": "Moedwillig", "slijtage": "Slijtage", "geweld": "Geweld", "normaal gebruik": "Normaal gebruik", "calamiteit": "Calamiteit", "anders": "Anders"}
                return options
            default:
                return null
        }
    }
    // function to return true if the input type is "checkbox" based on the key
    getCheckbox(key) {
        switch(key) {
            case "newDamage":
                return true
            case "immediateAction":
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
                links[pictures[picture]] = "/images/inspection_" + 0 + "/" + pictures[picture];
            }
            // return links object
            return links
        } 
    }
    // function to return a link to a document (pdf) (not in use)
    getLink() {
        // return empty "null"
        return null
    }
}