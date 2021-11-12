<template>
    <section class="container">
        <form class="card" @submit="register">
            <h1>Register</h1>
            <label for="inputMail">E-mail adress :</label>
            <input v-model="email" name="inputMail" type="email" placeholder="Enter your email">

            <label for="inputPassword">Password :</label>
            <input v-model="password" name="inputPassword" type="password" placeholder="Enter your password">

            <label for="inputFirstName">First name :</label>
            <input v-model="firstName" name="inputFirstName" type="text" placeholder="Enter your first name">

            <label for="inputLastName">Last name :</label>
            <input v-model="lastName" name="inputLastName" type="text" placeholder="Enter your last name">

            <input type="submit" value="Register">
            <span></span>
            <a href=""><router-link to="/">Already have an account ? Log In</router-link></a>

        </form>
    </section>
</template>


<style>
    @import '../assets/styles/card.css'; /* import the styles sheet */
</style>

<script>
    //#region all imports
        const AuthenticationService = require('../services/authenticationService');
    //#endregion

    export default{
        name:'Register',
        data(){
            return {
                email: 'thomas.bernard@diiage.org',
                password: 'Azerty@123',
                firstName: 'Thomas',
                lastName: 'Bernard'
            }
        },
        methods:{
            register(event){
                event.preventDefault(); // Cancel the reload and data in url
                AuthenticationService.register(this.email, this.password, this.firstName, this.lastName);
            }
        }
    }

</script>