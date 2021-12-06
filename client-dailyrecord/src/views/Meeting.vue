<template>
    <section class="container">
        <section class="mainWrapper">
            <h1>{{this.meeting.description}}</h1>
            <section>
                <audio v-bind:src="file" controls></audio>
                <input v-model="timeStamp" type="time">
                <button @click="createStamp()" class="buttonBlue">Add stamp</button>

                </section>
            <section>
                <div>
                    <h4>Time stamps</h4>
                    <section class="list">
                        <StampComponent v-for="stamp in this.meeting.stamps" v-bind:key="stamp.id" v-bind:stamp="stamp"></StampComponent>
                    </section>
                </div>
                <span></span>
                <div>
                    <h4>Comments</h4>
                    <section class="list">
                        <CommentComponent v-for="comment in this.meeting.comments" v-bind:key="comment.id" v-bind:comment="comment"></CommentComponent>
                    </section>
                    <button @click="createComment()" class="buttonBlue">Add comment</button>
                </div>
            </section>
            <ButtonGoback @click.native="goback()"></ButtonGoback>
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
        import ButtonGoback from '../components/ButtonGoback.vue';
        import Router from '../router';
        import CommentComponent from '../components/CommentComponent.vue';
        import StampComponent from '../components/StampComponent.vue';
        import CommentService from '../services/commentService';
        import MeetingService from '../services/meetingService';
        import StampService from '../services/stampService';
    //#endregion

    export default {
        name:'Meeting',
        components: {
            ButtonGoback,
            CommentComponent,
            StampComponent
        },
        data() {
            return {
                commentService:undefined,
                timeStamp:undefined,
                meeting : undefined,
                file :undefined
            }
        },
        async mounted(){
            this.commentService = new CommentService();
            this.meetingService = new MeetingService();
            this.stampService = new StampService();
            this.meeting = await this.meetingService.getMeeting(this.$route.params.projectId, this.$route.params.meetingId);
            this.recording = await this.meetingService.getRecording(this.$route.params.meetingId);


            this.file = 'http://localhost:3000/multer/getFile/' + this.meeting.id;
        },
        methods: {
            goback(){
                Router.push('/project/' + this.$route.params.projectId);
            },
            async createComment(){
                const text = await prompt("Enter the text of the comment :");
                const projectId = this.$route.params.projectId;
                const meetingId = this.$route.params.meetingId;

                const commentAdded = await this.commentService.createComment(projectId, meetingId, text);

                if(commentAdded){
                    this.meeting = await this.meetingService.getMeeting(this.$route.params.projectId, this.$route.params.meetingId);
                }
                else {
                    alert("error can't add this comment");
                }
            },
            async createStamp(){

                const text = prompt("Enter the name of the time stamp");
                

                try{
                    const hourMin = this.timeStamp.split(":");
                    var finalTime = parseInt(hourMin[0]*60, 10) + parseInt(hourMin[1], 10);

                }
                catch{
                    alert("Please enter a correct time");
                    return;
                }

                if(finalTime <= 0 || text == ""){
                    alert("Error please verify your values");
                    return;
                }



                const stampAdded = await this.stampService.createStamp(this.$route.params.projectId, this.$route.params.meetingId, finalTime, text);

                if(stampAdded){
                    this.meeting = await this.meetingService.getMeeting(this.$route.params.projectId, this.$route.params.meetingId);
                }
                else {
                    alert("error to add timestamp");
                } 
            }
        }
    }
</script>
