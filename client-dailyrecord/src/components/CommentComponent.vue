<template>
    <section class="commentRow">
        <h5>{{this.comment.firstname}} {{this.comment.lastname}}</h5>
        <p>{{this.comment.text}}</p>
    </section>
</template>

<style scoped>
    section.commentRow{
        display: flex;
        flex-direction: column;
        justify-content: flex-start !important;
        align-items: flex-start !important;
        height: auto !important;
        border: solid 1px gainsboro;
        border-radius: 5px;
        padding: 3px;
        margin-bottom: 15px;
        width: 90% !important;
        align-self: flex-start;
    }

    section.commentRow h5{
        margin: 0;
    }
    section.commentRow p{
        margin: 0;
        text-align: start;
    }

</style>

<script>
    export default {
        name:'CommentComponent',
        props:{
            comment:undefined
        }
    }
</script>
