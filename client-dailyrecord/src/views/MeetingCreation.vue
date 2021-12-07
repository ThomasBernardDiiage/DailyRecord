<template>
    <section class="container">
        <section class="wrapper">

            <h1>Daily meeting creation</h1>

            <label for="dailyName">Name :</label>
            <input v-model="name" type="text" placeholder="Enter the name of the meeting">

            <span class="border"></span>

            <h3>Record :</h3>
            <div>
                <button @click="startRecord()" class="buttonBlue" style="margin-right:5px" id="startButton">Start</button>
                <button @click="stopRecord()" class="buttonBlue buttonBlueDisabled" id="stopButton">Stop</button>

                <audio controls v-bind:src="audioSource"></audio>
            </div>
                
            <span class="border"></span>

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
        align-items: center;
        margin-bottom: 20px;
    }

    section.container section.wrapper button.startButton img {
        height: 30px;
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
                name:'',
                audioSource : '',
                audioBlob : undefined,
                mediaRecorder : undefined,
                chunks : []
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
                const meetingCreated = await this.MeetingService.createMeeting(this.name, this.chunks[0], Date.now(), this.$route.params.projectId);

                if(meetingCreated){
                    this.goback();
                }
                else{
                    alert('error');
                }
            },
            startRecord() {
                const buttonStart = document.getElementById('startButton');
                buttonStart.classList.add('buttonBlueDisabled');
                const buttonStop = document.getElementById('stopButton');
                buttonStop.classList.remove('buttonBlueDisabled');

                this.chunks = [];
                this.mediaRecorder = undefined;
                navigator.mediaDevices.getUserMedia({audio: true,}).then((stream) => {
                    this.mediaRecorder = new MediaRecorder(stream);
                    this.mediaRecorder.ondataavailable = (e) => { this.chunks.push(e.data);};
                    this.mediaRecorder.onstop = () => {
                        this.audioSource = window.URL.createObjectURL(this.chunks[0]);
                        console.log(this.audioSource);
                    };
                    this.mediaRecorder.start();
                 })
                 .catch((err) => { alert(`The following error occurred: ${err}`);});
                 
            },
            stopRecord(){
                const buttonStop = document.getElementById('stopButton');
                buttonStop.classList.add('buttonBlueDisabled');
                const buttonStart = document.getElementById('startButton');
                buttonStart.classList.remove('buttonBlueDisabled');
                this.mediaRecorder.stop();
            },
            onResult (data) {
                this.audioBlob = data;
                const blobUrl = window.URL.createObjectURL(data);


                this.audioSource = blobUrl;
            }
        }
    }

</script>