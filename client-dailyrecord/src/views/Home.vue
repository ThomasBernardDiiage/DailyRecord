<template>
    <section class="container">
        <section class="wrapper">
            <ButtonLogout @click.native="logout()"></ButtonLogout>
            <section class="listProjects">
                <ProjectComponent v-for="project in projects" v-bind:key="project.id" v-bind:project="project"></ProjectComponent>
            </section>

            <button class="buttonBlue">Create a new project</button>
        </section>
    </section>
</template>


<style>
    @import '../assets/styles/main.css'; /* import the styles sheet */

    section.container section.wrapper{
        min-width: 300px;
        background-color: whitesmoke;
        justify-content:space-between;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        box-shadow: -2px 5px 15px 0px #000000;
    }

    section.listProjects {
        height: 300px;
        margin: 5px 0;
        display: flex;
        align-items: baseline;
        flex-direction: column;
        overflow:scroll;
        border: solid 1px black;
        border-radius: 5px;
    }

</style>

<script>
    //#region all imports
        import ProjectComponent from '../components/ProjectComponent.vue'; // Import our component
        import ButtonLogout from '../components/ButtonLogout.vue';
        import AuthenticationService from '../services/authenticationService';

    //#endregion


    export default {
        name:'Home',
        components:{
            ProjectComponent,
            ButtonLogout
        },
        data(){
            return {
                projects:[
                    {
                        name:'Name of the project 1',
                        numberOfDaily:'8'
                    },
                    {
                        name:'Name of the project 2',
                        numberOfDaily:'12'
                    }
                    
                ]
            };
        },
        mounted(){
            this.AuthenticationService = new AuthenticationService();
        },
        methods:{
            logout(){
                this.AuthenticationService.logout();
            }
        }
    }
</script>