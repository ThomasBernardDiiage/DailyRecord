<template>
    <section class="container">
        <section class="card">
            <h1>Daily Record</h1>
            <input type="text" placeholder="Enter your email">
            <input type="text" placeholder="Enter your password">
            <button>Log In</button>
            <span></span>
            <a href="">Don't have an account ? Create one</a>
        </section>
    </section>
</template>

<style>
section.container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}

section.card{
    min-width: 200px;
    background-color: whitesmoke;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
}

section.card h1{
    font-size: 25pt;
}

section.card input{
    margin: 7px 0;
    padding: 5px;
}

section.card button{
    border: none;
    border-radius: 3px;
    background-color: rgb(61, 147, 236);
    margin: 7px 0;
    padding: 10px 20px;
    color: white;
}

section.card button:hover{
    cursor: pointer;
}

section.card span{
    border: solid black 1px;
    border-radius: 3px;
    margin: 7px 0;
}

section.card a {
    text-decoration: none;
    color: rgb(61, 147, 236);
    margin-top: 7px;
}
</style>


<script>
</script>