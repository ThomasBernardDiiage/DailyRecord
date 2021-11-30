<template>
    <section class="container">
        <section class="mainWrapper">
            <h1>{{this.meeting.name}}</h1>
            <audio controls src=""></audio>
            <section>
                <div>
                    <h4>Time stamps</h4>
                    <section class="list">
                        <StampComponent v-for="stamp in this.meeting.stamps" v-bind:key="stamp.id" v-bind:stamp="stamp"></StampComponent>
                    </section>
                    <button class="buttonBlue">Add stamp</button>
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
                meeting : {
                    name: 'Last daily meeting',
                    audio: undefined,
                    creationDate: undefined,
                    stamps : [
                        {
                            name: 'Interessant way',
                            location: '12:32'
                        },
                        {
                            name: 'test way',
                            location: '2:12'
                        },
                        {
                            name: 'test way',
                            location: '2:12'
                        }
                    ],
                    comments : [
                        {
                            username: 'Thomas Bernard',
                            text: 'test test test'
                        },
                        {
                            username: 'Baptiste Rameau',
                            text: 'Jaime les vrais hommes, Jaime les vrais hommes, Jaime les vrais hommes,Jaime les vrais hommes'
                        },
                        {
                            username: 'Thibaut Monin',
                            text: 'test test test'
                        },{
                            username: 'Tristan Devoille',
                            text: 'test test test'
                        }
                    ]
                }
            }
        },
        mounted(){
            this.commentService = new CommentService();
        },
        methods: {
            goback(){
                Router.push('/project/' + this.$route.params.projectId);
            },
            async createComment(){
                const text = await prompt("Enter the text of the comment :");
                const projectId = this.$route.params.projectId;
                const meetingId = this.$route.params.meetingId;

                this.commentService.createComment(projectId, meetingId, text);
            }
        }
    }
</script>
