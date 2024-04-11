// Vuex store module - Knowledge base doucments

// imports
// import user from '@/models/user'

export default ({
    namespaced: true,
    state: {
        username: "",
        passwordHashed: "",
        firstname: "",
        lastname: "",
        email: "",
        loggedIn: false,
    },
    mutations: {
        SET_LOGGED_IN(state){
            state.loggedIn = true;
        },
        RESET_LOGGED_IN(state){
            state.loggedIn = false;
        },
    },
    actions: {
        // action to set the loggedIn status of the user
        setLoggedIn(context){
            context.commit('SET_LOGGED_IN')
        },
    },
    modules: {
        // modules
    }
})