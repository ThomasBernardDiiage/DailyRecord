<template>
    <section class="container">
        <section class="wrapper">
            <h1>{{this.project.name}}</h1>
            <label for="description">Description :</label>
            <textarea v-model="project.description" name="description"></textarea>

            <span style="margin-top:15px"></span>

            <label style="margin-top:10px" class="messageMail">{{this.messageMail}}</label>
            <div>
                <input v-model="mail" type="email" style="width:70%" placeholder="Enter an email adress">
                <button @click="addMail()" class="buttonBlue">Add</button>
            </div>

            <div class="listUser">
                <UserComponent v-for="user in project.users" v-bind:key="user.id" :mail="user.mail"></UserComponent>
            </div>

            <ButtonGoback @click.native="goback()"></ButtonGoback>
        </section>
    </section>
</template>


<style scoped>
    @import '../assets/styles/main.css'; /* import the styles sheet */

    section.container section.wrapper h5.messageMail{
        margin: 0;
        align-self: flex-start;
        margin-top: 10px;
    }

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
        pointer-events: none;
    }

    section.wrapper div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

    section.wrapper div.listUser{
        justify-content: start !important;
        height: 100px;
        background-color: white;
        border: 1px solid rgb(92, 92, 92);
        border-radius: 2px;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }


</style>


<script>
    //#region all imports
        import Router from '../router/index';
        import ButtonGoback from '../components/ButtonGoback.vue';
        import UserComponent from '../components/UserComponent.vue';
        import ProjectService from '../services/projectService'; //add the service
    //#endregion

    export default{
        name:'ProjectSetting',
        components:{
            ButtonGoback,
            UserComponent
        },
        data(){
            return {
                messageMail:"Enter an email adress :",
                project : undefined
            };
        },
        async mounted(){
            this.ProjectService = new ProjectService();
            this.project = await this.ProjectService.getProject(this.$route.params.projectId);
        },
        methods:{
            goback(){
                Router.push('/project/' + this.$route.params.projectId);
            },
            async addMail(){
                const mailAdded = await this.ProjectService.addUserToProject(this.mail, this.$route.params.projectId);
                const h5 = document.getElementsByClassName('messageMail');

                if(mailAdded){
                    this.messageMail = "User added to this project";
                    this.project = await this.ProjectService.getProject(this.$route.params.projectId);
                    this.mail = "";
                    h5[0].style.color = "green";
                }
                else {
                    this.messageMail = "Error please verify infos";
                    h5[0].style.color = "red";
                }
            }
        }
    }
</script>