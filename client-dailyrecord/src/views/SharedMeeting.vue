<template>
    <section class="container">
        <section class="mainWrapper">
            <h1>{{this.meeting.description}}</h1>
            <section>
                <audio preload="auto" id="audio" v-bind:src="file" controls></audio>

                </section>
            <section>
                <div>
                    <h4>Time stamps</h4>
                    <section class="list">
                        <StampComponent v-for="stamp in this.meeting.stamps" v-bind:key="stamp.id" v-bind:stamp="stamp" @click.native="jumpTo(stamp.location)"></StampComponent>
                    </section>
                </div>
                <span></span>
                <div>
                    <h4>Comments</h4>
                    <section class="list">
                        <CommentComponent v-for="comment in this.meeting.comments" v-bind:key="comment.id" v-bind:comment="comment"></CommentComponent>
                    </section>
                </div>
            </section>
        </section>
    </section>
</template>


<style scoped>
    @import '../assets/styles/main.css'; /* import the styles sheet */

    section.container section.mainWrapper{
        width: 600px;
        background-color: whitesmoke;
        box-shadow: -2px 5px 15px 0px #000000;
        border-radius: 10px;
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    section.container section.mainWrapper section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    section.container section.mainWrapper section div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 50%;
    }

    section.container section.mainWrapper section span {
        background-color: gray;
        width: 1px;
        height: 300px;
        margin: 10px;
    }

    section.container section.mainWrapper section div section.list{
        display: flex;
        align-self: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        overflow: auto;
        overflow-x: hidden;
        padding: 5px;
        height: 200px;
    }


</style>

<script>
    //#region all imports
        // import Router from '../router';
        import CommentComponent from '../components/CommentComponent.vue';
        import StampComponent from '../components/StampComponent.vue';
        import MeetingService from '../services/meetingService';
        import Config from '../../config';
    //#endregion

    export default {
        name:'Meeting',
        components: {
            CommentComponent,
            StampComponent
        },
        data() {
            return {
                meeting : undefined,
                file :undefined
            }
        },
        async mounted(){
            this.meetingService = new MeetingService();
            this.meeting = await this.meetingService.getSharedMeeting(this.$route.params.sharedMeetingId);

            this.recording = await this.meetingService.getRecording(this.meeting.id);
            
            this.file = Config.serverUrl + 'multer/getFile/' + this.meeting.id;
            

        },
        methods: {
            jumpTo(time){
                var audioElement = document.getElementById("audio");
                audioElement.currentTime =  time;
            }
        }
    }
</script>
