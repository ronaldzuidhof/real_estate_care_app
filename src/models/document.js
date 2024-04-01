// define CLASS Document

// imports
//import moment from 'moment';
//import { useStringCapital } from '@/composables/GlobalFunctions'

// define CLASS Inspection
export default class Inspection {
    id = null;
    name = "";
    description = "";

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
    }
    // function to return the id number
    getId(){
        return this.id;
    }
    // function to return the name
    getName(){
        return this.name;
    }
    // function to return the description
    getDescription(){
        return this.description;
    }
}
