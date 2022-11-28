<template>
    <section class="StampRow">
        <h5>{{this.stamp.name}}</h5>
        <article>
            <p>{{convertHMS(this.stamp.location)}}</p>
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
        cursor: pointer;
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
        },
        methods:{
            convertHMS(value) {
                const sec = parseInt(value, 10); // convert value to number if it's string
                let hours   = Math.floor(sec / 3600); // get hours
                let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
                let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
                // add 0 if value < 10; Example: 2 => 02
                if (minutes < 10) {minutes = "0"+minutes;}
                if (seconds < 10) {seconds = "0"+seconds;}
                return minutes+':'+seconds; // Return is HH : MM : SS
            }
        }
    }
</script>
