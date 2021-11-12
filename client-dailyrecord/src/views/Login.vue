<template>
    <section class="container">
        <form class="card" @submit="login">
            <h1>Log In</h1>
            <label for="inputMail">E-mail adress :</label>
            <input v-model="email" name="inputMail" type="email" placeholder="Enter your email">
            <label for="inputPassword">Password :</label>
            <input v-model="password" name="inputPassword" type="password" placeholder="Enter your password">
            <input type="submit" value="Log In">
            <span></span>
            <a href=""><router-link to="/register">Don't have an account ? Create one</router-link></a>
        </form>
    </section>
</template>


<style>
    @import '../assets/styles/card.css'; /* import the styles sheet */
</style>

<script>
    //#region all imports
        import AuthenticationService from '../services/authenticationService'
    //#endregion

    export default{
        name:'Login',
        data(){
            return {
                email: 'thomas.bernard@diiage.org',
                password: 'Azerty@123'
            }
        },
        mounted(){
            this.AuthenticationService = new AuthenticationService();
        },
        methods:{
            login(event){
                event.preventDefault(); // Cancel the reload and data in url

                if(!(this.email == '' || this.password == '')){
                    this.AuthenticationService.login(this.email, this.password);
                }
                else{
                    alert('Enter an e-mail adress and a password')
                }
            }
        }
    }

</script>