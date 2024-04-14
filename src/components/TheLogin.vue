<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <h1>Login</h1>
        <table>
            <tr v-if="!twoWayStatus">
                <th><label for="username">Gebruikersnaam:</label></th>
                <td><input 
                    id="username"
                    type="text" 
                    v-model="this.$store.state.user.username" 
                ></td>
            </tr>
            <tr v-if="!twoWayStatus">
                <th><label for="password">Wachtwoord:</label></th>
                <td><input 
                    id="password"
                    type="password" 
                    v-model="this.$store.state.user.password" 
                ></td>
            </tr>
            <tr v-if="twoWayStatus">
                <th><label for="smsCode">SMS code:</label></th>
                <td><input 
                    id="smsCode"
                    type="text" 
                    v-model="this.$store.state.user.smsCode" 
                ></td>
            </tr>
            <tr>
                <button
                    type="button"
                    v-touch:tap="touchHandler" 
                >
                {{buttonText}}</button>
            </tr>
        </table>
        <p v-if="message" class="message">{{message}}</p>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports


// export component
export default {
    name: "TheLogin",
    components: {
        // load used components
    },
    computed: {
        // function to return the status of the 2 way authentication
        twoWayStatus(){
            return this.$store.state.user.twoWayAuthentication
        },
        // function to return the content of user message
        message(){
            return this.$store.state.user.message
        },
        // function to change the text of the button based on the login state
        buttonText(){
            if (this.twoWayStatus){
                return 'controleer'
            } else {
                return 'Inloggen'
            }
        },
    },
    methods: {
        // push currenTarget id (name) of event to router (load view)
        touchHandler(event){
            // load preventDefault to stop propagnation on the loaded route
            event.preventDefault();
            // set the user credentials into variables
            const username = this.$store.state.user.username
            const password = this.$store.state.user.password
            const smsCode = this.$store.state.user.smsCode
            // // check user credentials / sms code
            this.$store.dispatch('user/checkCredentials', {'username': username, 'password': password, 'smsCode': smsCode} )
            // forware the user to the  "home" page
            this.$router.push({name: 'home'});
        }
    },
}

</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    height: 80%;
    padding: 7px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
    border: 1px solid black;
}

h1 {
    text-align: left;
    padding-block-start: .5rem;
    padding-block-end: 2rem;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}


table {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    text-align: left;
    padding-inline-start: 7px;
    margin-block-end: 10px;
}

tr {
    width: 50%;
    display: flex;
    flex-direction: row;
    padding-block-end: .3rem;
    justify-content: flex-end;
}

th {
    width: 40%;
}

td {
    width: 60%;
    padding-inline-start: .7rem;
}

input {
    width: 100%;
    padding-inline-start: .3rem;
    margin-block-end: .5rem;
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

button {
    font-size: 1rem;
    padding-inline: .5rem;
    padding-block: .2rem;
    border:1px solid black;
    border-radius: 5px;
    background-color: var(--color-4);
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3); 
}

.message {
    color: red;
    font-weight: bold;
}



</style>