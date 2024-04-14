// Vuex store module - Knowledge base doucments

// imports
// import user from '@/models/user' - Future create a class instance for every user

export default ({
    namespaced: true,
    state: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email: "",
        loggedIn: false,
        twoWayAuthentication: false,
        smsCode: "",
        message: "",
    },
    mutations: {
        SET_LOGGED_IN(state){
            state.loggedIn = true;
        },
        SET_TWO_WAY(state){
            state.twoWayAuthentication = true
        },
        SET_MESSAGE(state, payload){
            state.message = payload
        },
        RESET_MESSAGE(state){
            state.message = ""
        },
        RESET_LOGGED_IN(state){
            state.loggedIn = false;
        },
        RESET_USER_CREDENTIALS(state){
            state.username = ""
            state.password = ""
            state.smsCode = ""
        }
    },
    actions: {
        // action to set the loggedIn status of the user
        setLoggedIn(context){
            context.commit('SET_LOGGED_IN')
        },
        // action to reset the loggedIn status of the user
        resetLoggedIn(context){
            context.commit('RESET_LOGGED_IN')
        },
        // function to check het user credentials with the database on the server
        // No API presenst for this for testing, No API call will be done for now
        checkCredentials(context, payload){
            // debug
            console.log(payload.username)
            console.log(payload.password)
            console.log(payload.smsCode)
            console.log(this.twoWayAuthentication)
            // first part username and password is received and validated
            if (this.twoWayAuthentication){
                // check if sms code is equal to value stored in the database of the server, simulated (1234)
                if (payload.smsCode === '456789'){
                    context.commit('SET_LOGGED_IN')
                } else {
                    context.commit('RESET_USER_CREDENTIALS')
                    context.commit('SET_MESSAGE', 'SMS code niet correct')
                }
                
            } else {
                // check if username and password is equal to values stored in the database of the server, simulated (inspecteur, inspecteur1234) 
                if (payload.username === 'inspecteur' && payload.password === 'inspecteur1234'){
                    context.commit('RESET_MESSAGE')
                    context.commit('RESET_USER_CREDENTIALS')
                    context.commit('SET_TWO_WAY')
                // reset the user credentials and set a error message in the store variable
                } else {
                    context.commit('RESET_USER_CREDENTIALS')
                    context.commit('SET_MESSAGE', 'Gebruikers gegevens niet correct')
                }
            }
        }
    },
    modules: {
        // modules
    }
})