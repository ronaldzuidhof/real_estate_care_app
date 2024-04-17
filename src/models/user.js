// define CLASS Document

// imports

// define CLASS Inspection
export default class User {
    id = null;
    username = "";
    firstName = "";
    group = "";
    lastname = "";
    mail = "";

    constructor(data){
        this.id = data.id
        this.username = data.username
        this.firstName = data.firstName
        this.group = data.group
        this.lastname = data.lastname
        this.mail = data.mail
    }
    // function to return the id number
    getId(){
        return this.id;
    }
    // function to return the name
    getUsername(){
        return this.username;
    }
    // function to return the user group
    getGroup(){
        return this.group;
    }
}
