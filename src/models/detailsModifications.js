// define CLASS DetailModifications

//imports
import { useStringCapital } from '@/composables/GlobalFunctions'

export default class DetailModifications {
    id = null;
    location = "";
    executedBy = "";
    description = "";
    action = "";
    comments = "";
    pictures = "";
    
    constructor(data){
        this.id = data.id;
        this.location = useStringCapital(data.location);
        this.executedBy = data.executedBy;
        this.description = data.description;
        this.action = data.action;
        this.comments = data.comments;
        this.pictures = data.pictures;
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
            case ("executedBy"):
                return "Uitgevoerd door";
            case ("description"):
                return "Beschrijving";
            case ("action"):
                return "Aktie";
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
            case "executedBy":
                options = {"huurder": "Huurder", "aannemer": "Aannemer", "onbekend": "Onbekend"}
                return options
            case "action":
                options = {"accepteren": "Accepteren", "laten keuren": "Laten keuren", "laten verwijderen": "Laten verwijderen", "laten aanpassen en keuren": "Laten aanpassen en keuren"}
                return options
            default:
                return null
        }
    }
    // function to return true if the input type is "radio" based on the key
    getCheckbox(key) {
        switch(key) {
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