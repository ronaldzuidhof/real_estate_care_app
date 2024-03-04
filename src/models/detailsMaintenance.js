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
}