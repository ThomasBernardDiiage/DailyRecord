<template>
    <section class="userRow">
        <img src="../assets/images/profile.png" alt="">
        <h5>{{this.mail}}</h5>
    </section>
</template>

<style scoped>
    section.userRow{
        display: flex;
        padding: 5px 10px;
        width: calc(100% - 20px);
        align-items: center;
    }

    section.userRow h5{
        margin: 0;
        margin-left: 10px;
    }

    section.userRow img {
        width: 20px;
        height: 20px;
    }
</style>

<script>
    export default {
        name:'UserComponent',
        props:{
            mail:undefined
        }
    }
</script>
