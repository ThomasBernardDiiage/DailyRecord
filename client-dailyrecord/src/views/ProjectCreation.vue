<template>
    <section class="container">
        <section class="wrapper">
            <h1>Project creation</h1>
            <label for="projectName">Project name :</label>
            <input name="projectName" v-model="projectName" type="text" placeholder="Enter your project name">

            <label for="projectDescription">Project description :</label>
            <textarea name="projectDescription" v-model="projectDescription" placeholder="Enter your project description"></textarea>

            <label for="startDate"> Start date:</label>
            <input type="date" id="startDate" name="startDate" v-model="startDate" min="2021-11-18">

            <label for="endDate"> End date:</label>
            <input type="date" id="endDate" name="endDate" v-model="endDate" v-bind:min="this.startDate">

            <div>
                <ButtonGoback @click.native="goback()"></ButtonGoback>
                <button class="buttonBlue" @click="createProject()">Create</button>
            </div>
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

    section.container section.wrapper textarea{
        height: 100px;
    }

    section.container section.wrapper div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>


<script>
    //#region all imports
        import ButtonGoback from '../components/ButtonGoback.vue';
        import Router from '../router';
        import ProjectService from '../services/projectService'; //add the service


    //#endregion


    export default {
        name:'Home',
        components:{
            ButtonGoback,

        },
        data(){


            return {
                projectName: "",
                projectDescription: "",
                startDate: "",
                endDate: ""
            };
        },
        
        mounted(){
            this.ProjectService = new ProjectService();
        },

        methods:{
            async createProject(){
                if(this.projectName != '' && this.projectDescription != '' && this.startDate != '' && this.endDate != '' && this.startDate < this.endDate){
                    const resultCreate = await this.ProjectService.createProject(this.projectName, this.projectDescription, this.startDate, this.endDate);
                    console.log(resultCreate);
                    if(resultCreate){

                        Router.push('/home') //refaire le call pour refresh la liste des projets dans home !
                    }
                    else{
                        alert('Error, cant create this project');
                    }
                }
                else{
                    alert('Please enter all informations');
                }
            },

            goback(){
                Router.push('/home');
            }
        }
    }
</script>
