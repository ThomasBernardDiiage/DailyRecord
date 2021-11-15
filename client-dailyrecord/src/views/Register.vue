<template>
    <section class="container">
        <form class="card" @submit="register">
            <h1>Register</h1>
            <label for="inputMail">E-mail adress :</label>
            <input v-model="email" name="inputMail" type="email" placeholder="Enter your email">

            <label for="inputPassword">Password :</label>
            <input v-model="password" name="inputPassword" type="password" placeholder="Enter your password">

            <label for="inputFirstName">First name :</label>
            <input v-model="firstname" name="inputFirstName" type="text" placeholder="Enter your first name">

            <label for="inputLastName">Last name :</label>
            <input v-model="lastname" name="inputLastName" type="text" placeholder="Enter your last name">

            <input type="submit" value="Register" class="buttonBlue">
            <span></span>
            <a href=""><router-link to="/">Already have an account ? Log In</router-link></a>

        </form>
    </section>
</template>


<style>
    @import '../assets/styles/card.css'; /* import the styles sheet */
    @import '../assets/styles/main.css'; /* import the styles sheet */

</style>

<script>
    //#region all imports
        import AuthenticationService from '../services/authenticationService';
        import Router from '../router/index';
    //#endregion

    export default{
        name:'Register',
        data(){
            return {
                email: 'thomas.bernard@diiage.org',
                password: 'Azerty@123',
                firstname: 'Thomas',
                lastname: 'Bernard'
            }
        },
        mounted(){
            this.AuthenticationService = new AuthenticationService();
        },
        methods:{
            async register(event){
                event.preventDefault(); // Cancel the reload and data in url
                const accountCreated = await this.AuthenticationService.register(this.email, this.password, this.firstname, this.lastname);
                if(accountCreated){
                    Router.push('/'); // We go to the login page
                }
                else{
                    alert('please verify all of your informations'); // We show an alert
                }
            }
        }
    }

</script>