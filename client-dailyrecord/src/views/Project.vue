<template>
    <section class="container">
        <section class="wrapper">
            <h1>{{this.project.name}}</h1>
            <section class="listDaily">
                <img src="../assets/images/add.png" alt="add">
                <DailyComponent v-for="dailyMeeting in this.project.dailyMeetings" v-bind:key="dailyMeeting.id" v-bind:dailyMeeting="dailyMeeting"></DailyComponent>
            </section>
            <div>
                <ButtonGoback @click.native="goback()"></ButtonGoback>
                <button class="buttonBlue">Add members</button>
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

    section.container section.wrapper div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    section.container section.listDaily{
        height: 300px;
        margin: 5px 0;
        display: flex;
        align-items: baseline;
        flex-direction: column;
        overflow: auto;
        border: solid 1px black;
        border-radius: 5px;
    }

    section.container section.listDaily img {
        width: 20px;
        align-self: flex-end;
        margin: 10px 20px;
        cursor: pointer;
    }

    

</style>
<script>

    //#region all imports
        import ButtonGoback from '../components/ButtonGoback.vue';
        import DailyComponent from '../components/DailyComponent.vue';
        import Router from '../router';
    //#endregion

export default {
    name:'Project',
    components:{
        ButtonGoback,
        DailyComponent
    },
    data(){
        return {
            project : undefined
        };
    },
    mounted(){
        this.project = {
            name:"Boss simulator",
            dailyMeetings:[
                {
                    id:1,
                    name:"English daily",
                    timestamp: "4"
                },
                {
                    id:2,
                    name:"Espagnol daily",
                    timestamp: "9"
                }
            ]
        }
    },
    methods:{
            goback(){
                Router.push('/home');
            }
        }
}
</script>