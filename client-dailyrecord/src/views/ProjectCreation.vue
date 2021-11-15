<template>
    <section class="container">
        <section class="wrapper">
            <h1>Project creation</h1>
            <label for="projectName">Project name :</label>
            <input name="projectName" type="text">

            <label for="projectMembersMail">Enter a email :</label>
            <input name="projectMembersMail" type="email">

            <label for="projectDescription">Project description :</label>
            <textarea name="projectDescription"></textarea>

            <div>
                <ButtonGoBack @click.native="goback()"></ButtonGoBack>
                <button class="buttonBlue">Create the project</button>
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
        import ButtonGoBack from '../components/ButtonGoback.vue';
        import Router from '../router';


    //#endregion


    export default {
        name:'Home',
        components:{
            ButtonGoBack,

        },
        data(){
            return {};
        },
        methods:{
            goback(){
                Router.push('/home');
            }
        }
    }
</script>
