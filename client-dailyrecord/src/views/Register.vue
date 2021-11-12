<template>
    <section class="container">
        <section class="card">
            <h1>Register</h1>
            <label for="inputMail">E-mail adress :</label>
            <input name="inputMail" type="email" placeholder="Enter your email">
            <label for="inputPassword">Password :</label>
            <input name="inputPassword" type="password" placeholder="Enter your password">
            <label for="inputFirstName">First name :</label>
            <input name="inputFirstName" type="text" placeholder="Enter your first name">
            <label for="inputLastName">Last name :</label>
            <input name="inputLastName" type="text" placeholder="Enter your last name">
            <button>Register</button>
            <span></span>
            <a href=""><router-link to="/">Already have an account ? Log In</router-link></a>

        </section>
    </section>
</template>


<style>
    @import '../assets/styles/card.css';
</style>

<script>
</script>