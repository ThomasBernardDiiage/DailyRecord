<template>
    <section class="StampRow">
        <h5>{{this.stamp.name}}</h5>
        <article>
            <p>{{this.stamp.location}}</p>
            <img src="../assets/images/pin.png" alt="">
        </article>
    </section>
</template>

<style scoped>
    section.StampRow{
        display: flex;
        justify-content: space-between !important;
        align-items: center !important;
        height: auto !important;
        padding: 3px, 20px;
        border-bottom: solid 1px gray;
    }
    section.StampRow article {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
    section.StampRow h5{
        justify-self: flex-start;
    }
    section.StampRow p {
        margin-right: 20px;
    }

    section.StampRow article img {
        width: 20px;
        height: 27px;
    }
</style>

<script>
    export default {
        name:'StampComponent',
        props:{
            stamp:undefined
        }
    }
</script>
