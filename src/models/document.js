// define CLASS Document

// imports

// define CLASS Inspection
export default class Document {
    id = null;
    name = "";
    description = "";

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.category = data.category
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
    // function to return the category
    getCategory() {
        return this.category;
    }
    // function to return the link to the document
    getLink() {
        return "/documents/" + this.category + "/" + this.name;
    }
}
