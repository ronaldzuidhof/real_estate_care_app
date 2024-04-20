<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <img 
            src="@/assets/logo/RealEstateMainLogoWhite.png" 
            v-touch:tap="touchHandler" 
            id="home"
            alt="Logo Real Estate bedrijf"
        >
        <picture>
            <svg-icon 
                v-if="userLoggedIn"
                :path="icons[0]" 
                class="icon"
                alt="knop icoon meldingen"
                id="notifications"
                type="mdi" 
                v-touch:tap="touchHandler" 
            ></svg-icon>
            <svg-icon 
                v-if="userLoggedIn"
                :path="icons[1]" 
                class="icon" 
                alt="Knop icoon instellingen"
                id="settings"
                type="mdi" 
                v-touch:tap="touchHandler" 
            ></svg-icon>
            <svg-icon 
                v-if="userLoggedIn"
                :path="icons[10]"
                class="icon"
                alt="Knop icoon inloggen/uitloggen"
                id="login"
                type="mdi" 
                v-touch:tap="touchHandler" 
            ></svg-icon>
        </picture>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'

// export component
export default {
    name: "TheHeader", 
    // load used components
    components: {
        SvgIcon
    },
    computed: {
        // function to return the icons array from the store
        icons() {
            return this.$store.state.inspections.icons
        },
        // function to return the state if the user is logged in
        userLoggedIn(){
            return this.$store.state.user.userLoggedIn
        }
    },
    methods: {
        // push currenTarget id (name) of event to router (load view)
        touchHandler(event){
            // load preventDefault to stop propagnation on the loaded route
            event.preventDefault();
            // check if event is 'login'
            if (event.currentTarget.id === 'login'){
                // log out user and redirect to login page
                this.$store.dispatch('user/clearUserLoggedIn')
                this.$router.push({name: 'login'})
            // push target event to the router
            } else {
                this.$router.push({name: event.currentTarget.id});
            }
        }
    }
}
</script>

<!--STYLE--------------------------------------------------------------------------------------------->

<style scoped>

section {
    display: flex;
    justify-content: space-between;
    padding-block: 1%;
    padding-inline: 1%;
    height: 10%;
    background-color: var(--color-1);
    border: 1px solid var(--color-1);
}

img {
    display: flex;
    height: 100%;
    padding-inline-end: 10%;
    object-fit: contain;
    overflow: auto;
}

picture {
    display: flex;
    align-items: center;
}

.icon {
    height: 60%;
    width: auto;
    margin-inline-end: 10%;
    color: white;
}

</style>