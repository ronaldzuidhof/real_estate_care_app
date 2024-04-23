<!--HTML----------------------------------------------------------------------------------------------->

<template lang="nl">
    <section>
        <article>
            
            <header>
                <h1>Instellingen</h1>
                <div class="status">
                    <svg-icon 
                        v-if="settingSelectedEdit" 
                        :path="icons[8]" 
                        class="icon" 
                        alt="Knop icoon opslaan"
                        type="mdi" 
                        v-touch:tap="editSetting"
                    ></svg-icon>
                    <svg-icon 
                        v-else
                        :path="icons[7]" 
                        class="icon" 
                        alt="Knop icoon bewerken"
                        type="mdi" 
                        v-touch:tap="editSetting"
                    ></svg-icon>
                </div>
            </header>

            <table>
                <tr>
                    <th><label for="username">Gebruikersnaam:</label></th>
                    <td><input 
                        id="username"
                        disabled="true" 
                        type="text" 
                        v-model="this.userLoggedIn.username" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="group">Groep:</label></th>
                    <td><input 
                        id="group"
                        disabled="true" 
                        type="text" 
                        v-model="this.userLoggedIn.group" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="firstname">Voornaam:</label></th>
                    <td><input 
                        id="firstname"
                        :class="editClass"
                        :disabled="!settingSelectedEdit"
                        type="text" 
                        v-model="this.userLoggedIn.firstname" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="lastname">Achternaam:</label></th>
                    <td><input 
                        id="lastname"
                        :class="editClass"
                        :disabled="!settingSelectedEdit" 
                        type="text" 
                        v-model="this.userLoggedIn.lastname" 
                    ></td>
                </tr>
                <tr>
                    <th><label for="mail">Mail adres:</label></th>
                    <td><input 
                        id="mail"
                        :class="editClass"
                        :disabled="!settingSelectedEdit" 
                        type="text" 
                        v-model="this.userLoggedIn.mail" 
                    ></td>
                </tr>
            </table>

        </article>
    </section>
</template>

<!--SCRIPT--------------------------------------------------------------------------------------------->

<script>
// imports
import SvgIcon from '@jamescoyle/vue-icon'

// export component
export default {
    name: "SettingsList",
    components: {
        SvgIcon
    },
    methods: {
        // function to edit the selected inspection (enable fields)
        editSetting(event){
            // load preventDefault to stop propagnation
            event.preventDefault();
            // check state of inspectionSelectedEdit store entry
            if (this.settingSelectedEdit){
                // disable all input fields of the reports
                this.$store.dispatch('user/clearSettingSelectedEdit')
            } else {
                // enable all input fields of the reports
                this.$store.dispatch('user/setSettingSelectedEdit')
            }
        }
    },
    computed: {
        // function to return the the object of the user that is logged in from the store
        userLoggedIn(){
            return this.$store.state.user.userLoggedIn
        },
        // function return the settings selected edit entry from the store
        settingSelectedEdit() {
            return this.$store.state.user.settingSelectedEdit
        },
        // function to return the icons array from the store
        icons() {
            return this.$store.state.inspections.icons
        },
        // function to return the "editClass" if inspection selection edit is active
        editClass(){
            // return editClass
            if(this.settingSelectedEdit){
                return "editClass"
            // return empty class
            } else {
                return ""
            }
        },
    }
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
    padding-block: 7px;
    text-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

article {
    width: 100%;
    padding-inline: 7px;
    margin-block-end: 7px;
    border: 1px solid black;
}

header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.3rem;
    padding-inline-end: 1rem;
    text-wrap: nowrap;
}

table {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    font-size: 1rem;
    text-align: left;
    padding-inline-start: 7px;
    margin-block-end: 10px;
}

tr {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-block-end: .3rem;
    padding-inline-end: .5rem
}

td {
    width: 70%;
    padding-inline-start: .5rem;
}

select {
    padding-inline: .5rem;
    font-weight: bold;
    font-size: 1.4rem;
}

input {
    width: 100%;
    padding-inline-start: .3rem;
    border-radius: 2px; 
}

.status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center
}

.icon {
    padding-inline-start: .7rem;
    height: 100%;
    width: auto;
}

.editClass {
    border: 1px solid black;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgb(0 0 0 / 0.3);
}

</style>