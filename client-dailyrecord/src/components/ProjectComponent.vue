<template>
    <section class="itemProject">
        <h5>{{this.project.name}}</h5>
        <article>
            <h5>{{this.project.numberOfDaily}}</h5>
            <img src="../assets/images/record.png" alt="">
        </article>
    </section>
</template>


<style>
    section.itemProject{
        width: calc(100% - 20px);
        padding: 7px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    section.itemProject:hover{
        background-color: rgb(40, 97, 158);
        color: white;
    }

    section.itemProject h5{
        margin: 0;
    }

    section.itemProject article{
        display: flex;
        align-items: center;
        margin: 0 10px;
    }

    section.itemProject article img{
        width: 20px;
        margin-left: 5px;
    }
</style>


<script>

export default {
    name:'ProjectComponent',
    props:{
        project:undefined
    }
}
</script>
