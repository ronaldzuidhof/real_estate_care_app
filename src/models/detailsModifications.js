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
}