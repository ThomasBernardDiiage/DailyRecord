<template>
    <section class="container">
        <section class="wrapper">
            <div>
                <h1>Error : You are a teapot ! You entered an invalid URL or tried to access someone else's project</h1>
                <img src="../assets/images/Teapot.png" alt="Teapot"/>
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
    section.wrapper div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

</style>

<script>
    //#region all import
        import AuthenticationService from '../services/authenticationService';
    //#endregion


    export default {
        name:'Teapot',
        data(){
            return {
                user:undefined
            };
        },
        async mounted(){
            this.AuthenticationService = new AuthenticationService();
        },
       
        
    }
</script>