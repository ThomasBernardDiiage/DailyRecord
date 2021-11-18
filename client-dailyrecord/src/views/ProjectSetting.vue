<template>
    <section class="container">
        <section class="wrapper">
            <h1>{{this.project.name}}</h1>
            <label for="description">Description :</label>
            <textarea v-model="project.description" name="description"></textarea>

            <div>
                <input type="email" style="width:70%">
                <button class="buttonBlue">Save</button>
            </div>

            <div class="listUser">
                <UserComponent v-for="user in project.users" v-bind:key="user.id" :mail="user.mail"></UserComponent>
            </div>

            <ButtonGoback @click.native="goback()"></ButtonGoback>
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
        pointer-events: none;
    }

    section.wrapper div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

    section.wrapper div.listUser{
        justify-content: start;
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

        //import ProjectService from '../services/projectService'; //add the service
    //#endregion

    export default{
        name:'ProjectSetting',
        components:{
            ButtonGoback,
            UserComponent
        },
        data(){
            return {
                project : {
                    name:"Boss simulator",
                    description: "Description of boss Simulator",
                    users: [
                        {
                            name:"thomas",
                            mail:"thomas.bernard@diiage.org"
                        },
                        {
                            name:"justin",
                            mail:"justin.robin@diiage.org"
                        }
                        ,
                        {
                            name:"anthony",
                            mail:"anthony.de@diiage.org"
                        }
                    ]
                }
            };
        },
        methods:{
            goback(){
                Router.push('/project/1');
            }
        }
    }
</script>