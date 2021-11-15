<template>
    <section class="container">
        <section class="wrapper">
            <div>
                <ButtonLogout @click.native="logout()"></ButtonLogout>
                <ButtonProfile></ButtonProfile>
            </div>
            
            <section class="listProjects">
                <ProjectComponent v-for="project in projects" v-bind:key="project.id" v-bind:project="project"></ProjectComponent>
            </section>

        
        <button @click="createProject()" class="buttonBlue">Create a new project</button>

        </section>
    </section>
</template>


<style>
    @import '../assets/styles/main.css'; /* import the styles sheet */

    section.container section.wrapper{
        min-width: 400px;
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
        overflow: auto;
        border: solid 1px black;
        border-radius: 5px;
    }

    section.wrapper div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }

</style>

<script>
    //#region all imports
        import ProjectComponent from '../components/ProjectComponent.vue'; // Import our component
        import AuthenticationService from '../services/authenticationService';
        import ButtonLogout from '../components/ButtonLogout.vue';
        import ButtonProfile from '../components/ButtonProfile.vue';
        import Router from '../router/index';
        import ProjectService from '../services/projectService'; //add the service


    //#endregion


    export default {
        name:'Home',
        components:{
            ProjectComponent,
            ButtonLogout,
            ButtonProfile
        },
        data(){
            return {
                projects : undefined
            };
        },
        async mounted(){
            this.AuthenticationService = new AuthenticationService();
            this.ProjectService = new ProjectService();
            this.projects = await this.ProjectService.getProjects();
            
        },
        methods:{
            logout(){
                this.AuthenticationService.logout();
            },
            createProject(){
                Router.push('/projectCreation');
            }
        }
    }
</script>