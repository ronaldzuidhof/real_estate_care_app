// Vuex store module - Knowledge base doucments

// imports
import usersJson from '@/assets/json/users.json'
import User from '@/models/user'

export default ({
    namespaced: true,
    state: {
        users: null,
        userLoggedIn: null,
        username: "",
        password: "",
        smsCode: "",
        twoWay: false,
        errors: [],
        settingSelectedEdit: false,
    },
    mutations: {
        // mutation to set the inspections in the store
        SET_USERS(state, payload){
            state.users = payload;
        },
        // mutation to clear the inspection in the store
        CLEAR_USER_LOGGED_IN(state){
            state.userLoggedIn = false;
        },
        // mutation to clear the inspection in the store
        SET_USER_LOGGED_IN(state, payload){
            state.userLoggedIn = payload;
        },
        // mutation to set the twoWay in the store
        SET_TWO_WAY(state){
            state.twoWay = true;
        },
        // mutation to reset the twoWay in the store
        RESET_TWO_WAY(state){
            state.twoWay = false;
        },
        // mutation to reset the user credentials
        RESET_USER_CREDENTIALS(state){
            state.username = "",
            state.password = "",
            state.smsCode = ""
        },
        // mutation to set the errors in the store
        ADD_ERROR(state, payload){
            state.errors = [...state.errors, payload]
        },
        // mutation to reset the errors array
        RESET_ERRORS(state){
            state.errors = []
        },
         // mutation to set the selected inspection in the store
         SET_SETTING_SELECTED_EDIT(state){
            state.settingSelectedEdit = true;
        },
        // mutation to clear the inspection in the store
        CLEAR_SETTING_SELECTED_EDIT(state){
            state.settingSelectedEdit = false;
        },
    },
    actions: {
         // action to fetch the documents from the JSON file (local) and save the result into the VUEX store
         fetchUsers(context){
            // map over the user Array and create User instances
            let result = usersJson.users.map(user => new User(user)); 
            // send the documents array to the mutation 'SET_USERS' of the store
            context.commit('SET_USERS', result) 
         },
         // action to set the 'userLoggedIn' in the store
        fetchUserLoggedIn(context, value){
            // clear the userLoggedIn store entry
            context.commit('CLEAR_USER_LOGGED_IN')
            // set the userLoggedIn store entry
            context.commit('SET_USER_LOGGED_IN', value)
        },
        // action to clear the 'userLoggedIn' in the store
        clearUserLoggedIn(context){
            context.commit('CLEAR_USER_LOGGED_IN')
        },
        // action to check the given user credentials with the user JSON file (Future should be secure API of backbone) and store as server session cookie
        checkUserCredentials(context, value){
            // reset errors arrays before check
            context.commit("RESET_ERRORS")
            // filter over user array and check if username and password is equal
            const user = usersJson.users.filter((user) => (
                user.username === value.username.toLowerCase() &&
                user.password === value.password &&
                user.smsCode === value.smsCode
            ))
            // create new user instance in the loggedIn entry if user credentials are valid
            if (user[0]){
                // set logged in user to the store
                context.commit('SET_USER_LOGGED_IN', new User(user[0]))
                // reset login credentials
                context.commit('RESET_USER_CREDENTIALS')
            // create a new error and reset login credentials
            } else {
                context.commit('ADD_ERROR', "Inlog gegevens incorrect")
            }
        },
        // action to set the 'inspectionSelectedEdit' in the store
        setSettingSelectedEdit(context){
            // set the report selected edit entry to true
            context.commit('SET_SETTING_SELECTED_EDIT')
        },
        // action to clear the inspectionSelectedEdit in the store
        clearSettingSelectedEdit(context){
            context.commit('CLEAR_SETTING_SELECTED_EDIT')
        },

    },
    modules: {
        // modules
    }
})