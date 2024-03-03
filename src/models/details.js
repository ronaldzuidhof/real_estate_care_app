
// define CLASS DetailsDamage
export default class DetailsDamage {
    id = null;
    location = "";
    newDamage = false;
    immediateAction = false;
    description = "";
    pictures = "";
    
    constructor(data){
        this.id = data.id
        this.location = this.stringCapital(data.location);
        this.newDamage = data.newDamage;
        this.immediateAction = data.immediateAction;
        this.description = data.description;
        this.pictures = data.pictures
    }

    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}

