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
}