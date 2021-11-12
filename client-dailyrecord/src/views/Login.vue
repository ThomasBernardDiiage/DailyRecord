<template>
    <section class="container">
        <section class="card">
            <h1>Log In</h1>
            <label for="inputMail">E-mail adress :</label>
            <input name="inputMail" type="email" placeholder="Enter your email">
            <label for="inputPassword">Password :</label>
            <input name="inputPassword" type="password" placeholder="Enter your password">
            <button>Log In</button>
            <span></span>
            <a href=""><router-link to="/register">Don't have an account ? Create one</router-link></a>
        </section>
    </section>
</template>


<style>
    @import '../assets/styles/card.css';
</style>

<script>
</script>