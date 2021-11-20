<template>
    <section class="container">
        <section class="wrapper">

            <h1>Daily meeting creation</h1>

            <label for="dateDaily">Date:</label>
            <input v-model="date" type="date" name="dateDaily">

            <label for="dailyName">Name :</label>
            <input v-model="name" type="text" placeholder="Enter the name of the meeting">

            <span></span>

            <h3>Record :</h3>

            <span></span>

            <div>
                <ButtonGoback @click.native="goback()"></ButtonGoback>
                <button @click="createMeeting()" class="buttonBlue">Save</button>
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

    section.container section.wrapper div {
        display: flex;
        justify-content: space-between;
    }
</style>

<script>
    //#region all imports
        import ButtonGoback from '../components/ButtonGoback.vue';
        import Router from '../router';
        import MeetingService from '../services/meetingService';
    //#endregion

    export default {
        name: "MeetingCreation",
        components:{
            ButtonGoback
        },
        data(){
            return {
                date:'',
                name:''
            };
        },
        mounted(){
            this.MeetingService = new MeetingService();
        },
        methods: {
            goback(){
                Router.push('/project/' + this.$route.params.projectId);
            },
            async createMeeting(){
                const meetingCreated = await this.MeetingService.createMeeting(100, this.name, '/', this.date, this.$route.params.projectId);
                console.log(meetingCreated);
                this.goback();
            }
        }
    }

</script>