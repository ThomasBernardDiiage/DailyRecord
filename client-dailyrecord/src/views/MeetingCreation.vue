<template>
    <section class="container">
        <section class="wrapper">

            <h1>Daily meeting creation</h1>

            <label for="startDate"> Start date:</label>
            <input type="date" id="startDate" name="startDate">

            <label for="dailyName">Name :</label>
            <input type="text" placeholder="Enter the name of the meeting">

            <span></span>

            <h3>Record :</h3>
            <span></span>

            <div>
                <ButtonGoback @click.native="goback()"></ButtonGoback>
                <button class="buttonBlue">Save</button>
            </div>
        </section>
    </section>
</template>


<style scoped>
    @import '../assets/styles/main.css'; /* import the styles sheet */

    section.container section.wrapper{
        min-width: 400px;
        background-color: whitesmoke;
        justify-content:space-between;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        box-shadow: -2px 5px 15px 0px #000000;
    }
</style>

<script>
    //#region all imports
        import ButtonGoback from '../components/ButtonGoback.vue';
        import Router from '../router';
    //#endregion

    export default {
        name: "MeetingCreation",
        components:{
            ButtonGoback
        },
        data(){
            return {};
        },
        methods: {
            goback(){
                Router.push('/project/' + this.$route.params.projectId);
            }
        }
    }

</script>