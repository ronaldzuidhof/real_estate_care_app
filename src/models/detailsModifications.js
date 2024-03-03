
// define CLASS DetailModifications
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
        this.location = this.stringCapital(data.location);
        this.executedBy = data.executedBy;
        this.description = data.description;
        this.action = data.action;
        this.comments = data.comments;
        this.pictures = data.pictures;
    }

    // function to convert a string. All letters to lowerCase, First letter to upperCase
    stringCapital(string){
        return string[0].toUpperCase() + string.slice(1).toLowerCase();
    }
}