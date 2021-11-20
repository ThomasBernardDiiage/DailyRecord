<template>
    <section class="itemDaily">
        <h5>{{this.meeting.description}}</h5>
        <article>
            <h5>{{this.meeting.timestamp}}</h5>
            <img src="../assets/images/pin.png" alt="">
        </article>
    </section>
</template>

<style>
    section.itemDaily{
        width: calc(100% - 40px);
        padding: 10px 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    section.itemDaily h5{
        margin: 0;
    }

    section.itemDaily article{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section.itemDaily article img{
        width: 20px;
        margin-left: 5px;
    }

    section.itemDaily:hover{
        background-color: rgb(40, 97, 158);
        color: white;
    }
</style>


<script>
    export default {
        name:'ProjectComponent',
        props:{
            meeting:undefined
        }
    }
</script>