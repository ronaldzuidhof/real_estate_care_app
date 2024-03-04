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
}