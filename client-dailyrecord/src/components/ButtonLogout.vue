<template>
    <article class="buttonLogout">
        <img src="../assets/images/logout.png" alt="">
        <h5>Logout</h5>
    </article>
</template>


<style>
    .buttonLogout{
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-start;
        background-color: rgb(212, 59, 59);
        padding: 7px 20px;
        border-radius: 3px;
        cursor: pointer;
    }

    .buttonLogout:hover{
        background-color: rgb(185, 20, 20);
    }

    .buttonLogout h5{
        margin: 0;
        color: black !important;

    }

    .buttonLogout img{
        width: 20px;
        margin-right: 5px;
    }
</style>


<script>

export default{

}
</script>
