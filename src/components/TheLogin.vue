<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <h1>Login</h1>
        <table>
            <tr>
                <th><label for="username">Gebruikersnaam:</label></th>
                <td><input 
                    id="username"
                    type="text" 
                    v-model="this.$store.state.user.username" 
                ></td>
            </tr>
            <tr>
                <th><label for="password">Wachtwoord:</label></th>
                <td><input 
                    id="password"
                    type="password" 
                    v-model="this.$store.state.user.password" 
                ></td>
            </tr>
            <tr>
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
                Inloggen</button>
            </tr>
        </table>
        <div v-if="errors.length !== 0">
            <p  
                v-for="error in errors"
                class="error"
            >
                {{error}}
            </p>
        </div>

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
        // function to return the content of user message
        errors(){
            return this.$store.state.user.errors
        },
    },
    methods: {
        // push currenTarget id (name) of event to router (load view)
        touchHandler(event){
            // load preventDefault to stop propagnation on the loaded route
            event.preventDefault();
            // check if the user credentials are correct
            this.$store.dispatch('user/checkUserCredentials', {
                username: this.$store.state.user.username,
                password: this.$store.state.user.password,
                smsCode: this.$store.state.user.smsCode,
            })
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
    width: 85%;
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

.error {
    color: red;
    font-weight: bold;
}



</style>